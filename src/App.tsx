import { Header } from './Components/Header'
import './global.css'
import styles from './App.module.css'
import { NewTask } from './Components/NewTask'
import { Counter } from './Components/Counter'


function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <NewTask />
        <Counter />
      </div>
      
    </>
  )
}

export default App
