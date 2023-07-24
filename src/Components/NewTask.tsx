import { PlusCircle } from '@phosphor-icons/react';
import styles from './NewTask.module.css'

export function NewTask() {
  return (
    <form action="">
      <input type="text" name="inputText" placeholder='Adicione uma nova tarefa'/>

      <button type="submit" className={styles.button}>
        Criar 
        <PlusCircle size={21} />
      </button>
    </form>
  )
    
}