import { useTranslation } from 'react-i18next';
import Header from '@/components/cells/header/Header'
import styles from './Home.module.css';
function Home() {
    const { t } = useTranslation();

    return (
        <>
            <div>
                <Header />
                <p className={styles.p}>
                    {t('under_construction')} ~ {t('common.language.language')}
                </p>
            </div>
        </>
    )
}

export default Home