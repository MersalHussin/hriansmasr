import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const location = useLocation();
  const isHiddenMarket = location.pathname === '/hidden-market-masterclass';

  const socialLinks = [
    { icon: 'fa-brands fa-facebook', href: 'https://www.facebook.com/groups/hregy/', label: 'Facebook' },
    { icon: 'fa-brands fa-linkedin', href: 'https://www.linkedin.com/in/ahmednagyeldokmesy/', label: 'LinkedIn' },
    { icon: 'fa-brands fa-instagram', href: 'https://www.instagram.com/ahmedeldokhmesyoffical/?hl=ar', label: 'Instagram' },
    { icon: 'fa-brands fa-youtube', href: 'https://www.youtube.com/@AhmednagyEldokhmesy', label: 'YouTube' },
    { icon: 'fa-brands fa-tiktok', href: '#', label: 'TikTok' },
  ];

  return (
    <footer className={`${isHiddenMarket ? 'bg-[#0A2552]' : 'bg-primary'} border-t border-white/5 pt-16 pb-0 relative overflow-hidden transition-colors duration-500`} dir="rtl">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 mb-12">
          
          {/* Logo & About */}
          <div className="col-span-1 md:col-span-5 flex flex-col items-center md:items-start">
            <Link to="/" className="mb-6 block bg-white/5 backdrop-blur-md p-4 rounded-3xl border border-white/10 hover:border-yellow/30 transition-colors">
              {isHiddenMarket ? (
                <img src="/Logo_Hidden.svg" alt="The Hidden Market Logo" className="h-14 md:h-16 object-contain" />
              ) : (
                <img src="/images/logo.png" alt="HRians Egypt Logo" className="h-14 md:h-16 object-contain" />
              )}
            </Link>
            <p className="text-white/70 text-sm md:text-base text-center md:text-right leading-relaxed max-w-sm mb-6">
              أكاديمية أتش أرجية مصر بقيادة أحمد ناجي الدخميسي، بتوفرلك برامج تدريبية ومسارات مهنية حقيقية هتساعدك تطور كاريرك وتبني علامتك الشخصية في سوق العمل.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-yellow hover:text-white hover:border-yellow transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  <i className={`${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-3">
            <h3 className="text-white font-extrabold text-xl mb-6 relative inline-block">
              روابط سريعة
              <span className="absolute -bottom-2 right-0 w-1/2 h-1 bg-yellow rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-white/80 hover:text-yellow transition-colors flex items-center gap-2">
                  <i className="fa-solid fa-angle-left text-xs"></i> الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/founder" className="text-white/80 hover:text-yellow transition-colors flex items-center gap-2">
                  <i className="fa-solid fa-angle-left text-xs"></i> عن المؤسس
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-yellow transition-colors flex items-center gap-2">
                  <i className="fa-solid fa-angle-left text-xs"></i> تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div className="col-span-1 md:col-span-4">
            <h3 className="text-white font-extrabold text-xl mb-6 relative inline-block">
              برامجنا التدريبية
              <span className="absolute -bottom-2 right-0 w-1/2 h-1 bg-yellow rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/hidden-market-masterclass" className="group flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-2xl hover:bg-white/10 hover:border-yellow/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow to-yellow-v2 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                    <i className="fa-solid fa-user-secret"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">The Hidden Market</h4>
                    <p className="text-white/50 text-xs mt-1">اكتشف الوظائف الخفية</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/hr-roadmap" className="group flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-2xl hover:bg-white/10 hover:border-yellow/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                    <i className="fa-solid fa-map-location-dot"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">HR Roadmap</h4>
                    <p className="text-white/50 text-xs mt-1">خارطة طريق الموارد البشرية</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm text-center md:text-right">
            جميع الحقوق محفوظة © {new Date().getFullYear()} - أتش أرجية مصر
          </p>
          <a 
            href="https://mersal.top" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm bg-white/5 px-4 py-2 rounded-full border border-white/5"
          >
            Developed in Fire by <strong className="text-yellow">Marsal</strong> 🔥
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;