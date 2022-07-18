import { useState } from "react"
import { FeedTasks } from "./components/FeedTasks"
import { Header } from "./components/Header"
import { InputTask } from "./components/InputTask"


function App() {

  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState([''])
  
  return (
    <>
      <Header/>
      <InputTask tasks={tasks} setTasks={setTasks} newTask={newTask} setNewTask={setNewTask}/>
      <FeedTasks/>
    </>
      
  )
}

export default App
