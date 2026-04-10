import './App.css'
import './index.css'
import './i18n'
import React, { useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Home from './pages/Home'
// import Contact from './pages/ContactPage'
import HiddenMarketPage from './pages/HiddenMarketPage'
import HiddenMarketFormPage from './pages/HiddenMarket/HiddenMarketFormPage'
import HiddenMarketSuccessPage from './pages/HiddenMarket/HiddenMarketSuccessPage'
import HRRoadmapPage from './pages/HRRoadmapPage'
import HRRoadmapFormPage from './pages/HRRoadmapFormPage'
import HRRoadmapSuccessPage from './pages/HRRoadmapSuccessPage'
import HRRoadmapDashboard from './pages/HRRoadmapDashboard'
import HiddenMarketDashboard from './pages/HiddenMarket/HiddenMarketDashboard'
import AdminSelectionPage from './pages/AdminSelectionPage'
import Footer from './components/Footer'

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isCleanLayout = location.pathname.includes('/book') || 
                        location.pathname.includes('/success') || 
                        location.pathname.includes('/admin');

  return (
    <>
      {!isCleanLayout && (
        <>
          <Navbar />
          <div className='h-[90px]'></div>
        </>
      )}
      {children}
      {!isCleanLayout && <Footer />}
    </>
  );
}

function App() {
useEffect(() => {
    ReactPixel.init('3650506688423849'); 
    ReactPixel.pageView(); 
  }, []);

  return (
    <HelmetProvider>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminSelectionPage />} />
          <Route path="/hidden-market-masterclass" element={<HiddenMarketPage />} />
          <Route path="/hidden-market-masterclass/book" element={<HiddenMarketFormPage />} />
          <Route path="/hidden-market-masterclass/success" element={<HiddenMarketSuccessPage />} />
          <Route path="/admin/hidden-market" element={<HiddenMarketDashboard />} />
          <Route path="/hr-roadmap" element={<HRRoadmapPage />} />        <Route path="/hr-roadmap/book" element={<HRRoadmapFormPage />} />        <Route path="/hr-roadmap/success" element={<HRRoadmapSuccessPage />} />        <Route path="/admin/hr-roadmap" element={<HRRoadmapDashboard />} />        {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="*" element={<h1>Error</h1>} />
        </Routes>
      </Layout>
    </BrowserRouter>
    </HelmetProvider>
  )
}

export default App