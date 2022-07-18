import styles from "./InputTask.module.css";
import iconPlus from "../assets/icon-plus.svg";
import { ChangeEvent, FormEvent } from "react";

interface TaskProps {
  tasks: string[];
  setTasks: React.Dispatch<React.SetStateAction<string[]>>;
  newTask: string;
  setNewTask: React.Dispatch<React.SetStateAction<string>>;
}

export function InputTask({ newTask, setNewTask, tasks, setTasks }: TaskProps) {
  function handleChangeNewTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleNewTask(event: FormEvent) {
    event.preventDefault();

    const CurrentTasks = [...tasks, newTask];
    setTasks([...tasks, newTask]);
    localStorage.setItem("@taskList", JSON.stringify(CurrentTasks));
  }

  return (
    <form onSubmit={handleNewTask} className={styles.formInput}>
      <input
        onChange={handleChangeNewTask}
        value={newTask}
        type="text"
        placeholder="Adicione uma nova tarefa"
      />
      <button type="submit">
        Criar <img src={iconPlus} />
      </button>
    </form>
  );
}
