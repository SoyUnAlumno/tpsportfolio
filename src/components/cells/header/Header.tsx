import { useTranslation } from 'react-i18next';

function Header() {
    const { t, i18n } = useTranslation();
    const handlBtnChangeLangClick = () => {
        const langs = ['de', 'en', 'es', 'fr', 'ja', 'zh']
        const randomLocale = langs[Math.floor(Math.random() * langs.length)];
        i18n.changeLanguage(randomLocale)
    }
    return (
        <>
            <div>
                <button
                    id="btnChangeLanguage"
                    aria-label={t('change_language')}
                    onClick={handlBtnChangeLangClick}>
                    Change Language
                </button>
            </div>
        </>
    )
}

export default Header
