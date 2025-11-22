import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  resources: {
    ar: {
      translation: {
        home: 'الرئيسية',
        about: 'من نحن',
        services: 'الخدمات',
        clients: 'عملائنا',
        faq: 'الأسئلة الشائعة',
        contact: 'تواصل معنا',
        heroTitle: 'شركتك تستحق الأفضل وده دورنا',
        heroDesc: 'نشتغل معاك خطوة بخطوة عشان نطوّر عملياتك، ونقوّي فريقك، ونرفع مستوى أداء شركتك.',
        explore: 'أستكشف'
      }
    },
    en: {
      translation: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        clients: 'Clients',
        faq: 'FAQ',
        contact: 'Contact Us',
        heroTitle: 'The best for your company, that\'s our mission',
        heroDesc: 'We work with you step by step to develop your operations, strengthen your team, and elevate your company\'s performance.',
        explore: 'Explore'
      }
    }
  },
  lng: 'ar',
  fallbackLng: 'ar',
  interpolation: { escapeValue: false }
})

export default i18n
