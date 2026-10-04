import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useTranslation } from 'react-i18next';
import { 
  Target, 
  AlertTriangle, 
  Gift, 
  Clock, 
  ListOrdered, 
  CreditCard 
} from 'lucide-react';

const productsDataAr: Record<string, any> = {
  'hidden-market': {
    title: 'Hidden Market Masterclass',
    for: 'القيادات وكبار المديرين الباحثين عن فرص غير معلنة.',
    notFor: 'حديثي التخرج أو الباحثين عن وظائف تقليدية.',
    problem: [
      'الاعتماد على إعلانات الوظائف فقط.',
      'عدم استغلال شبكة العلاقات بشكل فعال.',
      'صعوبة الوصول لأصحاب القرار مباشرة.'
    ],
    whatYouGet: 'يوم واحد (6 ساعات) يعلمك استراتيجيات الوصول للفرص والصفقات اللي مش بتتعلن.',
    duration: 'يوم واحد (6 ساعات)',
    steps: [
      'التسجيل في الماستركلاس.',
      'حضور التدريب المكثف.',
      'تطبيق الاستراتيجيات عملياً.',
      'متابعة النتائج.'
    ],
    price: 'يحدد لاحقاً',
    testimonial: {
      text: "الماستركلاس فتحت عيني على طرق جديدة تماماً للوصول للفرص اللي كنت مفكر إنها مستحيلة.",
      name: "عميل تنفيذي",
      title: "مدير عام"
    },
    whatsappText: 'السلام عليكم، عايز أحجز في Hidden Market Masterclass',
    heroImage: '/images/Services/9.jpg'
  },
  'hr-consulting': {
    title: 'استشارات الموارد البشرية',
    for: 'أصحاب الشركات اللي الـ HR عندهم ماشي بالبركة محتاجين نظام.',
    notFor: 'الشركات اللي عندها نظام HR متكامل وشغال بكفاءة.',
    problem: [
      'عدم وجود هيكل تنظيمي واضح.',
      'غياب سياسات ولوائح العمل.',
      'صعوبة تقييم أداء الموظفين العادل.'
    ],
    whatYouGet: 'هياكل، لوائح، KPIs، وأنظمة أجور تفضل شغالة بعد ما المستشار يمشي.',
    duration: 'يختلف حسب حجم الشركة واحتياجاتها',
    steps: [
      'جلسة تقييم مبدئية.',
      'تصميم النظام المناسب للشركة.',
      'تدريب الفريق على تشغيل النظام.',
      'متابعة التنفيذ والتأكد من الفعالية.'
    ],
    price: 'يحدد بعد الجلسة المبدئية',
    testimonial: {
      text: "الأنظمة اللي اتبنت غيرت شكل الشغل تماماً، دلوقتي كل حاجة ماشية بنظام واضح.",
      name: "صاحب شركة",
      title: "المدير التنفيذي"
    },
    whatsappText: 'السلام عليكم، عايز استشارة HR لشركتي',
    heroImage: '/images/Services/3.jpg'
  },
  'corporate-training': {
    title: 'تدريب الشركات',
    for: 'الشركات اللي عايزة تطور مهارات فريقها بشكل عملي ومؤثر.',
    notFor: 'الشركات اللي بتدور على تدريب نظري فقط.',
    problem: [
      'ضعف أداء الفريق في مهام معينة.',
      'الحاجة لمهارات جديدة لمواكبة التطور.',
      'عدم تماشي التدريبات السابقة مع مشاكل الشغل الفعلية.'
    ],
    whatYouGet: 'برامج مصممة خصيصاً لفريقك مبنية على مشاكل شغلك الفعلية ومخرجات ملموسة.',
    duration: 'حسب البرنامج التدريبي',
    steps: [
      'تحليل الاحتياجات التدريبية للفريق.',
      'تصميم مادة علمية وعملية مخصصة.',
      'تنفيذ التدريب.',
      'قياس أثر التدريب على الأداء.'
    ],
    price: 'يحدد حسب عدد المتدربين والبرنامج',
    testimonial: {
      text: "التدريب كان عملي جداً وحل مشاكل كنا بنعاني منها بقالنا شهور.",
      name: "مدير موارد بشرية",
      title: "شركة قطاع خاص"
    },
    whatsappText: 'السلام عليكم، عايز أعرف عن تدريب الشركات',
    heroImage: '/images/Services/1.jpg'
  },
  'hr-roadmap': {
    title: 'HR Executive Roadmap',
    for: 'اللي داخل المجال جديد، أو اللي عايز ينتقل من التنفيذ للإدارة.',
    notFor: 'مديري الموارد البشرية ذوي الخبرة الطويلة.',
    problem: [
      'التشتت بين النظريات وعدم معرفة التطبيق العملي.',
      'صعوبة الترقي من دور تنفيذي لدور إداري.',
      'نقص الخبرة في التعامل مع التحديات الحقيقية في الـ HR.'
    ],
    whatYouGet: 'برنامج مكثف 80% منه عملي، يضعك على أول طريق الإدارة في الموارد البشرية.',
    duration: '20 ساعة',
    steps: [
      'التقديم والتسجيل في الدفعة.',
      'حضور المحاضرات والتطبيقات العملية.',
      'مشروع التخرج العملي.',
      'استلام الشهادة والدعم المستمر.'
    ],
    price: 'يحدد عند الإعلان عن الدفعة',
    testimonial: {
      text: "البرنامج اختصر عليا سنين من التخبط، وساعدني أترقى في شغلي بسرعة.",
      name: "خريج البرنامج",
      title: "أخصائي موارد بشرية"
    },
    whatsappText: 'السلام عليكم، عايز تفاصيل الدفعة الجاية من HR Roadmap',
    heroImage: '/images/Services/11.jpg'
  }
};

