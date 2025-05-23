import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
function Header() {
    const { t, i18n } = useTranslation();
    const location = useLocation()
    const navigate = useNavigate();
    const handlBtnChangeLangClick = () => {
        const langs: string[] = ['de', 'en', 'es', 'fr', 'ja', 'zh']
        let randomLocale: string
        do {
            randomLocale = langs[Math.floor(Math.random() * langs.length)]
        } while (randomLocale === i18n.language)
        const splitLocation = location.pathname.split('/')
        splitLocation[1] = randomLocale
        navigate(splitLocation.join('/'), { replace: true }); // Optional: update URL if needed
    }
    return (
        <>
            <div>
                <button
                    aria-label={t('common.language.change_language')}
                    onClick={handlBtnChangeLangClick}>
                    {t('common.language.change_language')}
                </button>
            </div>
        </>
    )
}

export default Header
