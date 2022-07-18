import style from "./FeedTasks.module.css";
import { Trash } from 'phosphor-react'

export function FeedTasks() {
  return (
    <main className={style.main}>
      <header className={style.header}>
        <div>
          <strong>Tarefas criadas</strong>
          <span>5</span>
        </div>
        <div>
          <strong>Concluídas</strong>
          <span>2 de 5</span>
        </div>
      </header>

      <div className={style.divInput}>
        <input type='checkbox' id='tarefa1' name='tarefa1'/>
        <label htmlFor='tarefa1'></label>
        <span>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
        <button><Trash/></button>
      </div>
      <div className={style.divInput}> 
        <input type='checkbox' id='tarefa2' name='tarefa2'/>
        <label htmlFor='tarefa2'></label>
        <span>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
        <button><Trash/></button>
      </div>
      
    </main>
  );
}
