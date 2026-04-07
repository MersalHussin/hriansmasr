import './App.css'
import './index.css'
import './i18n'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Home from './pages/Home'
// import Contact from './pages/ContactPage'
import HiddenMarketPage from './pages/HiddenMarketPage'
import HRRoadmapPage from './pages/HRRoadmapPage'
import HRRoadmapFormPage from './pages/HRRoadmapFormPage'
import HRRoadmapDashboard from './pages/HRRoadmapDashboard'
import Footer from './components/Footer'

function App() {
  return (
    <HelmetProvider>
    <BrowserRouter>
      <Navbar />
          <div className='h-[90px]'></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hidden-market-masterclass" element={<HiddenMarketPage />} />
        <Route path="/hr-roadmap" element={<HRRoadmapPage />} />        <Route path="/hr-roadmap/book" element={<HRRoadmapFormPage />} />        <Route path="/admin/hr-roadmap" element={<HRRoadmapDashboard />} />        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="*" element={<h1>Error</h1>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </HelmetProvider>
  )
}

export default App