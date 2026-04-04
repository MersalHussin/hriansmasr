import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Breadcrumb from '../components/Breadcrumb'
import SEO from '../components/SEO'

function TermsPage() {
  const { t, i18n } = useTranslation()
  const isAr = i18n.language === 'ar'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const sections = [
    { title: t('tc_acceptance_title'), content: t('tc_acceptance') },
    {
      title: t('tc_services_title'),
      content: t('tc_services'),
      list: [
        t('tc_services_1'),
        t('tc_services_2'),
        t('tc_services_3'),
        t('tc_services_4'),
      ],
    },
    {
      title: t('tc_userObligations_title'),
      content: t('tc_userObligations'),
      list: [
        t('tc_userObligations_1'),
        t('tc_userObligations_2'),
        t('tc_userObligations_3'),
        t('tc_userObligations_4'),
      ],
    },
    { title: t('tc_ip_title'), content: t('tc_ip') },
    { title: t('tc_payment_title'), content: t('tc_payment') },
    { title: t('tc_cancellation_title'), content: t('tc_cancellation') },
    { title: t('tc_liability_title'), content: t('tc_liability') },
    { title: t('tc_externalLinks_title'), content: t('tc_externalLinks') },
    { title: t('tc_changes_title'), content: t('tc_changes') },
    { title: t('tc_law_title'), content: t('tc_law') },
    {
      title: t('tc_contactUs_title'),
      content: t('tc_contactUs'),
      contactInfo: true,
    },
  ]

  return (
    <>
      <SEO
        title={isAr ? 'الشروط والأحكام | HRians Masr' : 'Terms & Conditions | HRians Masr'}
        description={isAr
          ? 'الشروط والأحكام الخاصة باستخدام موقع وخدمات HRians Masr'
          : 'Terms and Conditions for using the HRians Masr website and services'}
        keywords={isAr ? 'الشروط والأحكام, HRians Masr' : 'terms and conditions, HRians Masr'}
      />

      <div className="relative w-full bg-primary text-white pt-12 pb-20 rounded-b-[80px] md:rounded-b-[180px]">
        <div className="max-w-6xl mx-auto px-4 flex justify-center items-center flex-col">
          <p className="text-center text-white text-2xl md:text-3xl font-bold mb-2">{t('termsTitle')}</p>
          <img src="/images/LogoEldokhmesy.svg" className="text-center w-full max-w-[300px] md:max-w-[480px] mt-3" alt="Logo" />
          <Breadcrumb currentPage={t('terms')} />
        </div>
      </div>

      <section className="py-16 bg-linear-to-b from-white to-gray-50" dir={isAr ? 'rtl' : 'ltr'}>
        <div className="container max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">{t('termsTitle')}</h1>
              <p className="text-lg font-semibold text-gray-700">HRians Masr</p>
              <p className="text-sm text-gray-500 mt-2">{t('tc_lastUpdated')}</p>
            </div>

            {/* Intro */}
            <p className="text-gray-700 leading-relaxed mb-4">{t('tc_intro1')}</p>
            <p className="text-gray-600 leading-relaxed mb-10 border-b border-gray-200 pb-8">{t('tc_intro2')}</p>

            {/* Sections */}
            {sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                  <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                    {index + 1}
                  </span>
                  {section.title}
                </h2>
                <div className={`${isAr ? 'pr-11' : 'pl-11'}`}>
                  <p className="text-gray-700 leading-relaxed mb-3">{section.content}</p>

                  {section.list && (
                    <ul className="space-y-2 mb-3">
                      {section.list.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600">
                          <span className="text-primary mt-1.5 shrink-0">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.contactInfo && (
                    <div className="mt-4 space-y-3">
                      <div className="flex items-center gap-3 text-gray-700">
                        <i className="fa-solid fa-envelope text-primary"></i>
                        <div>
                          <span className="font-semibold">{t('emailLabel')}: </span>
                          <a href="mailto:info@hriansmasr.com" className="text-primary hover:underline">info@hriansmasr.com</a>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <i className="fa-solid fa-globe text-primary"></i>
                        <div>
                          <span className="font-semibold">{t('pp_website')}: </span>
                          <a href="https://hriansmasr.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">hriansmasr.com</a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {index < sections.length - 1 && <hr className="mt-8 border-gray-200" />}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default TermsPage
