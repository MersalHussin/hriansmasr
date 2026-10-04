import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

function ServicesPage() {
  const { t, i18n } = useTranslation()

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

  const isEn = i18n.language === 'en';

  return (
    <>
      <SEO 
        title={`${t('services')} | ${isEn ? 'HRians Egypt' : 'أتش أرجية مصر'}`}
        description={isEn ? "Discover our comprehensive services in professional development and human resources" : "تعرف على مجموعة الخدمات المتكاملة التي نقدمها في مجال التطوير المهني والموارد البشرية"}
        keywords={isEn ? "consulting services, professional development, resume writing, training courses" : "خدمات استشارات, تطوير مهني, كتابة سيرة ذاتية, كورسات تدريبية"}
      />
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary text-center mb-16 animate-on-scroll fade-in-up">
            {t('servicesTitle')}
          </h1>

          {/* Group 1: For Leaders */}
          <div className="mb-20 animate-on-scroll fade-in-up">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-1 bg-yellow rounded-full"></div>
              <h2 className="text-3xl font-bold text-gray-800">{isEn ? 'For Leaders & Senior Executives' : 'للقيادات وكبار المديرين'}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Masar Package */}
              <Link to="/masar" className="group relative rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col aspect-[230/158]">
                <img src="/images/Services/10.jpg" alt={isEn ? 'Masar Package' : 'باقة مسار'} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 z-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent z-10"></div>
                <div className="relative z-20 p-6 md:p-8 flex flex-col h-full justify-end">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-4 drop-shadow-md">{isEn ? 'Masar Package' : 'باقة مسار'}</h3>
                  <p className="text-gray-200 font-medium mb-4 md:mb-6 line-clamp-2 text-sm md:text-base drop-shadow">
                    {isEn ? 'Executive resume + LinkedIn profile + Monthly presence management. A professional front that opens deals and opportunities.' : 'سيرة تنفيذية + بروفايل لينكدإن + إدارة حضورك شهرياً. واجهة مهنية تفتح صفقات وفرص.'}
                  </p>
                  <span className="inline-block text-center bg-primary text-white font-bold py-2 md:py-3 px-6 rounded-xl hover:bg-yellow hover:text-primary transition-colors w-fit shadow-lg">
                    {isEn ? 'Package Details' : 'تفاصيل الباقة'}
                  </span>
                </div>
              </Link>
              {/* Hidden Market */}
              <a href="https://courses.hriansmasr.com/hidden-market-masterclass" target="_blank" rel="noopener noreferrer" className="group relative rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col aspect-[230/158]">
                <img src="/images/Services/9.jpg" alt="Hidden Market Masterclass" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 z-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>
                <div className="relative z-20 p-6 md:p-8 flex flex-col h-full justify-end">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-4 drop-shadow-md">Hidden Market Masterclass</h3>
                  <p className="text-gray-200 font-medium mb-4 md:mb-6 line-clamp-2 text-sm md:text-base drop-shadow">
                    {isEn ? 'One day (6 hours) on reaching opportunities and deals that are not announced.' : 'يوم واحد (6 ساعات) عن الوصول للفرص والصفقات اللي مش بتتعلن.'}
                  </p>
                  <span className="inline-block text-center bg-primary text-white font-bold py-2 md:py-3 px-6 rounded-xl hover:bg-yellow hover:text-primary transition-colors w-fit shadow-lg">
                    {isEn ? 'Masterclass Details' : 'تفاصيل الماستركلاس'}
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Group 2: For Companies */}
          <div className="mb-20 animate-on-scroll fade-in-up">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-1 bg-primary rounded-full"></div>
              <h2 className="text-3xl font-bold text-gray-800">{isEn ? 'For Companies' : 'للشركات'}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* HR Consulting */}
              <Link to="/product/hr-consulting" className="group relative rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col aspect-[230/158]">
                <img src="/images/Services/3.jpg" alt={isEn ? 'HR Consulting' : 'استشارات الموارد البشرية'} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 z-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>
                <div className="relative z-20 p-6 md:p-8 flex flex-col h-full justify-end">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-4 drop-shadow-md">{isEn ? 'HR Consulting' : 'استشارات الموارد البشرية'}</h3>
                  <p className="text-gray-200 font-medium mb-4 md:mb-6 line-clamp-2 text-sm md:text-base drop-shadow">
                    {isEn ? 'Structures, regulations, KPIs, and payroll systems that keep working after the consultant leaves.' : 'هياكل، لوائح، KPIs، وأنظمة أجور تفضل شغالة بعد ما المستشار يمشي.'}
                  </p>
                  <span className="inline-block text-center bg-primary text-white font-bold py-2 md:py-3 px-6 rounded-xl hover:bg-yellow hover:text-primary transition-colors w-fit shadow-lg">
                    {isEn ? 'Request Consultation' : 'اطلب استشارة'}
                  </span>
                </div>
              </Link>
              {/* Corporate Training */}
              <Link to="/product/corporate-training" className="group relative rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col aspect-[230/158]">
                <img src="/images/Services/1.jpg" alt={isEn ? 'Corporate Training' : 'تدريب الشركات'} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 z-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>
                <div className="relative z-20 p-6 md:p-8 flex flex-col h-full justify-end">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-4 drop-shadow-md">{isEn ? 'Corporate Training' : 'تدريب الشركات'}</h3>
                  <p className="text-gray-200 font-medium mb-4 md:mb-6 line-clamp-2 text-sm md:text-base drop-shadow">
                    {isEn ? 'Tailored programs for your team based on your actual work problems.' : 'برامج مصممة لفريقك على مشاكل شغلك الفعلية.'}
                  </p>
                  <span className="inline-block text-center bg-primary text-white font-bold py-2 md:py-3 px-6 rounded-xl hover:bg-yellow hover:text-primary transition-colors w-fit shadow-lg">
                    {isEn ? 'Training Details' : 'تفاصيل التدريب'}
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Group 3: For HR Professionals */}
          <div className="mb-10 animate-on-scroll fade-in-up">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
              <h2 className="text-3xl font-bold text-gray-800">{isEn ? 'For HR Professionals' : 'لمحترفي الموارد البشرية'}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* HR Executive Roadmap */}
              <a href="https://courses.hriansmasr.com/hr-roadmap" target="_blank" rel="noopener noreferrer" className="group relative rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col aspect-[230/158]">
                <img src="/images/Services/11.jpg" alt="HR Executive Roadmap" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 z-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>
                <div className="relative z-20 p-6 md:p-8 flex flex-col h-full justify-end">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-4 drop-shadow-md">HR Executive Roadmap</h3>
                  <p className="text-gray-200 font-medium mb-4 md:mb-6 line-clamp-2 text-sm md:text-base drop-shadow">
                    {isEn ? '20 hours, 80% practical, from entering the field to management.' : '20 ساعة، 80% عملي، من دخول المجال لحد الإدارة.'}
                  </p>
                  <span className="inline-block text-center bg-primary text-white font-bold py-2 md:py-3 px-6 rounded-xl hover:bg-yellow hover:text-primary transition-colors w-fit shadow-lg">
                    {isEn ? 'Next Cohort Details' : 'تفاصيل الدفعة الجاية'}
                  </span>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default ServicesPage
