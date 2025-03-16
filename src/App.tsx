import './App.css'
import { CssBaseline } from '@mui/material'
import { AppProvider } from './contexts/AppProvider'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from './layout/MainLayout'
import { Home } from './pages/Home'

export const App = () => {
  return (
    <AppProvider>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}
