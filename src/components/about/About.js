import styles from './About.module.css';

export const About = () => {
  return (
    <main className={styles.mainContent}>
      <ul className={styles.mainContent__list}>
        <li>
          <div className={styles.contentButtonRectangle}>
            <a href=""><img src="/img/about/arrow.svg" alt="Arrow" className={styles.contentButton} /></a>
          </div>
        </li>
        <li>
          <p className={styles.contentButtonDescription}>Meet your host</p>
        </li>
        <li>
          <h2 className={styles.contentTitle}>Jacob Paulaner</h2>
        </li>
        <li>
          <p className={styles.contentText}>Jacob has a background in audio engineering, and has been podcasting since
            the early days.</p>
        </li>
        <li>
          <p className={styles.contentText}>He’s here to help you level up your game by sharing everything he’s learned
            along the way.</p>
        </li>
      </ul>
      <img src="/img/about/person.png" alt="Jacob" className={styles.mainContent__img} />
    </main>
  );
};