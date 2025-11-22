import './App.css'
import './index.css'
import './i18n'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Founder from './pages/FounderPage'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
          <div className='h-[90px]'></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="*" element={<h1>Error</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App