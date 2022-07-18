import style from "./FeedTasks.module.css";
import { Trash } from 'phosphor-react'
import { ChangeEvent, useState } from "react";

interface FeedProps {
  tasks: string[];
  setTasks: React.Dispatch<React.SetStateAction<string[]>>;
}

export function FeedTasks({ tasks, setTasks }: FeedProps) {

  const [countChecks, setCountChecks] = useState(0)

  function handleDeleteTask(taskToDelet: string){
      const tasksWithoutDeletedOne = tasks.filter(task => {
        return task !== taskToDelet
      })
      setTasks(tasksWithoutDeletedOne)
  }

  function handleChecked(event: ChangeEvent<HTMLInputElement>){
    if (event.target.checked) {
      setCountChecks(countChecks + 1)
    }
  }

  return (
    <main className={style.main}>
      <header className={style.header}>
        <div>
          <strong>Tarefas criadas</strong>
          <span>{tasks.length}</span>
        </div>
        <div>
          <strong>Concluídas</strong>
          <span>{countChecks} de {tasks.length}</span>
        </div>
      </header>

      {tasks.map(task => {
        return(
          <div key={task} className={style.divInput}>
            <input onChange={handleChecked} type='checkbox' id={task} name={task}/>
            <label htmlFor={task}></label>
            <span>{task}</span>
            <button onClick={() => handleDeleteTask(task)}><Trash/></button>
          </div>
        )
      })} 
      
    </main>
  );
}
