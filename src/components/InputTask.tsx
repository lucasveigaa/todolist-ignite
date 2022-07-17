import styles from './InputTask.module.css'
import iconPlus from '../assets/icon-plus.svg'

export function InputTask() {
    return(
        <div className={styles.divInput}>
            <input type='text' placeholder='Adicione uma nova tarefa'/>
            <button>Criar <img src={iconPlus}/></button>
        </div>
    )
}