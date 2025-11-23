import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const menuItems = [
    { label: 'الرئيسية', href: '#' },
    { label: 'من نحن', href: '#' },
    { label: 'الخدمات', href: '#' },
    { label: 'عملائنا', href: '#' },
    { label: 'الأسئلة الشائعة', href: '#' },
    { label: 'عن المؤسس', href: '#' },
  ];

  const socialLinks = [
      { icon: 'fa-brands fa-facebook', href: '#', label: 'Facebook', color: 'hover:text-yellow' },
    { icon: 'fa-brands fa-whatsapp', href: '#', label: 'WhatsApp', color: 'hover:text-yellow' },
    { icon: 'fa-brands fa-instagram', href: '#', label: 'Instagram', color: 'hover:text-yellow' },
    { icon: 'fa-brands fa-linkedin', href: '#', label: 'LinkedIn', color: 'hover:text-yellow' },
    { icon: 'fa-brands fa-youtube', href: '#', label: 'YouTube', color: 'hover:text-yellow' },
  ];

  return (
    <footer className="bg-linear-to-r from-primary via-primary to-primary text-white py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-7xl mt-[-50px] mx-auto">
        {/* الشعار */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-b-2xl px-8 py-8 shadow-xl">
            <img src="/images/logoBlue.svg" className="text-2xl sm:text-3xl font-bold text-primary text-center" />
          </div>
        </div>

        {/* القائمة */}
        <nav className="mb-8">
          <ul className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base">
            {menuItems.map((item, index) => (
              <React.Fragment key={index}>
                <li>
                  <a
                    href={item.href}
                    className={`hover:text-yellow-v2 transition-colors duration-200 ${
                      item.label === 'الرئيسية' ? 'text-yellow-v2 font-semibold' : ''
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
                {index < menuItems.length - 1 && (
                  <li className="hidden sm:block text-white/50">|</li>
                )}
              </React.Fragment>
            ))}
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