import styles from './Episodes.module.css';

export const Episodes = () => {
  return (
    <main className={styles.mainProduct}>
      <div className={styles.mainProduct__header}>
        <h1 className={styles.header__title}>Latest episodes</h1>
        <a href="" className={styles.header__button}>View all episodes</a>
      </div>
      <ul className={styles.mainProduct__blocks}>
        <li>
          <div className={styles.mainProduct__block}>
            <img src="/img/episodes/mixer.png" alt="Mixer" />
            <ul className={styles.productContainer__description}>
              <li>
                <p className={styles.description__type}>Gear</p>
              </li>
              <li>
                <p className={styles.description__episode}>Episode 3</p>
              </li>
              <li>
                <h2 className={styles.description__title}>Should you get outboard audio gear?</h2>
              </li>
              <li>
                <p className={styles.description__text}>Is hardware really worth it when it comes to podcasting? The
                  answer is...it depends. Here’s our reasons on why you might want to consider picking something up.</p>
              </li>
              <li>
                <a href="" className={styles.description__button}>View Episode Details</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div className={styles.mainProduct__block}>
            <img src="/img/episodes/mic.png" alt="Mixer" />
            <ul className={styles.productContainer__description}>
              <li>
                <p className={styles.description__type}>Tips & Tricks</p>
              </li>
              <li>
                <p className={styles.description__episode}>Episode 2</p>
              </li>
              <li>
                <h2 className={styles.description__title}>Mic tricks to take you to the next level</h2>
              </li>
              <li>
                <p className={styles.description__text}>Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great.</p>
              </li>
              <li>
                <a href="" className={styles.description__button}>View Episode Details</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div className={styles.mainProduct__block}>
            <img src="/img/episodes/mixer.png" alt="Mixer" />
            <ul className={styles.productContainer__description}>
              <li>
                <p className={styles.description__type}>Gear</p>
              </li>
              <li>
                <p className={styles.description__episode}>Episode 1</p>
              </li>
              <li>
                <h2 className={styles.description__title}>The best microphone under $200</h2>
              </li>
              <li>
                <p className={styles.description__text}>With so many microphones on the market, how are you supposed to know what’s the best? Take a look at our top picks.</p>
              </li>
              <li>
                <a href="" className={styles.description__button}>View Episode Details</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </main>
  );
};