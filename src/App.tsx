import './App.css'
import { CssBaseline } from '@mui/material'
import { AppProvider } from './contexts/AppProvider'

import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './layout/MainLayout'
import { Home } from './pages/Home'
import { Blog } from './pages/Blog'
import { Contact } from './pages/Contact'
import { LoginForm } from './pages/LoginForm'
import { Dashboard } from './pages/Dashboard'
import { ProtectedRouteDashboard } from './components/ProtectedRouteDashboard'

export const App = () => {
  return (
    <AppProvider>
      <CssBaseline />

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<LoginForm />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRouteDashboard>
                <Dashboard />
              </ProtectedRouteDashboard>
            }
          />
        </Route>
      </Routes>
    </AppProvider>
  )
}
