import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import Feedback from "../components/Feedback"
import FAQ from "../components/FAQ"
import ClientsSection from "../components/Clients"
import SEO from '../components/SEO'
import Course from "../components/Course"
import Doors from "../components/Doors"
import { Users, GraduationCap, BookOpen, Globe, X } from "lucide-react"

function Home() {
  const { t, i18n } = useTranslation()
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const isRtl = i18n.language === 'ar'
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  
  return (
    <>
    <SEO 
      title="أتش أرجية مصر | HRians Egypt - استشارات موارد بشرية"
      description="شركة أتش أرجية مصر تقدم حلول مبتكرة في الموارد البشرية، التدريب المهني، كتابة CV، وتحسين لينكدإن"
      keywords="موارد بشرية, HR, تدريب مهني, كتابة CV, لينكدإن, استشارات HR"
    />
      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setIsPopupOpen(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative animate-on-scroll fade-in-up show" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">{t('chooseService')}</h3>
            <div className="flex flex-col gap-4">
              <a href="/masar" className="bg-gray-50 border border-gray-200 p-4 rounded-xl font-bold text-gray-800 hover:bg-primary hover:text-white transition-all text-center text-lg" onClick={() => setIsPopupOpen(false)}>{t('heroBtnLeader')}</a>
              <a href="/services" className="bg-gray-50 border border-gray-200 p-4 rounded-xl font-bold text-gray-800 hover:bg-primary hover:text-white transition-all text-center text-lg" onClick={() => setIsPopupOpen(false)}>{t('heroBtnCompany')}</a>
              <a href="/services" className="bg-gray-50 border border-gray-200 p-4 rounded-xl font-bold text-gray-800 hover:bg-primary hover:text-white transition-all text-center text-lg" onClick={() => setIsPopupOpen(false)}>{t('heroBtnHR')}</a>
            </div>
          </div>
        </div>
      )}

    <section id="home" className="hero flex items-center bg-[url('/images/Hero-Background.jpg')] bg-cover bg-center min-h-[calc(100vh-90px)] pt-10 pb-20 lg:pb-32 relative">
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row justify-evenly items-center gap-8">
        <div dir={isRtl ? 'rtl' : 'ltr'} className="data w-full lg:max-w-[650px] flex flex-col gap-4 lg:items-start items-center text-center lg:text-start">
          <img src="/images/Auth.svg" alt="شعار أتش أرجية مصر" className="w-[200px] md:w-[300px]" loading="lazy" />
          <h1 className="text-primary font-extrabold leading-tight text-3xl md:text-5xl lg:text-[55px]">
            {t('heroTitle')}
          </h1>
          <p className="max-w-[650px] text-gray-700 text-xs sm:text-sm  md:text-lg font-semibold leading-relaxed">
            {t('heroDesc')}
          </p>
          <div className="action-area flex flex-col gap-6 mt-4 w-full">
            <div className="buttons flex flex-row gap-3 md:gap-4 w-full justify-center lg:justify-start">
              <button 
                onClick={() => setIsPopupOpen(true)}
                className="bg-primary cursor-pointer font-bold border-2 border-primary py-3 px-6 md:px-8 text-base md:text-lg text-white rounded-xl hover:bg-white hover:text-primary transition-all duration-300 shadow-md flex-1 lg:flex-none text-center"
              >
                {t('chooseService')}
              </button>
              <Link 
                to="/contact" 
                className="bg-white font-bold border-2 border-primary py-3 px-6 md:px-8 text-base md:text-lg text-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-300 shadow-md flex-1 lg:flex-none text-center"
              >
                {t('contact')}
              </Link>
            </div>
          </div>
        </div>
        <div className="image w-full lg:max-w-[700px] flex justify-center">
          <img src="/images/Mr Ahmed Hero 2.webp" alt="أحمد ناجي الدخميسي - خبير موارد بشرية" className="w-full max-h-[85vh] object-contain" loading="eager" />
        </div>
      </div>
    </section>
    
    {/* Floating Stats Box */}
    <div className="container max-w-[1250px] mx-auto px-2 md:px-4 relative z-20 -mt-10 lg:-mt-40 mb-6 lg:mb-10" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="bg-white rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-100 p-6 lg:p-10 flex flex-col gap-6">
        <h3 className="text-center text-gray-400 font-extrabold text-sm md:text-base tracking-widest uppercase absolute -top-3 left-1/2 -translate-x-1/2">{isRtl ? 'الإحصائيات' : 'STATISTICS'}</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 xl:gap-8 justify-items-center lg:justify-items-stretch items-start lg:items-center">
          <div className="stat-item flex flex-col xl:flex-row items-center gap-2 xl:gap-4 text-center xl:text-start group w-full">
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-6 h-6 lg:w-8 lg:h-8 text-primary" />
            </div>
            <div className="flex flex-col items-center xl:items-start leading-tight">
              <span className="font-black text-xl lg:text-2xl xl:text-3xl text-primary mb-1">{t('heroStatsNum1')}</span>
              <span className="font-bold text-xs lg:text-sm xl:text-base text-gray-600">{t('heroStatsDesc1')}</span>
            </div>
          </div>
          <div className="stat-item flex flex-col xl:flex-row items-center gap-2 xl:gap-4 text-center xl:text-start group w-full">
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-yellow/40 to-yellow/10 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-yellow/20 group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="w-6 h-6 lg:w-8 lg:h-8 text-yellow" />
            </div>
            <div className="flex flex-col items-center xl:items-start leading-tight">
              <span className="font-black text-xl lg:text-2xl xl:text-3xl text-yellow mb-1">{t('heroStatsNum2')}</span>
              <span className="font-bold text-xs lg:text-sm xl:text-base text-gray-600">{t('heroStatsDesc2')}</span>
            </div>
          </div>
         
          <div className="stat-item flex flex-col xl:flex-row items-center gap-2 xl:gap-4 text-center xl:text-start group w-full">
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
              <BookOpen className="w-6 h-6 lg:w-8 lg:h-8 text-primary" />
            </div>
            <div className="flex flex-col items-center xl:items-start leading-tight">
              <span className="font-black text-xl lg:text-2xl xl:text-3xl text-primary mb-1">{t('heroStatsNum3')}</span>
              <span className="font-bold text-xs lg:text-sm xl:text-base text-gray-600">{t('heroStatsDesc3')}</span>
            </div>
          </div>
           <div className="stat-item flex flex-col xl:flex-row items-center gap-2 xl:gap-4 text-center xl:text-start group w-full">
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-yellow/40 to-yellow/10 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-yellow/20 group-hover:scale-110 transition-transform duration-300">
              <Globe className="w-6 h-6 lg:w-8 lg:h-8 text-yellow" />
            </div>
            <div className="flex flex-col items-center xl:items-start leading-tight">
              <span className="font-black text-xl lg:text-2xl xl:text-3xl text-yellow mb-1">{t('heroStatsNum4')}</span>
              <span className="font-bold text-xs lg:text-sm xl:text-base text-gray-600">{t('heroStatsDesc4')}</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>

    <section id="about" className="about py-8 lg:py-16">
      <h1 className="title text-primary text-center text-3xl md:text-5xl mb-8 animate-on-scroll fade-in-up">{t('aboutTitle')}</h1>
      <div className="container max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-evenly items-center gap-8">
        <div className="image w-full md:w-auto animate-on-scroll fade-in-up md:fade-in-left">
          <img className="rounded-4xl w-full md:w-[600px] rounded-tl-sm border-primary border-5" src="/images/about-image.webp" alt="فريق أتش أرجية مصر" loading="lazy" />
        </div>
        <div className="max-w-[600px] w-full animate-on-scroll fade-in-up md:fade-in-right">
          <h1 className="text-2xl md:text-3xl font-extrabold text-primary">{t('aboutHeading')}</h1>
          <p className="text-lg md:text-xl mt-2 font-semibold text-black-v2">{t('aboutDesc')}</p>
          <Link className="bg-yellow block w-fit mt-3 py-3 px-6 text-white rounded-md text-lg md:text-xl font-semibold" to="/founder">{t('founder')}</Link>
        </div>
      </div>
    </section>  
      <div className="animate-on-scroll fade-in-up"><Doors /></div>
      <div className=""><Course/></div>
      {/* Feedback Section */}
      <div id="clients" className="animate-on-scroll fade-in-up"><Feedback/></div>
      <div className="animate-on-scroll fade-in-up"><ClientsSection/></div>
      <div id="faq" className="animate-on-scroll fade-in-up"><FAQ/></div>
   
    </>
  )
}

export default Home
