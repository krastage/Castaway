import globalStyles from '../../styles/global/settings.css';
import styles from './About.module.css';

export const About = () => {
  return (
    <div className={globalStyles.container}>
      <main className={styles.mainContent}>
        <div className={styles.mainContent__list}>
            <div className={styles.contentButtonRectangle}>
              <a href=""><img src="/img/about/arrow.svg" alt="Arrow" className={styles.contentButton} /></a>
            </div>
            <p className={styles.contentButtonDescription}>Meet your host</p>
            <h2 className={styles.contentTitle}>Jacob Paulaner</h2>
            <p className={styles.contentText}>Jacob has a background in audio engineering, and has been podcasting since
              the early days.</p>
            <p className={styles.contentText}>He’s here to help you level up your game by sharing everything he’s
              learned along the way.</p>
        </div>
        <img src="/img/about/person.png" alt="Jacob" className={styles.mainContent__img} />
      </main>
    </div>
  );
};