import { useState } from "react"
import { FeedTasks } from "./components/FeedTasks"
import { Header } from "./components/Header"
import { InputTask } from "./components/InputTask"
import { FeedWithoutTasks } from "./components/FeedWithoutTasks"


function App() {

  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState<string[]>([])
  
  return (
    <>
      <Header/>
      <InputTask tasks={tasks} setTasks={setTasks} newTask={newTask} setNewTask={setNewTask}/>
      {tasks.length === 0 ? <FeedWithoutTasks/> : <FeedTasks tasks={tasks} setTasks={setTasks}/>}
    </>
      
  )
}

export default App
