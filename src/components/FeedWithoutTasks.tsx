import style from "./FeedWithoutTasks.module.css";
import imgFeedWithoutTask from "../assets/imgFeedWithoutTask.svg"


export function FeedWithoutTasks() {


  return (
    <main className={style.main}>
      <header className={style.header}>
        <div>
          <strong>Tarefas criadas</strong>
          <span>0</span>
        </div>
        <div>
          <strong>Concluídas</strong>
          <span>0</span>
        </div>
      </header>

      <div className={style.divFeed}>
        <img src={imgFeedWithoutTask}/>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
      
    </main>
  );
}
