import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import UserDetails from './pages/UserDetails'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='h-screen bg-[#f7f9fb]'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users/:userId" element={<UserDetails />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App