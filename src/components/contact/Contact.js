import globalStyles from '../../styles/global/settings.css';
import styles from './Contact.module.css';

export const Contact = () => {
  const stars =
    <div className={styles.mainContent__stars}>
      <img src="/img/contact/stars.svg" alt="Stars" />
      <img src="/img/contact/stars.svg" alt="Stars" />
      <img src="/img/contact/stars.svg" alt="Stars" />
      <img src="/img/contact/stars.svg" alt="Stars" />
      <img src="/img/contact/stars.svg" alt="Stars" />
    </div>;

  return (
    <div className={globalStyles.container}>
      <main className={styles.mainContent}>
        <div className={styles.mainContent__subscribeForm}>
          <div className={styles.subscribeForm__list}>
            <p className={styles.subscribeForm__text}>Email Newsletter</p>
            <h2 className={styles.subscribeForm__title}>Subscribe <br /> for updates</h2>
            <img src="/img/contact/lines.svg" alt="Lines" className={styles.subscribeForm__img} />
          </div>
          <div className={styles.mainContent__mainForm}>
            <form action="" className={styles.mainContent__form}>
              <input type="text" className={styles.mainContent__input} placeholder={'Name'} />
              <input type="text" className={styles.mainContent__input} placeholder={'Email'} />
              <button type={'submit'} className={styles.mainContent__submitButton}>Submit</button>
            </form>
          </div>
        </div>
        <ul className={styles.mainContent__reviewsList}>
          <li>
            <div className={styles.mainContent__review}>
              {stars}
              <h2 className={styles.mainContent__reviewComment}>I can’t recommend this podcast enough</h2>
              <p className={styles.mainContent__reviewAuthor}>Betty Lacey</p>
            </div>
          </li>
          <li>
            <div className={styles.mainContent__review}>
              {stars}
              <h2 className={styles.mainContent__reviewComment}>Jacob is the best in the business</h2>
              <p className={styles.mainContent__reviewAuthor}>Adam Driver</p>
            </div>
          </li>
          <li>
            <div className={styles.mainContent__review}>
              {stars}
              <h2 className={styles.mainContent__reviewComment}>A wealth of audio knowledge</h2>
              <p className={styles.mainContent__reviewAuthor}>Marcus Brown</p>
            </div>
          </li>
          <li>
            <div className={styles.mainContent__review}>
              {stars}
              <h2 className={styles.mainContent__reviewComment}>Every episode is a gem!</h2>
              <p className={styles.mainContent__reviewAuthor}>Jessica Knowl</p>
            </div>
          </li>
          <li>
            <div className={styles.mainContent__review}>
              {stars}
              <h2 className={styles.mainContent__reviewComment}>Whoa whoa, let me take some notes!</h2>
              <p className={styles.mainContent__reviewAuthor}>Scott Adams</p>
            </div>
          </li>
          <li>
            <div className={styles.mainContent__review}>
              {stars}
              <h2 className={styles.mainContent__reviewComment}>I’ve upped my game considerably since I started
                listening</h2>
              <p className={styles.mainContent__reviewAuthor}>Steven Blast</p>
            </div>
          </li>
        </ul>
      </main>
    </div>
  );
};