const productsDataEn: Record<string, any> = {
  'hidden-market': {
    title: 'Hidden Market Masterclass',
    for: 'Leaders and senior executives looking for unannounced opportunities.',
    notFor: 'Recent graduates or traditional job seekers.',
    problem: [
      'Relying solely on job postings.',
      'Not leveraging professional networks effectively.',
      'Difficulty reaching decision-makers directly.'
    ],
    whatYouGet: 'A 1-day (6 hours) masterclass teaching you strategies to reach unannounced opportunities and deals.',
    duration: '1 Day (6 hours)',
    steps: [
      'Register for the masterclass.',
      'Attend the intensive training.',
      'Apply strategies practically.',
      'Monitor results.'
    ],
    price: 'To be determined',
    testimonial: {
      text: "The masterclass opened my eyes to completely new ways to reach opportunities I thought were impossible.",
      name: "Executive Client",
      title: "General Manager"
    },
    whatsappText: 'Hello, I would like to book the Hidden Market Masterclass',
    heroImage: '/images/Services/9.jpg'
  },
  'hr-consulting': {
    title: 'HR Consulting',
    for: 'Business owners whose HR operations are disorganized and need a system.',
    notFor: 'Companies with a fully integrated and efficient HR system.',
    problem: [
      'Lack of a clear organizational structure.',
      'Absence of HR policies and regulations.',
      'Difficulty in evaluating employee performance fairly.'
    ],
    whatYouGet: 'Structures, policies, KPIs, and payroll systems that continue to work after the consultant leaves.',
    duration: 'Varies based on company size and needs',
    steps: [
      'Initial assessment session.',
      'Design the appropriate system for the company.',
      'Train the team to operate the system.',
      'Monitor implementation and ensure effectiveness.'
    ],
    price: 'Determined after the initial session',
    testimonial: {
      text: "The systems built completely changed how we work, everything runs with a clear structure now.",
      name: "Business Owner",
      title: "CEO"
    },
    whatsappText: 'Hello, I need HR consulting for my company',
    heroImage: '/images/Services/3.jpg'
  },
  'corporate-training': {
    title: 'Corporate Training',
    for: 'Companies wanting to practically and effectively develop their team\'s skills.',
    notFor: 'Companies looking only for theoretical training.',
    problem: [
      'Poor team performance in specific tasks.',
      'Need for new skills to keep up with developments.',
      'Previous training mismatching actual work problems.'
    ],
    whatYouGet: 'Programs tailored specifically to your team, based on real work problems with tangible outcomes.',
    duration: 'Depends on the training program',
    steps: [
      'Analyze the team\'s training needs.',
      'Design customized scientific and practical material.',
      'Execute the training.',
      'Measure the training impact on performance.'
    ],
    price: 'Determined by the number of trainees and the program',
    testimonial: {
      text: "The training was very practical and solved problems we had been struggling with for months.",
      name: "HR Manager",
      title: "Private Sector Company"
    },
    whatsappText: 'Hello, I want to know more about corporate training',
    heroImage: '/images/Services/1.jpg'
  },
  'hr-roadmap': {
    title: 'HR Executive Roadmap',
    for: 'Those new to the field, or looking to move from execution to management.',
    notFor: 'Highly experienced HR managers.',
    problem: [
      'Confusion between theories and lack of practical application.',
      'Difficulty getting promoted from an executive to a managerial role.',
      'Lack of experience dealing with real HR challenges.'
    ],
    whatYouGet: 'An intensive program, 80% practical, putting you on the first step to HR management.',
    duration: '20 hours',
    steps: [
      'Apply and register for the cohort.',
      'Attend lectures and practical applications.',
      'Practical graduation project.',
      'Receive certificate and continuous support.'
    ],
    price: 'Determined when the cohort is announced',
    testimonial: {
      text: "The program saved me years of confusion and helped me get promoted quickly.",
      name: "Program Graduate",
      title: "HR Specialist"
    },
    whatsappText: 'Hello, I want details about the next HR Roadmap cohort',
    heroImage: '/images/Services/11.jpg'
  }
};

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  const productsData = i18n.language === 'en' ? productsDataEn : productsDataAr;
  const product = id ? productsData[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="py-32 text-center container mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{t('productNotFound')}</h1>
        <Link to="/services" className="text-primary hover:underline">{t('backToServices')}</Link>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={`${product.title} | ${i18n.language === 'en' ? 'HRians Egypt' : 'أتش أرجية مصر'}`}
        description={product.whatYouGet}
      />
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-32 relative overflow-hidden">
        {product.heroImage && (
          <>
            <div className="absolute inset-0 bg-black/75 z-10"></div>
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
              style={{ backgroundImage: `url(${product.heroImage})` }}
            ></div>
          </>
        )}
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-20">
          
          {/* Breadcrumb */}
          <nav className="flex justify-center mb-8" aria-label="Breadcrumb" dir={isRtl ? 'rtl' : 'ltr'}>
            <ol className={`inline-flex items-center space-x-1 ${isRtl ? 'space-x-reverse' : ''} md:space-x-3 bg-white/10 backdrop-blur-md py-2 px-6 rounded-full border border-white/20 shadow-lg`}>
              <li className="inline-flex items-center">
                <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-200 hover:text-white transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <Link to="/services" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
                    {t('services')}
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-sm font-bold text-yellow">{product.title}</span>
                </div>
              </li>
            </ol>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 drop-shadow-2xl">
            {product.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-medium drop-shadow-md max-w-2xl mx-auto leading-relaxed">
            {product.for}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl space-y-12">
          
          {/* Who it's for */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-green-100 p-4 rounded-xl shrink-0">
              <Target className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{t('whoIsItFor')}</h3>
              <p className="text-gray-600 font-medium text-lg">{product.for}</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="font-bold text-red-500">{t('whoIsNotFor')}</span>
                <span className="text-gray-600">{product.notFor}</span>
              </div>
            </div>
          </div>

          {/* The Problem */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-red-100 p-4 rounded-xl shrink-0">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('problemWeSolve')}</h3>
              <ul className="space-y-3">
                {product.problem.map((point: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="min-w-[8px] w-2 h-2 rounded-full bg-red-400 mt-2"></div>
                    <span className="text-gray-700 font-medium text-lg">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* What you get */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-blue-100 p-4 rounded-xl shrink-0">
              <Gift className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{t('whatYouGet')}</h3>
              <p className="text-gray-600 font-medium text-lg">{product.whatYouGet}</p>
            </div>
          </div>

          {/* Grid for Duration & Price */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
              <Clock className="w-8 h-8 text-primary" />
              <div>
                <h4 className="text-lg font-bold text-gray-800">{t('duration')}</h4>
                <p className="text-gray-600">{product.duration}</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
              <CreditCard className="w-8 h-8 text-primary" />
              <div>
                <h4 className="text-lg font-bold text-gray-800">{t('price')}</h4>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-yellow/20 p-4 rounded-xl shrink-0">
              <ListOrdered className="w-8 h-8 text-yellow-600" />
            </div>
            <div className="w-full">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('steps')}</h3>
              <div className="space-y-4">
                {product.steps.map((step: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">{idx + 1}</span>
                    <span className="text-gray-700 font-medium">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>


          {/* CTA */}
          <div className="text-center pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('readyToStart')}</h2>
            <a 
              href={`https://wa.me/201097828846?text=${encodeURIComponent(product.whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 px-8 rounded-xl font-bold text-xl hover:bg-[#1EBE5D] transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {t('contactToBook')}
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default ProductPage;
