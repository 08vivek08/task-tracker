import {FaTimes} from 'react-icons/fa'

const Task = ({task , onDelete , onToggle}) => {
    return (
        <div className={`task ${task.completed?'done':''}`} onDoubleClick={()=>{onToggle(task._id)}}>
            <h3>
                {task.name}
                <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={()=>{ onDelete(task._id) }}
                />
            </h3>
        </div>
    )
}

export default Task