import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/p-lacerda.png" />
          <div className={styles.authorInfo}>
            <strong>Paulo de Tasso</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 08:14h" dateTime="2022-05-11 08:13:30">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Oi, tudo bom?</p>
        <p>Meu nome é Paulo e quero apresentar meu portifólio para vocês</p>
        <p><a href="https://paulodetasso.me">https://paulodetasso.me</a></p>
        <p><a href="#">#programação #code4life #portfolio</a></p>
      </div>
    </article>
  )
}
