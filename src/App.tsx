import './App.css'
import { CssBaseline } from '@mui/material'
import { AppProvider } from './contexts/AppProvider'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from './layout/MainLayout'
import { Home } from './pages/Home'
import { Blog } from './pages/Blog'
import { Contact } from './pages/Contact'
import { Login } from './pages/Login'

export const App = () => {
  return (
    <AppProvider>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path='contact' element={<Contact/>} />
            <Route path='login' element={<Login/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}
