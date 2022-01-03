const Task = ({ task }) => {
    return (
        <div className='task'>
            <h3>{task.text}</h3>
            <p>{task.day}</p>
            <p>{task.reminder == true ? 'Reminder set' : 'Reminder not set'}</p>
        </div>
    )
}

export default Task
