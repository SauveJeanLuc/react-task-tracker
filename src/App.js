import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AddTask from './components/AddTask';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import About from "./components/About";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    
    getTasks()
  }, [])

  // Fetch tasks

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:500/tasks')
    const data = await res.json()

    return data
  }
  
  // Fetch task

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:500/tasks/${id}`)
    const data = await res.json()

    return data
  }
  // Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:500/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()

    setTasks([...tasks, data])
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task } 
    // setTasks([...tasks, newTask])
  } 

  // Delete Task  
  const deleteTask = async (id) => {
    await fetch(`http://localhost:500/tasks/${id}`, {
      method: 'DELETE'
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
    
    const res = await fetch(`http://localhost:500/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json()
      
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task))
  }

  return (
    <Router>
      <div className="App">
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
        {/* {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
        ) : (
            'No Tasks To Show'
        )} */}
        <Routes>
          <Route path={'/'} exact={true} render={(props) => (
            <>
              {/* These are not showing up, Please fix bug */}
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
              ) : (
                  'No Tasks To Show'
              )}             
            </>
          )} />

          <Route path='/about' element={<About />} />
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

// class App extends React.Component {
//   render() {
//     return <h1> Hello From a Class</h1>
//   }
// }

export default App;
