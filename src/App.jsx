import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Dashboard from './pages/Dashboard'
import Chat from './pages/Chat'
import Settings from './pages/Settings'
import NotFound from './pages/NotFound'

function App() {
  const darkMode = useSelector(
    (state) => state.settings.darkMode
  )

  // Apply dark mode globally
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="app">
      <Routes>
        
        <Route path="/" element={<Dashboard />} />

        
        <Route path="/chat" element={<Chat />} />

        
        <Route path="/settings" element={<Settings />} />

  
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App