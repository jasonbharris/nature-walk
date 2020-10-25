import React from 'react'
import { BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'

const App = () => {
  return (
    <>
      <header>
        <Router>
          <Navigation />
          <Hero />
        </Router>
      </header>

      <main>
        <p>This is the main content area.</p>
      </main>
    </>
  )
}

export default App
