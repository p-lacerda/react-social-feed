import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://picsum.photos/500/300" alt="" />
      <div className={styles.profile}>
        <strong>Nome do usuário</strong>
        <span>Descrição</span>
      </div>

      <footer>
        <a href="#">
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}