import globalStyles from '../../styles/global/settings.css';
import styles from './NotFoundPage.module.css';

export const NotFoundPage = () => {
  return (
    <div className={globalStyles.container}>
      <div className={styles.container}>
        <h1>
          Page not found
        </h1>
      </div>
    </div>
  );
};