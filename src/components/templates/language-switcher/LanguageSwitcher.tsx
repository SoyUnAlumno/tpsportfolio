import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams, useNavigate, Outlet, NavigateFunction } from "react-router-dom";


function LanguageSwitcher() {
    const { lang } = useParams();  // Get language parameter from URL
    const { i18n } = useTranslation();
    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        if (lang && i18n.language !== lang) {
            i18n.changeLanguage(lang); // Change language based on URL param
            const splitLocation = location.pathname.split('/')
            splitLocation[1] = lang
            navigate(splitLocation.join('/'), { replace: true }); // Optional: update URL if needed
            // navigate(`/${lang}`); // Optional: update URL if needed
        }
    }, [lang, i18n, navigate]);

    return <Outlet />;
};

export default LanguageSwitcher