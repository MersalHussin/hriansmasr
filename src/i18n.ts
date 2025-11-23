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
        explore: 'أستكشف',
        aboutTitle: 'من نحن',
        aboutHeading: 'نحن في اتش أرجية مصر',
        aboutDesc: 'نحن في H RG مصر نعمل على تمكين الشركات من النمو بثقة من خلال تقديم حلول احترافية تدعم التطوير، وترفع كفاءة العمل، وتبني أساس قوي للنجاح. نجمع بين الخبرة، والرؤية الواضحة، والفهم الحقيقي لاحتياجات السوق، لنقدّم خدمات تساعد الشركات على تحسين أدائها واتخاذ قرارات أفضل.',
        founder: 'عن المؤسس',
        servicesTitle: 'خدماتنا',
        feedbackTitle: 'أراء عملائنا',
        clientsTitle: 'نتشرف بـ العمل مع',
        faqTitle: 'الأسئلة الشائعة',
        faqSubtitle: 'ابحث عن إجابات للأسئلة المتكررة هنا.',
        faqSupport: 'إذا كنت تحتاج مزيد من الدعم',
        faq1Q: 'ما الخدمات التي تقدمها آسر لأرجية مصر؟',
        faq1A: 'نقدم مجموعة شاملة من الخدمات في مجال التطوير والاستشارة للشركات.',
        faq2Q: 'كيف نساعدك الشركات على تحسين بنائها؟',
        faq2A: 'نساعد الشركات على تحسين بنائها من خلال تحليل طبيعة عملياتك، وتصميم حلول مخصصة بخطوة بخطوة تحقيق نتائج فعّالة قابلة للقياس.',
        faq3Q: 'هل خدماتنا مناسبة للشركات الصغيرة والمتوسطة؟',
        faq3A: 'نعم، خدماتنا مصممة خصيصاً للشركات من جميع الأحجام.',
        faq4Q: 'كم يستغرق تنفيذ خطة التطوير أو الاستشارة؟',
        faq4A: 'يعتمد الوقت على طبيعة المشروع والمتطلبات المحددة.',
        faq5Q: 'كيف يمكن البدء معكم؟',
        faq5A: 'يمكنك التواصل معنا اليوم لمناقشة احتياجاتك والبدء في رحلة النجاح.'
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
        heroTitle: 'Your business deserves better',
        heroDesc: 'We streamline operations, empower teams, and boost performance — together.',
        explore: 'Explore',
        aboutTitle: 'About Us',
        aboutHeading: 'We are H RG Egypt',
        aboutDesc: 'At H RG Egypt, we empower businesses to grow confidently by providing professional solutions that support development, enhance work efficiency, and build a strong foundation for success. We combine expertise, clear vision, and a genuine understanding of market needs to deliver services that help companies improve their performance and make better decisions.',
        founder: 'About Founder',
        servicesTitle: 'Our Services',
        feedbackTitle: 'Testimonials',
        clientsTitle: 'Proud to work with',
        faqTitle: 'FAQ',
        faqSubtitle: 'Find answers to common questions here.',
        faqSupport: 'If you need more support',
        faq1Q: 'What services does H RG Egypt offer?',
        faq1A: 'We offer a comprehensive range of services in business development and consulting.',
        faq2Q: 'How do you help companies improve their structure?',
        faq2A: 'We help companies improve their structure by analyzing your operations and designing customized solutions step by step to achieve effective, measurable results.',
        faq3Q: 'Are your services suitable for small and medium-sized companies?',
        faq3A: 'Yes, our services are specifically designed for companies of all sizes.',
        faq4Q: 'How long does it take to implement a development or consulting plan?',
        faq4A: 'The time depends on the nature of the project and specific requirements.',
        faq5Q: 'How can we get started with you?',
        faq5A: 'You can contact us today to discuss your needs and begin your journey to success.'
      }
    }
  },
  lng: 'ar',
  fallbackLng: 'ar',
  interpolation: { escapeValue: false }
})

export default i18n
