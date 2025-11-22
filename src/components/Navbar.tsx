import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { t, i18n } = useTranslation()

  useEffect(() => {
    if (i18n.language === 'en') {
      document.body.classList.add('ltr-text')
    } else {
      document.body.classList.remove('ltr-text')
    }
  }, [i18n.language])

  const toggleLang = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar'
    i18n.changeLanguage(newLang)
  }

  return (
    <nav className='bg-primary h-[90px] w-full fixed flex items-center z-99'>
      <div className='container mx-auto px-4 flex items-center justify-between text-white'>
        <img src="/images/logo.png" className='h-12' alt="" />
        
        <ul className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-primary md:bg-transparent space-y-2 md:space-y-0 md:space-x-4 items-center p-4 md:p-0`}>
          <li className='hover:text-yellow-v2 px-3 py-2 font-bold rounded'>
            <Link to="/">{t('home')}</Link>
          </li>
          <li className='hover:text-yellow-v2 px-3 py-2 font-bold rounded'>
            <Link to="/about">{t('about')}</Link>
          </li>
          <li className='hover:text-yellow-v2 px-3 py-2 font-bold rounded'>
            <Link to="/services">{t('services')}</Link>
          </li>
          <li className='hover:text-yellow-v2 px-3 py-2 font-bold rounded'>
            <Link to="/clients">{t('clients')}</Link>
          </li>
          <li className='hover:text-yellow-v2 px-3 py-2 font-bold rounded'>
            <Link to="/faq">{t('faq')}</Link>
          </li>
        </ul>

        <div className='flex items-center gap-2'>
          <button onClick={toggleLang} className='text-white flex items-center px-4 py-2 rounded cursor-pointer '>
            <img src="/Languages.svg" alt="" />{i18n.language === 'ar' ? 'العربية' : 'English'}
          </button>
          <button className='bg-yellow text-white px-4 py-2 rounded  cursor-pointer text-xl font-medium hover:bg-yellow-v2'>{t('contact')}</button>
          <button onClick={() => setIsOpen(!isOpen)} className='md:hidden text-white'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
