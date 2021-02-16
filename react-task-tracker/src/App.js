import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import About from './components/About'


function App() {
  const [tasks, setTasks] = useState([
    // {
    //   id: 1,
    //   name: "Doctor's Apointment",
    //   completed: true,
    // },
    // {
    //   id: 2,
    //   name: "Meeting at school",
    //   completed: false,
    // }
  ])
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  // fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('/api/todos')
    const data = await res.json()
    // console.log(data)
    return data
    // fetch('/api/todos/').then(res => {
    //   if (res.ok) {
    //     return res.json()
    //   }
    // }).then(tasks=> setTasks(tasks))
  }

  // ShowAddTask 
  const [showAddTask, setShowAddTask] = useState(false)

  // Add Task
  const addTask = async (task) => {
    const res = await fetch('/api/todos', {
      method: "POST",
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()

    setTasks([...tasks, data])

    // console.log(task);
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { ...task }
    // setTasks([...tasks, newTask])
    // setShowAddTask(!showAddTask)
  }

  // Delete Task
  const deleteTask = async (id) => {
    // console.log('delete', id);
    await fetch(`/api/todos/${id}/`, {
      method: "DELETE",
    })
    setTasks(tasks.filter((task) => (task._id !== id)))
  }

  // fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`/api/todos/${id}`)
    const data = await res.json()
    // console.log(data)
    return data
  }

  // Toggle Remainder
  const toggleComplete = async (id) => {
    // console.log('toggle', id);
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, completed: !taskToToggle.completed }

    const res = await fetch(`/api/todos/${id}`, {
      method: "PUT",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json()

    setTasks(tasks.map((task) => ((task._id === id) ? { ...task, completed: data.completed } : task)))
  }

  return (
    <Router>
      <div className="container">
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />

        <Route path='/' exact render={(props) => (
          <>
            {(showAddTask) && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? (
              <Tasks
                tasks={tasks}
                onDelete={deleteTask}
                onToggle={toggleComplete}
              />
            ) : (
                <p>No tasks to Show</p>
              )
            }
          </>
        )} />
        <Route path='/about' component={About} />
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
// rafce
