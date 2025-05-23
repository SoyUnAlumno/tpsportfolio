import { Trans, useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Header from '@/components/cells/header/Header'
import reactLogo from '../../../assets/react.svg';
import styles from './App.module.css';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0)
  const { t, i18n } = useTranslation();

  return (
    <>
      <div>
        <Header />
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className={styles.logo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className={`${styles.logo} ${styles.react}`} alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={styles.card}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          {t('under_construction')} ~ {t('language')}
        </p>
      </div>
      <p className={styles['read-the-docs']}>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
