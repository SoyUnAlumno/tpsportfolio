import { Trans, useTranslation } from 'react-i18next';
import Header from '@/components/cells/header/Header'

function Home() {
    const { t } = useTranslation();

    return (
        <>
            <div>
                <Header />
                <p>
                    {t('under_construction')} ~ {t('common.language.language')}
                </p>
            </div>
        </>
    )
}

export default Home