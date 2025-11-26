import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'
import Breadcrumb from '../components/Breadcrumb'
import SEO from '../components/SEO'

function ContactPage() {
  const { t, i18n } = useTranslation()
  const formRef = useRef<HTMLFormElement>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [formData, setFormData] = useState({
    serviceType: '',
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus('idle')

    try {
      // Replace with your EmailJS credentials
      await emailjs.sendForm(
        'service_8732rjn',
        'template_vvyiw0a',
        formRef.current!,
        'FYxk_9wL2puFsHTuo'
      )
      
      setStatus('success')
      setFormData({ serviceType: '', name: '', phone: '', email: '', message: '' })
    } catch (error) {
      console.error('Error:', error)
      setStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleServiceTypeChange = (type: string) => {
    setFormData(prev => ({
      ...prev,
      serviceType: type
    }))
  }

  return (
    <>
    <SEO 
      title="تواصل معنا | HRins Egypt - استشارات موارد بشرية"
      description="تواصل مع فريق HRins Egypt للحصول على استشارات موارد بشرية وتدريب مهني متخصص. نحن هنا لمساعدتك"
      keywords="تواصل, استفسار, استشارة, HRins Egypt, موارد بشرية"
    />
      <div className="relative w-full bg-primary text-white pt-12 pb-20 rounded-b-[80px] md:rounded-b-[180px]">
        <div className="max-w-6xl mx-auto px-4 flex justify-center items-center flex-col">
          <p className="text-center text-white text-2xl md:text-3xl font-bold mb-2">{t('contactTitle')}</p>
          <img src="/images/LogoEldokhmesy.svg" className="text-center w-full max-w-[300px] md:max-w-[480px] mt-3" alt="Logo" />
          <Breadcrumb currentPage={t('contact')} />
        </div>
      </div>

      <section className="py-16 bg-gradient-to-b from-white to-gray-50 min-h-screen flex items-center justify-center">
        <div className="container max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-primary to-primary/90 p-8 md:p-10 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">{t('contactFormTitle')}</h2>
              <p className="text-lg opacity-90 mb-6">{t('contactDescription')}</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{t('locationText')}</span>
                  <div className="bg-yellow rounded-full p-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span dir="ltr" className="font-medium">info@hriansmasr.com</span>
                  <div className="bg-yellow rounded-full p-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                </div>
                
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 md:p-10">
            
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-base font-semibold text-black-v2 mb-3">
                    {t('serviceTypeLabel')}
                  </label>
                  <input type="hidden" name="service_type" value={formData.serviceType === 'inquiry' ? 'استفسار' : formData.serviceType === 'consultation' ? 'استشارة' : ''} />
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => handleServiceTypeChange('inquiry')}
                      className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                        formData.serviceType === 'inquiry'
                          ? 'bg-primary text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {t('inquiry')}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleServiceTypeChange('consultation')}
                      className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                        formData.serviceType === 'consultation'
                          ? 'bg-primary text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {t('consultation')}
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="name" className="block text-base font-semibold text-black-v2 mb-2">
                    {t('nameLabel')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                    placeholder={t('namePlaceholder')}
                  />
                  <input type="hidden" name="from_name" value={formData.name} />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-base font-semibold text-black-v2 mb-2">
                    {t('phoneLabel')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                    placeholder={t('phonePlaceholder')}
                  />
                  <input type="hidden" name="from_phone" value={formData.phone} />
                </div>

                <div>
                  <label htmlFor="email" className="block text-base font-semibold text-black-v2 mb-2">
                    {t('emailLabel')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    dir="ltr"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                    placeholder={t('emailPlaceholder')}
                  />
                  <input type="hidden" name="from_email" value={formData.email} />
                </div>

                <div>
                  <label htmlFor="message" className="block text-base font-semibold text-black-v2 mb-2">
                    {t('messageLabel')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all resize-none"
                    placeholder={t('messagePlaceholder')}
                  />
                </div>

                {status === 'success' && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                    {t('successMessage')}
                  </div>
                )}
                
                {status === 'error' && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                    {t('errorMessage')}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading || !formData.serviceType}
                  className="w-full bg-yellow text-white py-3 px-8 rounded-lg text-lg font-bold hover:bg-yellow-v2 active:bg-yellow-v2 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? t('sending') : t('sendButton')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
