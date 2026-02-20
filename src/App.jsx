import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import FloatingButtons from './components/FloatingButtons'
import Home from './pages/Home'
import Team from './pages/Team'
import Resources from './pages/Resources'
import RhinePRMarketing from './pages/RhinePRMarketing'
import RhineHR from './pages/RhineHR'
import Careers from './pages/Careers'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import './styles/main.css'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/research-insights" element={<Resources />} />
          <Route path="/rhine-pr-marketing" element={<RhinePRMarketing />} />
          <Route path="/rhine-hr" element={<RhineHR />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service/view" element={<ServiceDetail />} />
        </Routes>
        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  )
}

export default App

