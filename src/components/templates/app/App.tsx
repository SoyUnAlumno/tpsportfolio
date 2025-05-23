import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import Home from '@/components/templates/home/Home'
import LanguageSwitcher from '@/components/templates/language-switcher/LanguageSwitcher'

function App() {
  const { i18n } = useTranslation();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={`/${i18n.language}/home`} replace />} />
        {/* Language-specific routes */}
        <Route path="/:lang" element={<LanguageSwitcher />}>
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
