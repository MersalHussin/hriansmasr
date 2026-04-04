import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import ServiceCard from '../components/ServiceCard'
import SEO from '../components/SEO'

function ServicesPage() {
  const { t } = useTranslation()

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
        title={`${t('services')} | أتش أرجية مصر`}
        description="تعرف على مجموعة الخدمات المتكاملة التي نقدمها في مجال التطوير المهني والموارد البشرية"
        keywords="خدمات استشارات, تطوير مهني, كتابة سيرة ذاتية, كورسات تدريبية"
      />
      <div className="py-16">
        <section id="services" className="services">
          <h1 className="title text-primary animate-on-scroll fade-in-up">{t('servicesTitle')}</h1>
          <div className="container mx-auto max-w-7xl px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="animate-on-scroll fade-in-up" style={{animationDelay: '0.1s'}}><ServiceCard image="/images/Services/Training Coruse.webp" titleAr="برامج تدريب متكاملة لتطوير مهارات فرق العمل داخل الشركات." titleEn="Corporate Training Solutions" /></div>
            <div className="animate-on-scroll fade-in-up" style={{animationDelay: '0.5s'}}><ServiceCard image="/images/Services/Training Cor2.webp" titleAr="برنامج تدريبي عملي يمشي معاك خطوة بخطوة في طريق الموارد البشرية" titleEn="HR Roadmap Program" customWhatsapp="https://wa.me/201097828846" /></div>
            <div className="animate-on-scroll fade-in-up" style={{animationDelay: '0.2s'}}><ServiceCard image="/images/Services/Component 5.webp" titleAr="استشارات موارد بشرية لبناء أنظمة ولوائح فعالة تدعم نمو الشركة." titleEn="HR Consulting" /></div>
            <div className="animate-on-scroll fade-in-up" style={{animationDelay: '0.3s'}}><ServiceCard image="/images/Services/Career Coaching.webp" titleAr="جلسات توجيه مهني تساعد الأفراد على رسم مسار وظيفي ناجح." titleEn="Career Coaching" /></div>
            <div className="animate-on-scroll fade-in-up" style={{animationDelay: '0.4s'}}><ServiceCard image="/images/Services/6.webp" titleAr="كتابة سيرة ذاتية احترافية تبرز قدراتك وخبراتك بشكل مثالي." titleEn="CV Writing" /></div>
            <div className="animate-on-scroll fade-in-up" style={{animationDelay: '0.5s'}}><ServiceCard image="/images/Services/1.webp" titleAr="تحسين حسابك على لينكدإن ليعكس خبرتك ويزيد فرص ظهورك للوظائف." titleEn="LinkedIn Optimization" /></div>
            <div className="animate-on-scroll fade-in-up" style={{animationDelay: '0.5s'}}><ServiceCard image="/images/Services/Students & Fresh Graduates.webp" titleAr="أساعدك تحدد طريقك بدري، وتبني ملف شخصي محترم، وتبدأ رحلتك المهنية بثقة بدل ما تضيع وقتك في تجارب عشوائية." titleEn="Personal Branding Consultation"  subtitle=" Students & Fresh Graduates" /></div>
            <div className="animate-on-scroll fade-in-up" style={{animationDelay: '0.5s'}}><ServiceCard image="/images/Services/Business Owners.webp" titleAr="موجهة للقادة والإداريين الكبار وأصحاب الشركات لبناء علامة شخصية قيادية تعكس خبرتك وتزود تأثيرك أمام العملاء" titleEn="Personal Branding Consultation" subtitle="Executives, Business Owners & Providers" /></div>
          </div>
        </section>  
      </div>
    </>
  )
}

export default ServicesPage
