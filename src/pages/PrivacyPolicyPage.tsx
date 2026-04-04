import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Breadcrumb from '../components/Breadcrumb'
import SEO from '../components/SEO'

function PrivacyPolicyPage() {
  const { t, i18n } = useTranslation()
  const isAr = i18n.language === 'ar'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const sections = [
    { title: t('pp_companyInfo_title'), content: t('pp_companyInfo') },
    { title: t('pp_userDef_title'), content: t('pp_userDef') },
    {
      title: t('pp_collectedInfo_title'),
      content: t('pp_collectedInfo'),
      list: [
        t('pp_collectedInfo_1'),
        t('pp_collectedInfo_2'),
        t('pp_collectedInfo_3'),
        t('pp_collectedInfo_4'),
        t('pp_collectedInfo_5'),
      ],
    },
    {
      title: t('pp_howCollect_title'),
      content: t('pp_howCollect'),
      list: [
        t('pp_howCollect_1'),
        t('pp_howCollect_2'),
        t('pp_howCollect_3'),
        t('pp_howCollect_4'),
        t('pp_howCollect_5'),
      ],
    },
    {
      title: t('pp_howUse_title'),
      content: t('pp_howUse'),
      list: [
        t('pp_howUse_1'),
        t('pp_howUse_2'),
        t('pp_howUse_3'),
        t('pp_howUse_4'),
        t('pp_howUse_5'),
      ],
    },
    {
      title: t('pp_analytics_title'),
      content: t('pp_analytics'),
      list: [
        'Google Analytics',
        'Meta Pixel',
        'LinkedIn Insight Tag',
        'Google Tag Manager',
        'Hotjar',
      ],
      footer: t('pp_analytics_footer'),
    },
    { title: t('pp_cookies_title'), content: t('pp_cookies') },
    { title: t('pp_sharing_title'), content: t('pp_sharing') },
    { title: t('pp_protection_title'), content: t('pp_protection') },
    {
      title: t('pp_externalLinks_title'),
      content: t('pp_externalLinks'),
      list: ['LinkedIn', 'YouTube', 'WhatsApp', 'Calendly', 'Google Meet'],
      footer: t('pp_externalLinks_footer'),
    },
    {
      title: t('pp_userRights_title'),
      content: t('pp_userRights'),
      list: [
        t('pp_userRights_1'),
        t('pp_userRights_2'),
        t('pp_userRights_3'),
      ],
      footer: t('pp_userRights_footer'),
    },
    { title: t('pp_changes_title'), content: t('pp_changes') },
    {
      title: t('pp_contactUs_title'),
      content: t('pp_contactUs'),
      contactInfo: true,
    },
  ]

  return (
    <>
      <SEO
        title={isAr ? 'سياسة الخصوصية | HRians Masr' : 'Privacy Policy | HRians Masr'}
        description={isAr
          ? 'سياسة الخصوصية لموقع HRians Masr - كيفية جمع واستخدام وحماية بياناتك الشخصية'
          : 'Privacy Policy for HRians Masr - How we collect, use and protect your personal data'}
        keywords={isAr ? 'سياسة الخصوصية, حماية البيانات, HRians Masr' : 'privacy policy, data protection, HRians Masr'}
      />

      <div className="relative w-full bg-primary text-white pt-12 pb-20 rounded-b-[80px] md:rounded-b-[180px]">
        <div className="max-w-6xl mx-auto px-4 flex justify-center items-center flex-col">
          <p className="text-center text-white text-2xl md:text-3xl font-bold mb-2">{t('privacyPolicyTitle')}</p>
          <img src="/images/LogoEldokhmesy.svg" className="text-center w-full max-w-[300px] md:max-w-[480px] mt-3" alt="Logo" />
          <Breadcrumb currentPage={t('privacyPolicy')} />
        </div>
      </div>

      <section className="py-16 bg-linear-to-b from-white to-gray-50" dir={isAr ? 'rtl' : 'ltr'}>
        <div className="container max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">{t('privacyPolicyTitle')}</h1>
              <p className="text-lg font-semibold text-gray-700">HRians Masr</p>
              <p className="text-sm text-gray-500 mt-2">{t('pp_lastUpdated')}</p>
            </div>

            {/* Intro */}
            <p className="text-gray-700 leading-relaxed mb-4">{t('pp_intro1')}</p>
            <p className="text-gray-600 leading-relaxed mb-10 border-b border-gray-200 pb-8">{t('pp_intro2')}</p>

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

                  {section.footer && (
                    <p className="text-gray-600 leading-relaxed">{section.footer}</p>
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
                        <i className="fa-solid fa-location-dot text-primary"></i>
                        <div>
                          <span className="font-semibold">{t('locationLabel')}: </span>
                          <span>{t('locationText')}</span>
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

export default PrivacyPolicyPage
