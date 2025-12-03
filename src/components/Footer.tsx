import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const location = window.location;
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const socialLinks = [
    { icon: 'fa-brands fa-facebook', href: 'https://www.facebook.com/groups/hregy/', label: 'Facebook', color: 'hover:text-yellow' },
    { icon: 'fa-brands fa-linkedin', href: 'https://www.linkedin.com/in/ahmednagyeldokmesy/', label: 'LinkedIn', color: 'hover:text-yellow' },
    { icon: 'fa-brands fa-instagram', href: 'https://www.instagram.com/ahmedeldokhmesyoffical/?hl=ar', label: 'Instagram', color: 'hover:text-yellow' },
    { icon: 'fa-brands fa-youtube', href: 'https://www.youtube.com/@AhmednagyEldokhmesy', label: 'YouTube', color: 'hover:text-yellow' },
  ];

  return (
    <footer className="bg-linear-to-r from-primary via-primary to-primary text-white py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-7xl mt-[-50px] mx-auto">
        {/* الشعار */}
        <div className="flex justify-center mb-8">
          <Link to="/" className="bg-white rounded-b-2xl px-8 py-8 shadow-xl">
            <img src="/images/logoBlue.svg" className="text-2xl sm:text-3xl font-bold text-primary text-center cursor-pointer" />
          </Link>
        </div>

        {/* القائمة */}
        <nav className="mb-8">
          <ul className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base">
            {location.pathname === '/' ? (
              <>
                <li><span onClick={() => scrollToSection('home')} className="hover:text-yellow-v2 transition-colors duration-200 cursor-pointer">{t('home')}</span></li>
                <li className="hidden sm:block text-white/50">|</li>
                <li><span onClick={() => scrollToSection('about')} className="hover:text-yellow-v2 transition-colors duration-200 cursor-pointer">{t('about')}</span></li>
                <li className="hidden sm:block text-white/50">|</li>
                <li><span onClick={() => scrollToSection('services')} className="hover:text-yellow-v2 transition-colors duration-200 cursor-pointer">{t('services')}</span></li>
                <li className="hidden sm:block text-white/50">|</li>
                <li><span onClick={() => scrollToSection('clients')} className="hover:text-yellow-v2 transition-colors duration-200 cursor-pointer">{t('clients')}</span></li>
                <li className="hidden sm:block text-white/50">|</li>
                <li><span onClick={() => scrollToSection('faq')} className="hover:text-yellow-v2 transition-colors duration-200 cursor-pointer">{t('faq')}</span></li>
                <li className="hidden sm:block text-white/50">|</li>
                <li><Link to="/founder" className="hover:text-yellow-v2 transition-colors duration-200">{t('founder')}</Link></li>
              </>
            ) : (
              <>
                <li><Link to="/#home" className="hover:text-yellow-v2 transition-colors duration-200">{t('home')}</Link></li>
                <li className="hidden sm:block text-white/50">|</li>
                <li><Link to="/#about" className="hover:text-yellow-v2 transition-colors duration-200">{t('about')}</Link></li>
                <li className="hidden sm:block text-white/50">|</li>
                <li><Link to="/#services" className="hover:text-yellow-v2 transition-colors duration-200">{t('services')}</Link></li>
                <li className="hidden sm:block text-white/50">|</li>
                <li><Link to="/#clients" className="hover:text-yellow-v2 transition-colors duration-200">{t('clients')}</Link></li>
                <li className="hidden sm:block text-white/50">|</li>
                <li><Link to="/#faq" className="hover:text-yellow-v2 transition-colors duration-200">{t('faq')}</Link></li>
                <li className="hidden sm:block text-white/50">|</li>
                <li><Link to="/founder" className="hover:text-yellow-v2 transition-colors duration-200">{t('founder')}</Link></li>
              </>
            )}
          </ul>
        </nav>

        {/* أيقونات التواصل الاجتماعي */}
        <div className="flex justify-center items-center gap-4 sm:gap-6 mb-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              aria-label={social.label}
              className={`transform hover:scale-110 transition-all duration-200 ${social.color}`}
            >
              <i className={`${social.icon} text-2xl sm:text-3xl`}></i>
            </a>
          ))}
        </div>

        {/* زر التصميم */}
        <div className="flex justify-center">
          <Link to='https://mersal.top' className=" bg-yellow text-white hover:bg-white hover:text-primary  font-medium px-8 py-5  -mb-12 rounded-t-xl  hover:shadow-xl transform  transition-all duration-200 text-sm sm:text-base">
            Designed & Developed in Fire by Marsal
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;