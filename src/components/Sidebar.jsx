import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://picsum.photos/500/300" alt="" />

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/p-lacerda.png" />
        <strong>Nome do usuário</strong>
        <span>Descrição</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}