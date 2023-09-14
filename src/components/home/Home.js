import styles from './Home.module.css';

export const Home = () => {
  return (
    <main className={styles.mainContent}>
      <div>
        <img src="/img/home/lines.svg" alt="Lines" className={styles.mainContent__linesImg} />
        <img src="/img/home/person.png" alt="Person" className={styles.mainContent__personImg} />
      </div>
      <div className={styles.mainContent__textAndLinks}>
        <h1 className={styles.mainContent__title}>
          Take your <br /> podcast to the<br />
          <span className={styles.title__nextWord}>next </span>
          <span className={styles.title__levelWord}>level</span>
        </h1>
        <div>

        </div>
        <p className={styles.textAndLinks_linksTitle}>
          Listen on
        </p>
        <ul className={styles.textAndLinks_streamingList}>
          <li>
            <img src="/img/links-elements/icon1.svg" alt="music1" />
          </li>
          <li>
            <img src="/img/links-elements/icon2.svg" alt="music2" />
          </li>
          <li>
            <img src="/img/links-elements/icon3.svg" alt="music3" />
          </li>
          <li>
            <img src="/img/links-elements/icon4.svg" alt="music4" />
          </li>
          <li>
            <img src="/img/links-elements/icon5.svg" alt="music5" />
          </li>
        </ul>
      </div>
    </main>
  );
};