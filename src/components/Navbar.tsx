import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const courseLinks = [
  { to: '/hidden-market-masterclass', label: 'Hidden Market Masterclass' },
  { to: '/hr-roadmap', label: 'HR Roadmap' },
]

const hiddenMarketLinks = [
  { to: '#problem', label: 'المشكلة' },
  { to: '#modules', label: 'محتوى الكورس' },
  { to: '#outcomes', label: 'ماذا ستتعلم؟' },
  { to: '#reels-feedback', label: 'تجارب المتدربين' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const closeMenu = () => setIsOpen(false)

  const isActive = (path: string) => location.pathname === path
  
  const isHiddenMarket = location.pathname === '/hidden-market-masterclass'

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    closeMenu()
    const target = document.getElementById(targetId.substring(1))
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 90,
        behavior: 'smooth',
      })
    }
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex flex-col">
      {isHiddenMarket && (
        <div className="bg-gradient-to-r from-yellow-300 to-yellow-500 py-1.5 sm:py-2 px-4 w-full flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 shadow-sm border-b border-yellow-600/20 z-[60]">
          <div className="flex items-center gap-2 text-[var(--color-brand-dark)] text-xs sm:text-sm font-black text-center">
            <span className="flex items-center gap-1.5 flex-wrap justify-center">
              <i className="fa-solid fa-clock text-base animate-pulse" />
              <p className='text-sm'>
               الكورس يوم واحد لمدة 6 ساعات متواصلة. الدفعة القادمة هتبدأ يوم 
              </p>
              <span className="bg-white/50 px-2 py-0.5 rounded text-[var(--color-brand-dark)] font-black">18 أبريل</span>
            </span>
          </div>
          <a
            href="https://docs.google.com/forms/d/1XBIyFfwF98HRQexWtOojaZNTxd5RDwuqP63GetjF-N0/viewform?chromeless=1&edit_requested=true"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-[var(--color-brand-dark)] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md hover:bg-[var(--color-brand-light)] hover:scale-105 transition-all justify-center w-full sm:w-auto"
          >
            احجز مقعدك <i className="fa-solid fa-file-signature text-base" />
          </a>
        </div>
      )}
      <nav className={`${isHiddenMarket ? 'bg-[#0A2552] border-b border-white/5' : 'bg-primary'} h-[90px] w-full flex items-center transition-colors relative z-[55]`}>
        <div className='container mx-auto px-4 flex items-center justify-between text-white'>
        {isHiddenMarket ? (
          <Link to="/" onClick={closeMenu}>
            <img src="/Logo_Hidden.svg" className='h-8 md:h-12 cursor-pointer object-contain' alt="The Hidden Market Masterclass" />
          </Link>
        ) : (
          <Link to="/" onClick={closeMenu}>
            <img src="/images/logo.png" className='h-8 md:h-12 cursor-pointer object-contain' alt="HRians Egypt" />
          </Link>
        )}

        {/* Overlay */}
        {isOpen && (
          <div className='fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-40' onClick={closeMenu} />
        )}

        {/* Desktop Menu */}
        <ul className='hidden lg:flex flex-row items-center gap-2'>
          {isHiddenMarket ? (
            <>
              <li>
                <Link to="/" className="hover:text-yellow-v2 px-3 py-2 font-bold rounded transition-colors">
                  الرئيسية
                </Link>
              </li>
              {hiddenMarketLinks.map(link => (
                <li key={link.to}>
                  <a
                    href={link.to}
                    onClick={(e) => handleScroll(e, link.to)}
                    className="hover:text-yellow-v2 px-3 py-2 font-bold rounded transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </>
          ) : (
            <>
              <li>
                <Link to="/" className={`hover:text-yellow-v2 px-3 py-2 font-bold rounded transition-colors ${isActive('/') ? 'text-yellow-v2' : ''}`}>
                  الرئيسية
                </Link>
              </li>
              {courseLinks.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`hover:text-yellow-v2 px-3 py-2 font-bold rounded transition-colors ${isActive(link.to) ? 'text-yellow-v2' : ''}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/contact" className={`hover:text-yellow-v2 px-3 py-2 font-bold rounded transition-colors ${isActive('/contact') ? 'text-yellow-v2' : ''}`}>
                  تواصل معنا
                </Link>
              </li>
            </>
          )}
        </ul>

        {/* Desktop CTA */}
        <div className='hidden lg:flex items-center gap-2'>
          <a
            href="https://docs.google.com/forms/d/1XBIyFfwF98HRQexWtOojaZNTxd5RDwuqP63GetjF-N0/viewform?chromeless=1&edit_requested=true"
            target="_blank"
            rel="noopener noreferrer"
            className='bg-yellow text-white px-4 py-2 rounded cursor-pointer text-base font-bold hover:bg-yellow-v2 transition-colors'
          >
            سجّل دلوقتي
          </a>
        </div>

        {/* Mobile Menu Drawer */}
        <div className={`fixed top-0 left-0 h-screen w-64 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden z-50 ${
          isHiddenMarket ? 'bg-[#0A2552]' : 'bg-primary'
        } ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className='h-[90px] flex items-center px-6 border-b border-white/5'>
            {isHiddenMarket ? (
              <img src="/Logo_Hidden.svg" className='h-8 cursor-pointer object-contain' alt="The Hidden Market Masterclass" onClick={closeMenu} />
            ) : (
              <img src="/images/logo.png" className='h-8 cursor-pointer object-contain' alt="HRians Egypt" onClick={closeMenu} />
            )}
          </div>
          <ul className='flex flex-col p-6 space-y-2'>
            {isHiddenMarket ? (
              <>
                <li>
                  <Link to="/" onClick={closeMenu} className="block px-3 py-2 font-bold rounded transition-colors hover:text-yellow-v2">
                    الرئيسية
                  </Link>
                </li>
                {hiddenMarketLinks.map(link => (
                  <li key={link.to}>
                    <a
                      href={link.to}
                      onClick={(e) => handleScroll(e, link.to)}
                      className="block px-3 py-2 font-bold rounded transition-colors hover:text-yellow-v2 cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </>
            ) : (
              <>
                <li>
                  <Link to="/" onClick={closeMenu} className={`block px-3 py-2 font-bold rounded transition-colors hover:text-yellow-v2 ${isActive('/') ? 'text-yellow-v2' : ''}`}>
                    الرئيسية
                  </Link>
                </li>
                {courseLinks.map(link => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      onClick={closeMenu}
                      className={`block px-3 py-2 font-bold rounded transition-colors hover:text-yellow-v2 ${isActive(link.to) ? 'text-yellow-v2' : ''}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/contact" onClick={closeMenu} className={`block px-3 py-2 font-bold rounded transition-colors hover:text-yellow-v2 ${isActive('/contact') ? 'text-yellow-v2' : ''}`}>
                    تواصل معنا
                  </Link>
                </li>
              </>
            )}
            <li className='pt-4'>
              <a
                href="https://docs.google.com/forms/d/1XBIyFfwF98HRQexWtOojaZNTxd5RDwuqP63GetjF-N0/viewform?chromeless=1&edit_requested=true"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className='bg-yellow text-white px-6 py-2 rounded font-bold hover:bg-yellow-v2 transition-colors w-full block text-center'
              >
                سجّل دلوقتي
              </a>
            </li>
          </ul>
        </div>

        {/* Burger Button */}
        <button onClick={() => setIsOpen(!isOpen)} className='lg:hidden text-white z-50'>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>
    </nav>
    </header>
  )
}

export default Navbar
