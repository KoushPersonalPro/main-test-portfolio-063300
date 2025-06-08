import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './components/theme/theme-provider'
import { Toaster } from './components/ui/toaster'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Login from './pages/Login'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
          <Toaster />
        </div>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App;