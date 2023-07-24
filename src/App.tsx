import { Header } from './Components/Header'
import './global.css'
import styles from './App.module.css'
import { NewTask } from './Components/NewTask'


function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <NewTask />
      </div>
    </>
  )
}

export default App
