import React from 'react'
import { useState } from 'react'
import AddTask from './components/AddTask';
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
      {
          id: 1,
          text: 'Doctors Appointment',
          day: 'Feb 5th at 2:30pm',
          reminder: true
      },
      {
          id: 2,
          text: 'Meeting at School',
          day: 'Feb 6th at 1:30pm',
          reminder: true
      },
      {
          id: 3,
          text: 'Food Shopping',
          day: 'Feb 6th at 1:30pm',
          reminder: false
      },
  ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task } 
    setTasks([...tasks, newTask])
    console.log(id)
  } 

  // Delete Task  
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="App">
      <Header />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      ) : (
          'No Tasks To Show'
      )
      }
    </div>
  );
}

// class App extends React.Component {
//   render() {
//     return <h1> Hello From a Class</h1>
//   }
// }

export default App;
