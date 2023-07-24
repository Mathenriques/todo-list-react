import styles from './Counter.module.css'

export function Counter() {
  return (
    <header className={styles.header}>
      <div>
        <span className={styles.indicadorCriado}>Tarefas Criadas</span>
        <span className={styles.contador}>0</span>
      </div>
      <div>
        <span className={styles.indicadorConcluido}>Tarefas Concluidas</span>
        <span className={styles.contador}>0</span>
      </div>
    </header>
  )
}