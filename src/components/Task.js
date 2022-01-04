import { FaTimes } from 'react-icons/fa'

const Task = ({ task }) => {
    return (
        <div className='task'>
            <h3>{task.text} <FaTimes style={ { color: 'red', cursor: 'pointer'} }/></h3>
            <p>{task.day}</p>
            <p>{task.reminder === true ? 'Reminder set' : 'Reminder not set'}</p>
        </div>
    )
}

export default Task
