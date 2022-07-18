import { useState } from "react";
import { FeedTasks } from "./components/FeedTasks";
import { Header } from "./components/Header";
import { InputTask } from "./components/InputTask";
import { FeedWithoutTasks } from "./components/FeedWithoutTasks";

function App() {
  let arrCurrentTasks: string[] = [];
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState<string[]>(arrCurrentTasks);

  const currentTasks = JSON.parse(localStorage.getItem("@taskList")!);

  currentTasks?.forEach((task: string) => {
    arrCurrentTasks.push(task);
  });

  return (
    <>
      <Header />
      <InputTask
        tasks={tasks}
        setTasks={setTasks}
        newTask={newTask}
        setNewTask={setNewTask}
      />
      {tasks.length === 0 ? (
        <FeedWithoutTasks />
      ) : (
        <FeedTasks tasks={tasks} setTasks={setTasks} />
      )}
    </>
  );
}

export default App;
