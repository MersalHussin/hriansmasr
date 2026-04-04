import './App.css'
import './index.css'
import './i18n'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Founder from './pages/FounderPage'
import Contact from './pages/ContactPage'
import Services from './pages/ServicesPage'
import Footer from './components/Footer'
import PrivacyPolicy from './pages/PrivacyPolicyPage'
import Terms from './pages/TermsPage'

function App() {
  return (
    <HelmetProvider>
    <BrowserRouter>
      <Navbar />
          <div className='h-[90px]'></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<h1>Error</h1>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </HelmetProvider>
  )
}

export default App