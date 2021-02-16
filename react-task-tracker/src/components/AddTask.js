import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [name, setName] = useState('')
    const [completed, setCompleted] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            alert('Please add a task')
            return;
        }
        onAdd({ name, completed })
        setName('')
        setCompleted(false)
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input
                    type='name'
                    placeholder='Insert your task here...'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Mark done for today</label>
                <input
                    type='checkbox'
                    checked={completed}
                    onChange={(e) => setCompleted(e.currentTarget.checked)}
                />
            </div>

            <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
    )
}

export default AddTask
