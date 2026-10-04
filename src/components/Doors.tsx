import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Briefcase, Building2, Users } from 'lucide-react';

const Doors = () => {
  const { i18n } = useTranslation();

  const cardsAr = [
    {
      id: 1,
      icon: <Briefcase className="w-12 h-12 text-primary mb-4" />,
      title: 'للقيادات وكبار المديرين',
      for: 'لمن: مدير أو تنفيذي سمعته أكبر من بروفايله.',
      points: [
        'سيرة ذاتية تنفيذية بلغة الأرقام والأثر',
        'بروفايل لينكدإن يليق بمكانتك',
        'إدارة حسابك ومحتواك شهرياً (اختياري)'
      ],
      btnText: 'اعرف باقة مسار',
      link: '/masar'
    },
    {
      id: 2,
      icon: <Building2 className="w-12 h-12 text-primary mb-4" />,
      title: 'للشركات',
      for: 'لمن: صاحب شركة الـ HR عنده ماشي بالبركة مش بالأنظمة.',
      points: [
        'هياكل تنظيمية ولوائح وسياسات',
        'مؤشرات أداء (KPIs) ونظام أجور',
        'تدريب الفريق على تشغيل النظام'
      ],
      btnText: 'اطلب استشارة',
      link: '/product/hr-consulting'
    },
    {
      id: 3,
      icon: <Users className="w-12 h-12 text-primary mb-4" />,
      title: 'لمحترفي الموارد البشرية',
      for: 'لمن: اللي داخل المجال، أو اللي عايز ينتقل من التنفيذ للإدارة.',
      points: [
        'برنامج HR Executive Roadmap — مدته 20 ساعة، و80% منها عملي',
        'أكثر من 32 دفعة سابقة',
        'حضور في مدينة نصر أو أونلاين'
      ],
      btnText: 'تفاصيل الدفعة الجاية',
      link: 'https://courses.hriansmasr.com/hr-roadmap'
    }
  ];

  const cardsEn = [
    {
      id: 1,
      icon: <Briefcase className="w-12 h-12 text-primary mb-4" />,
      title: 'For Leaders and Senior Executives',
      for: 'For: Manager or Executive whose reputation is bigger than their profile.',
      points: [
        'Executive resume with numbers and impact',
        'LinkedIn profile fitting your status',
        'Monthly account and content management (optional)'
      ],
      btnText: 'Discover Masar Package',
      link: '/masar'
    },
    {
      id: 2,
      icon: <Building2 className="w-12 h-12 text-primary mb-4" />,
      title: 'For Companies',
      for: 'For: Business owner with unorganized HR lacking systems.',
      points: [
        'Organizational structures, regulations, and policies',
        'Key Performance Indicators (KPIs) and payroll system',
        'Training the team to run the system'
      ],
      btnText: 'Request Consultation',
      link: '/product/hr-consulting'
    },
    {
      id: 3,
      icon: <Users className="w-12 h-12 text-primary mb-4" />,
      title: 'For HR Professionals',
      for: 'For: Newcomers to the field or those moving from execution to management.',
      points: [
        'HR Executive Roadmap Program — 20 hours, 80% practical',
        'More than 32 previous cohorts',
        'In-person in Nasr City or online'
      ],
      btnText: 'Next Cohort Details',
      link: 'https://courses.hriansmasr.com/hr-roadmap'
    }
  ];

  const cards = i18n.language === 'en' ? cardsEn : cardsAr;

  return (
    <section id="doors" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl md:text-5xl font-extrabold text-primary text-center mb-12 animate-on-scroll fade-in-up">
          {i18n.language === 'en' ? 'Start From Where It Suits You' : 'ابدأ من المكان اللي يناسبك'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={card.id} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full animate-on-scroll fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center">{card.icon}</div>
              <h3 className="text-2xl font-bold text-center text-primary mb-4">{card.title}</h3>
              <p className="text-gray-600 font-semibold mb-6 text-center">{card.for}</p>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {card.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="min-w-[8px] w-2 h-2 rounded-full bg-yellow mt-2"></div>
                    <span className="text-gray-700 font-medium">{point}</span>
                  </li>
                ))}
              </ul>
              
              {card.link.startsWith('http') ? (
                <a 
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 w-full bg-primary text-white py-3 px-6 rounded-xl font-bold hover:bg-orange-500 transition-colors duration-300"
                >
                  {card.btnText}
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                </a>
              ) : (
                <Link 
                  to={card.link}
                  className="group flex items-center justify-center gap-2 w-full bg-primary text-white py-3 px-6 rounded-xl font-bold hover:bg-orange-500 transition-colors duration-300"
                >
                  {card.btnText}
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doors;
