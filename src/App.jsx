import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './i18n'
import { useTranslation } from "react-i18next"
import i18next from 'i18next'
import { LOCALS } from './i18n/constants'

function App() {
  const [count, setCount] = useState(0)

  const { t } = useTranslation();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {t('button.counts', { count })}
        </button>
      </div>
      <h2 className="read-the-docs">
        {t('Welcome to React')}
      </h2>

      <div>
        <button disabled={i18next.language === LOCALS.EN} onClick={() => i18next.changeLanguage(LOCALS.EN)}>English</button>
        <button disabled={i18next.language === LOCALS.DE} onClick={() => i18next.changeLanguage(LOCALS.DE)}>Deutsche</button>
        <button disabled={i18next.language === LOCALS.UK} onClick={() => i18next.changeLanguage(LOCALS.UK)}>Українська</button>
      </div>
    </>
  )
}

export default App
