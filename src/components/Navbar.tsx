import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { t, i18n } = useTranslation()
  const location = window.location

  useEffect(() => {
    if (i18n.language === 'en') {
      document.body.classList.add('ltr-text')
      document.documentElement.style.setProperty('--text-align', 'left')
    } else {
      document.body.classList.remove('ltr-text')
      document.documentElement.style.setProperty('--text-align', 'right')
    }
  }, [i18n.language])

  useEffect(() => {
    if (location.pathname !== '/') return
    
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'clients', 'faq']
      const scrollPosition = window.scrollY + 150
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  const toggleLang = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar'
    i18n.changeLanguage(newLang)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      closeMenu()
    }
  }

  return (
    <nav className='bg-primary h-[90px] w-full fixed flex items-center z-99'>
      <div className='container mx-auto px-4 flex items-center justify-between text-white'>
        <Link to="/"><img src="/images/logo.png" className='h-8 md:h-12 cursor-pointer' alt="" /></Link>
        
        {/* Overlay */}
        {isOpen && (
          <div 
            className='fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-40'
            onClick={closeMenu}
          />
        )}

        {/* Desktop Menu */}
        <ul className='hidden lg:flex flex-row items-center space-x-4'>
          {location.pathname === '/' ? (
            <>
              <li className={`hover:text-yellow-v2 px-3 py-2 font-bold rounded cursor-pointer ${activeSection === 'home' ? 'text-yellow-v2' : ''}`} onClick={() => scrollToSection('home')}>{t('home')}</li>
              <li className={`hover:text-yellow-v2 px-3 py-2 font-bold rounded cursor-pointer ${activeSection === 'about' ? 'text-yellow-v2' : ''}`} onClick={() => scrollToSection('about')}>{t('about')}</li>
              <li className={`hover:text-yellow-v2 px-3 py-2 font-bold rounded cursor-pointer ${activeSection === 'services' ? 'text-yellow-v2' : ''}`} onClick={() => scrollToSection('services')}>{t('services')}</li>
              <li className={`hover:text-yellow-v2 px-3 py-2 font-bold rounded cursor-pointer ${activeSection === 'clients' ? 'text-yellow-v2' : ''}`} onClick={() => scrollToSection('clients')}>{t('clients')}</li>
              <li className={`hover:text-yellow-v2 px-3 py-2 font-bold rounded cursor-pointer ${activeSection === 'faq' ? 'text-yellow-v2' : ''}`} onClick={() => scrollToSection('faq')}>{t('faq')}</li>
            </>
          ) : (
            <>
              <li className='hover:text-yellow-v2 px-3 py-2 font-bold rounded'><Link to="/#home">{t('home')}</Link></li>
              <li className='hover:text-yellow-v2 px-3 py-2 font-bold rounded'><Link to="/#about">{t('about')}</Link></li>
              <li className='hover:text-yellow-v2 px-3 py-2 font-bold rounded'><Link to="/#services">{t('services')}</Link></li>
              <li className='hover:text-yellow-v2 px-3 py-2 font-bold rounded'><Link to="/#clients">{t('clients')}</Link></li>
              <li className='hover:text-yellow-v2 px-3 py-2 font-bold rounded'><Link to="/#faq">{t('faq')}</Link></li>
            </>
          )}
        </ul>

        {/* Mobile Menu */}
        <div className={`fixed top-0 left-0 h-screen w-64 bg-primary shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className='h-[90px] flex items-center px-6'>
            <Link to="/" onClick={closeMenu}><img src="/images/logo.png" className='h-8 cursor-pointer' alt="" /></Link>
          </div>
          <ul className='flex flex-col p-6 space-y-4'>
            {location.pathname === '/' ? (
              <>
                <li className={`hover:text-yellow-v2 px-3 py-2 font-bold rounded transition-colors cursor-pointer ${activeSection === 'home' ? 'text-yellow-v2' : ''}`} onClick={() => scrollToSection('home')}>{t('home')}</li>
                <li className={`hover:text-yellow-v2 px-3 py-2 font-bold rounded transition-colors cursor-pointer ${activeSection === 'about' ? 'text-yellow-v2' : ''}`} onClick={() => scrollToSection('about')}>{t('about')}</li>
                <li className={`hover:text-yellow-v2 px-3 py-2 font-bold rounded transition-colors cursor-pointer ${activeSection === 'services' ? 'text-yellow-v2' : ''}`} onClick={() => scrollToSection('services')}>{t('services')}</li>
                <li className={`hover:text-yellow-v2 px-3 py-2 font-bold rounded transition-colors cursor-pointer ${activeSection === 'clients' ? 'text-yellow-v2' : ''}`} onClick={() => scrollToSection('clients')}>{t('clients')}</li>
                <li className={`hover:text-yellow-v2 px-3 py-2 font-bold rounded transition-colors cursor-pointer ${activeSection === 'faq' ? 'text-yellow-v2' : ''}`} onClick={() => scrollToSection('faq')}>{t('faq')}</li>
              </>
            ) : (
              <>
                <li className='hover:text-yellow-v2 px-3 py-2 font-bold rounded transition-colors'><Link to="/#home" onClick={closeMenu}>{t('home')}</Link></li>
                <li className='hover:text-yellow-v2 px-3 py-2 font-bold rounded transition-colors'><Link to="/#about" onClick={closeMenu}>{t('about')}</Link></li>
                <li className='hover:text-yellow-v2 px-3 py-2 font-bold rounded transition-colors'><Link to="/#services" onClick={closeMenu}>{t('services')}</Link></li>
                <li className='hover:text-yellow-v2 px-3 py-2 font-bold rounded transition-colors'><Link to="/#clients" onClick={closeMenu}>{t('clients')}</Link></li>
                <li className='hover:text-yellow-v2 px-3 py-2 font-bold rounded transition-colors'><Link to="/#faq" onClick={closeMenu}>{t('faq')}</Link></li>
              </>
            )}
            <li className='border-t border-white/20 pt-4'>
              <button onClick={() => { toggleLang(); closeMenu(); }} className='text-white flex items-center px-3 py-2 rounded hover:text-yellow-v2 transition-colors w-full'>
                <img src="/Languages.svg" alt="" className='ml-2' />{i18n.language === 'ar' ? 'العربية' : 'English'}
              </button>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu} className='bg-yellow text-white px-6 py-2 rounded font-medium hover:bg-yellow-v2 transition-colors w-full block text-center'>{t('contact')}</Link>
            </li>
          </ul>
        </div>

        {/* Desktop Language & Contact */}
        <div className='hidden lg:flex items-center gap-2'>
          <button onClick={toggleLang} className='text-white flex items-center px-4 py-2 rounded cursor-pointer font-bold hover:text-yellow-v2'>
            {i18n.language === 'ar' ? 'العربية' : 'English'}
            <img src="/Languages.svg" alt="" className='ml-2' />
          </button>
          <Link to="/contact" className='bg-yellow text-white px-4 py-2 rounded cursor-pointer text-xl font-medium hover:bg-yellow-v2'>{t('contact')}</Link>
        </div>
        
        {/* Burger Button */}
        <button onClick={() => setIsOpen(!isOpen)} className='lg:hidden text-white z-50'>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>
    </nav>

  )
}

export default Navbar
