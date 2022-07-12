import { Header } from "./components/Header"
import Post from "./Post"
import './global.css';
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="J. R. R Tolkien" content="Senhor dos Aneis é muito bom" />
          <Post author="Eu" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur tempora sunt ad obcaecati rem nemo unde sint velit in. Quia magni consequuntur excepturi nobis distinctio sequi nesciunt, laboriosam ullam delectus!" />
        </main>
      </div>
    </div>
  )
}

export default App

