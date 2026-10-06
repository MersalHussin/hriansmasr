import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import SEO from "../components/SEO"

function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  const faqs = [
    {
      q: "كيف أعرف أي كورس هو الأنسب لي حالياً؟",
      a: "إذا كنت تريد دخول مجال الـ HR من الصفر أو تغيير مجالك المهني (Career Shift)، أو كنت أخصائي HR وتبحث عن التأسيس الشامل لقوانين العمل والأجور والتوظيف، فـ HR Roadmap هو اختيارك المثالي. أما إذا كنت بالفعل مديراً أو صاحب خبرة (+5 سنوات) وتبحث عن الوصول للوظائف غير المعلنة، وبناء براند شخصي ونفوذ مهني على لينكدإن، وتقديم استشارات مدفوعة، فـ The Hidden Market هو الأنسب لك."
    },
    {
      q: "هل البرامج التدريبية أونلاين أم حضورية؟",
      a: "البرامج تقدم أونلاين عبر محاضرات تفاعلية مباشرة مع أ. أحمد ناجي الدخميسي، مع تسجيلات متاحة بجودة عالية ومتابعة مستمرة وتطبيقات عملية ومشاريع تخرج حقيقية."
    },
    {
      q: "هل أحصل على شهادة ومتابعة عملية بعد انتهاء الكورس؟",
      a: "نعم، يحصل المتدرب على شهادة إتمام معتمدة من أكاديمية أتش أرجية مصر، بالإضافة إلى متابعة مستمرة في مجتمع الخريجين ودعم في تطوير الـ CV والبروفايل المهني."
    },
    {
      q: "هل تتوفر خيارات للدفع والتقسيط؟",
      a: "نعم، نوفر خيارات دفع متعددة ومرنة تناسب الجميع (فودافون كاش، إنستاباي، تحويل بنكي، وخيارات تقسيط ميسرة). يمكنك التواصل معنا عبر واتساب لمعرفة التفاصيل المتاحة."
    }
  ]

  return (
    <>
      <SEO
        title="أتش أرجية مصر | HRians Egypt - برامج وكورسات احتراف الموارد البشرية"
        description="اختر مسارك المهني القادم مع أكاديمية أتش أرجية مصر. برامج تدريبية متقدمة في الموارد البشرية وهندسة النفوذ المهني بقيادة أحمد ناجي الدخميسي."
        keywords="موارد بشرية, HR, كورس HR, The Hidden Market, HR Roadmap, أحمد الدخميسي, تدريب مهني"
      />

      <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-primary/20 selection:text-primary relative overflow-hidden" dir="rtl">
        {/* Soft Background Mesh Light Effects */}
        <div className="absolute top-0 right-1/4 w-[650px] h-[650px] bg-primary/6 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute top-60 left-10 w-[500px] h-[500px] bg-yellow/10 rounded-full blur-[130px] pointer-events-none -z-10" />
        <div className="absolute bottom-40 right-10 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none -z-10" />

        {/* Hero Section */}
        <section className="relative pt-12 md:pt-16 pb-12 px-4">
          <div className="mx-auto max-w-5xl text-center flex flex-col items-center">
            
            {/* Top Academy Trust Pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full bg-white border border-slate-200/90 px-4 py-2 text-xs md:text-sm font-bold text-primary mb-6 shadow-xs hover:border-primary/30 transition-colors">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>أكاديمية أتش أرجية مصر</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600 font-medium">بقيادة أحمد ناجي الدخميسي</span>
            </div>

            {/* Main Headline */}
            <h1 className="rubik font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-[1.25] md:leading-[1.2] mb-6 max-w-4xl tracking-tight">
              مكانك الحقيقي.. <br className="hidden sm:inline" />
              <span className="bg-gradient-to-l from-primary via-primary/90 to-blue-700 bg-clip-text text-transparent">
                أكبر بكثير مما تتخيل
              </span>
            </h1>

            {/* Subtitle */}
            <p className="rubik text-slate-600 text-base sm:text-lg md:text-xl font-normal max-w-2xl mx-auto leading-relaxed mb-8">
              لا نقدّم مجرد دورات نظرية، بل نبني معك مساراً عملياً يعكس قيمتك الحقيقية ويضعك في المكانة المهنية والدخل الذي تستحقه.
            </p>

            {/* Quick Value Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-3xl mb-4">
              <div className="flex items-center justify-center gap-2 bg-white/80 backdrop-blur-xs py-2.5 px-3 rounded-xl border border-slate-200/80 shadow-2xs text-xs md:text-sm font-bold text-slate-700">
                <i className="fa-solid fa-graduation-cap text-primary text-sm" />
                <span>تطبيق عملي 100%</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/80 backdrop-blur-xs py-2.5 px-3 rounded-xl border border-slate-200/80 shadow-2xs text-xs md:text-sm font-bold text-slate-700">
                <i className="fa-solid fa-wand-magic-sparkles text-amber-500 text-sm" />
                <span>أدوات الذكاء الاصطناعي</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/80 backdrop-blur-xs py-2.5 px-3 rounded-xl border border-slate-200/80 shadow-2xs text-xs md:text-sm font-bold text-slate-700">
                <i className="fa-solid fa-user-tie text-primary text-sm" />
                <span>محاضر خبير 14+ عاماً</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/80 backdrop-blur-xs py-2.5 px-3 rounded-xl border border-slate-200/80 shadow-2xs text-xs md:text-sm font-bold text-slate-700">
                <i className="fa-solid fa-certificate text-emerald-600 text-sm" />
                <span>شهادة معتمدة ومتابعة</span>
              </div>
            </div>

          </div>
        </section>

        {/* Courses Section */}
        <section className="py-6 px-4 max-w-6xl mx-auto" id="courses">
          <div className="text-center mb-10">
            <h2 className="rubik font-extrabold text-2xl md:text-3xl text-slate-900 mb-2">
              اختر المسار التدريبي المناسب لأهدافك
            </h2>
            <p className="text-slate-500 text-sm md:text-base font-medium">
              برنامجان متخصصان صُمما خصيصاً ليحدثا قفزة حقيقية في مسارك المهني
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            
            {/* Card 1: The Hidden Market Masterclass */}
            <div className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_10px_35px_-10px_rgba(10,37,82,0.1)] hover:shadow-[0_20px_50px_-15px_rgba(10,37,82,0.22)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between relative">
              
              {/* Top Accent Strip */}
              <div className="h-2 w-full bg-gradient-to-r from-amber-400 via-amber-500 to-[#0A2552]" />

              <div className="p-6 md:p-8 flex flex-col flex-1">
                
                {/* Header with Logo & Badge */}
                <div className="flex items-center justify-between gap-4 mb-5 pb-5 border-b border-slate-100">
                  <div className="h-12 w-44 bg-[#0A2552] rounded-xl p-2.5 flex items-center justify-center shadow-xs">
                    <img 
                      src="/Logo_Hidden.svg" 
                      alt="The Hidden Market Logo" 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-800 text-xs font-black px-3.5 py-1.5 rounded-full border border-amber-200">
                    <i className="fa-solid fa-fire text-amber-500 text-xs"></i> للمحترفين والمديرين
                  </span>
                </div>

                {/* Course Image */}
                <div className="relative h-52 md:h-60 w-full rounded-2xl overflow-hidden bg-slate-900 mb-6 group-hover:ring-2 group-hover:ring-amber-400/40 transition-all">
                  <img 
                    src="./images/The-Hidden/Course.jpg" 
                    alt="The Hidden Market Masterclass" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.src = 'https://placehold.co/800x600/0A2552/FFFFFF/png?text=The+Hidden+Market+Masterclass&font=Montserrat' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2552]/80 via-transparent to-black/10" />
                  <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between text-white text-xs font-bold">
                    <span className="bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                      ⚡ 4 مراحل تدريبية مكثفة
                    </span>
                    <span className="bg-amber-400 text-slate-900 px-3 py-1.5 rounded-lg font-black">
                      هندسة النفوذ المهني
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="mb-6">
                  <h3 className="text-slate-900 font-black text-2xl md:text-3xl mb-2 rubik">
                    The Hidden Market Masterclass
                  </h3>
                  <p className="text-amber-600 font-bold text-sm md:text-base mb-3">
                    ماستركلاس اقتناص الوظائف الخفية وبناء الهيبة الرقمية
                  </p>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    أعد صياغة صورتك المهنية لتعكس قيمتك الحقيقية. تعلم كيف تجعل كبرى الشركات تبحث عنك، وتقتنص 80% من الفرص التي لا تُعلن للعامة، وتسيّل خبرتك كاستشاري محترف.
                  </p>
                </div>

                {/* Key Takeaways */}
                <div className="mb-6 bg-slate-50 rounded-2xl p-4 border border-slate-100">
                  <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider block mb-3">
                    أبرز ما ستكتسبه في هذا البرنامج:
                  </span>
                  <ul className="space-y-2.5 text-xs md:text-sm text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <i className="fa-solid fa-check text-emerald-500 font-bold text-sm shrink-0" />
                      <span>اقتناص الفرص والوظائف القيادية غير المعلنة (Insider Games)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fa-solid fa-check text-emerald-500 font-bold text-sm shrink-0" />
                      <span>تحويل بروفايل LinkedIn لمنصة نفوذ ومغناطيس فرص (Lead Magnet)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fa-solid fa-check text-emerald-500 font-bold text-sm shrink-0" />
                      <span>توظيف أدوات الـ AI في صناعة المحتوى اليومي والهوية البصرية</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fa-solid fa-check text-emerald-500 font-bold text-sm shrink-0" />
                      <span>تسييل الخبرة وتحويلها إلى باقات استشارية مدفوعة (Consulting Package)</span>
                    </li>
                  </ul>
                </div>

                {/* Target Audience Note */}
                <div className="mb-6 text-xs text-slate-500 bg-amber-50/60 p-3 rounded-xl border border-amber-100/80 flex items-start gap-2">
                  <i className="fa-solid fa-bullseye text-amber-500 text-sm mt-0.5 shrink-0" />
                  <span><strong>الفئة المستهدفة:</strong> المديرون، الاستشاريون، وأصحاب الخبرات (+5 سنوات) الساعون لقفزة في المكانة والدخل.</span>
                </div>

              </div>

              {/* Bottom Actions */}
              <div className="p-6 md:p-8 pt-0 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/hidden-market-masterclass"
                  className="flex-1 bg-[#0A2552] hover:bg-[#12397A] text-white font-extrabold py-3.5 px-6 rounded-xl text-center text-sm md:text-base transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group-hover:gap-3"
                >
                  <span>استكشف تفاصيل الماستركلاس</span>
                  <i className="fa-solid fa-arrow-left text-xs transition-transform" />
                </Link>
                <Link
                  to="/hidden-market-masterclass/book"
                  className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-extrabold py-3.5 px-5 rounded-xl text-center text-sm md:text-base transition-all duration-200 shrink-0"
                >
                  حجز مقعد
                </Link>
              </div>

            </div>

            {/* Card 2: HR Roadmap */}
            <div className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_10px_35px_-10px_rgba(28,84,179,0.1)] hover:shadow-[0_20px_50px_-15px_rgba(28,84,179,0.22)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between relative">
              
              {/* Top Accent Strip */}
              <div className="h-2 w-full bg-gradient-to-r from-blue-400 via-primary to-orange-500" />

              <div className="p-6 md:p-8 flex flex-col flex-1">
                
                {/* Header with Logo & Badge */}
                <div className="flex items-center justify-between gap-4 mb-5 pb-5 border-b border-slate-100">
                  <div className="h-12 w-44 bg-primary rounded-xl p-2 flex items-center justify-center border border-primary/20 shadow-xs">
                    <img 
                      src="/hr-roadmap.png" 
                      alt="HR Roadmap Logo" 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <span className="inline-flex items-center gap-1.5 bg-blue-50 text-primary text-xs font-black px-3.5 py-1.5 rounded-full border border-blue-200">
                    <i className="fa-solid fa-compass text-primary text-xs"></i> التأسيس والاحتراف الشامل
                  </span>
                </div>

                {/* Course Image */}
                <div className="relative h-52 md:h-60 w-full rounded-2xl overflow-hidden bg-slate-900 mb-6 group-hover:ring-2 group-hover:ring-primary/40 transition-all">
                  <img 
                    src="./images/HR-Roodmap/Course-2.jpg" 
                    alt="HR Roadmap" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.src = 'https://placehold.co/800x600/EF8A1B/FFFFFF/png?text=HR+Roadmap&font=Montserrat' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-black/10" />
                  <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between text-white text-xs font-bold">
                    <span className="bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                      🗺️ 7 محاور رئيسية متكاملة
                    </span>
                    <span className="bg-orange-500 text-white px-3 py-1.5 rounded-lg font-black">
                      من الصفر حتى الإدارة
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="mb-6">
                  <h3 className="text-slate-900 font-black text-2xl md:text-3xl mb-2 rubik">
                    HR Roadmap
                  </h3>
                  <p className="text-primary font-bold text-sm md:text-base mb-3">
                    خارطة الطريق الشاملة لاحتراف إدارة الموارد البشرية
                  </p>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    استثمر في تطوير مسارك المهني (Career Shift) لدخول مجال الموارد البشرية بتأسيس صلب وخطوات عملية تأخذك من خبرتك السابقة إلى كادر محترف يضيف قيمة لأي مؤسسة.
                  </p>
                </div>

                {/* Key Takeaways */}
                <div className="mb-6 bg-slate-50 rounded-2xl p-4 border border-slate-100">
                  <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider block mb-3">
                    أبرز ما ستكتسبه في هذا البرنامج:
                  </span>
                  <ul className="space-y-2.5 text-xs md:text-sm text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <i className="fa-solid fa-check text-emerald-500 font-bold text-sm shrink-0" />
                      <span>التوظيف والمقابلات المبنية على الجدارات (Competency-Based Interview)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fa-solid fa-check text-emerald-500 font-bold text-sm shrink-0" />
                      <span>هيكلة الرواتب والمزايا (C&B) وأنظمة الحوافز التنافسية</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fa-solid fa-check text-emerald-500 font-bold text-sm shrink-0" />
                      <span>التطبيق العملي لقانون العمل والتأمينات وتجنب المخالفات القانونية</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fa-solid fa-check text-emerald-500 font-bold text-sm shrink-0" />
                      <span>تحليلات الموارد البشرية (HR Analytics) وربطها بالأهداف الاستراتيجية</span>
                    </li>
                  </ul>
                </div>

                {/* Target Audience Note */}
                <div className="mb-6 text-xs text-slate-500 bg-blue-50/60 p-3 rounded-xl border border-blue-100/80 flex items-start gap-2">
                  <i className="fa-solid fa-bullseye text-primary text-sm mt-0.5 shrink-0" />
                  <span><strong>الفئة المستهدفة:</strong> الراغبون في Career Shift لمجال الـ HR، وأخصائيو الموارد البشرية الساعون للترقية والإدارة.</span>
                </div>

              </div>

              {/* Bottom Actions */}
              <div className="p-6 md:p-8 pt-0 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/hr-roadmap"
                  className="flex-1 bg-primary hover:bg-[#154291] text-white font-extrabold py-3.5 px-6 rounded-xl text-center text-sm md:text-base transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group-hover:gap-3"
                >
                  <span>استكشف تفاصيل HR Roadmap</span>
                  <i className="fa-solid fa-arrow-left text-xs transition-transform" />
                </Link>
                <Link
                  to="/hr-roadmap/book"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-extrabold py-3.5 px-5 rounded-xl text-center text-sm md:text-base transition-all duration-200 shrink-0"
                >
                  حجز مقعد
                </Link>
              </div>

            </div>

          </div>
        </section>

        {/* Quick Decision Guide (بسيطة وسهلة: كيف تختار؟) */}
        <section className="py-14 px-4 max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-sm">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-primary font-bold text-xs md:text-sm uppercase tracking-wider block mb-2">
                دليل الاختيار السريع
              </span>
              <h3 className="rubik font-black text-2xl md:text-3xl text-slate-900 mb-2">
                أيهما أنسب لمستواك وأهدافك؟
              </h3>
              <p className="text-slate-500 text-sm font-medium">
                مقارنة سريعة تساعدك على اتخاذ القرار الصحيح في أقل من دقيقة
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Option 1 Box */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-amber-300 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-xl bg-[#0A2552] text-amber-400 flex items-center justify-center text-lg font-bold">
                    <i className="fa-solid fa-crown" />
                  </span>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-lg">اختر The Hidden Market إذا:</h4>
                    <span className="text-xs text-amber-600 font-bold">للمحترفين وأصحاب الخبرة</span>
                  </div>
                </div>
                <ul className="space-y-2.5 text-xs md:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-circle-check text-amber-500 mt-1 shrink-0 text-xs" />
                    <span>لديك بالفعل خبرة مهنية عملية (+5 سنوات) في مجالك.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-circle-check text-amber-500 mt-1 shrink-0 text-xs" />
                    <span>تشعر أنك تستحق منصباً أعلى أو راتباً أكبر وتبحث عن الفرص غير المعلنة.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-circle-check text-amber-500 mt-1 shrink-0 text-xs" />
                    <span>تريد بناء Personal Brand قوي وحضور قيادي على LinkedIn.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-circle-check text-amber-500 mt-1 shrink-0 text-xs" />
                    <span>ترغب في تقديم استشارات للشركات بمقابل مادي مرتفع.</span>
                  </li>
                </ul>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <Link 
                    to="/hidden-market-masterclass"
                    className="text-primary font-bold text-xs md:text-sm hover:underline inline-flex items-center gap-1.5"
                  >
                    عرض تفاصيل The Hidden Market <i className="fa-solid fa-arrow-left text-xs" />
                  </Link>
                </div>
              </div>

              {/* Option 2 Box */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center text-lg font-bold">
                    <i className="fa-solid fa-map" />
                  </span>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-lg">اختر HR Roadmap إذا:</h4>
                    <span className="text-xs text-primary font-bold">للتأسيس والاحتراف الشامل</span>
                  </div>
                </div>
                <ul className="space-y-2.5 text-xs md:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-circle-check text-primary mt-1 shrink-0 text-xs" />
                    <span>تريد تغيير مجالك (Career Shift) ودخول الموارد البشرية بأساس عملي قوي.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-circle-check text-primary mt-1 shrink-0 text-xs" />
                    <span>أنت أخصائي HR حالي وتريد الترقية إلى مستوى الإدارة والإشراف.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-circle-check text-primary mt-1 shrink-0 text-xs" />
                    <span>تريد إتقان قانون العمل، التأمينات، التوظيف، وهيكلة الرواتب والـ KPIs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-circle-check text-primary mt-1 shrink-0 text-xs" />
                    <span>تحتاج نماذج وقوالب عمل جاهزة وتطبيقات بالذكاء الاصطناعي معتمدة.</span>
                  </li>
                </ul>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <Link 
                    to="/hr-roadmap"
                    className="text-primary font-bold text-xs md:text-sm hover:underline inline-flex items-center gap-1.5"
                  >
                    عرض تفاصيل HR Roadmap <i className="fa-solid fa-arrow-left text-xs" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Instructor Authority Card */}
        <section className="py-10 px-4 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 via-brand-dark to-primary text-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden shrink-0 border-2 border-white/20 shadow-2xl bg-white/10">
                <img 
                  src="/images/Mr Ahmed Hero.webp" 
                  alt="أحمد ناجي الدخميسي" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = '/images/Mr Ahmed Hero.png' }}
                />
              </div>

              <div className="flex-1 text-center md:text-right">
                <span className="inline-block bg-white/10 text-amber-300 text-xs font-bold px-3 py-1 rounded-full mb-3 border border-white/10">
                  مؤسس الأكاديمية والمحاضر الرئيسي
                </span>
                <h3 className="rubik font-black text-2xl md:text-3xl mb-2">
                  أحمد ناجي الدخميسي
                </h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6 font-medium">
                  استشاري ومحاضر الموارد البشرية، بخبرة تتجاوز 14 عاماً في كبرى الشركات والمؤسسات. مؤسس مجتمع أتش أرجية مصر الذي يضم عشرات الآلاف من المتخصصين، ودرّب أكثر من 50,000 مهني وقيادي في الوطن العربي.
                </p>

                <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-5 text-center">
                  <div>
                    <div className="font-black text-xl md:text-2xl text-amber-400">+14</div>
                    <div className="text-white/60 text-xs">عاماً من الخبرة</div>
                  </div>
                  <div>
                    <div className="font-black text-xl md:text-2xl text-amber-400">+5K</div>
                    <div className="text-white/60 text-xs">متدرب ومستفيد</div>
                  </div>
                  <div>
                    <div className="font-black text-xl md:text-2xl text-amber-400">+100</div>
                    <div className="text-white/60 text-xs">استشارة مؤسسية</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-12 px-4 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="rubik font-extrabold text-2xl md:text-3xl text-slate-900 mb-2">
              الأسئلة الشائعة
            </h3>
            <p className="text-slate-500 text-sm md:text-base">
              إجابات لأهم الأسئلة التي قد تدور بذهنك قبل الالتحاق
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-right font-extrabold text-slate-900 flex items-center justify-between gap-4 text-sm md:text-base hover:text-primary transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <i className={`fa-solid fa-chevron-down text-xs text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 text-slate-600 text-xs md:text-sm leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* Instant WhatsApp Advisor Banner */}
        <section className="py-12 px-4 max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200/90 shadow-xl shadow-slate-200/50 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-emerald-200 transition-colors">
            <div className="text-center md:text-right">
              <span className="inline-flex items-center gap-1.5 text-emerald-600 font-bold text-xs mb-2">
                <i className="fa-solid fa-comments"></i> استشارة مجانية وسريعة
              </span>
              <h3 className="rubik font-black text-xl md:text-2xl text-slate-900 mb-2">
                لسه محتار ومش متأكد من المسار الأنسب ليك؟
              </h3>
              <p className="text-slate-500 text-sm md:text-base max-w-lg">
                تواصل معنا مباشرة عبر واتساب وسيقوم أحد مستشارينا المهنيين بمراجعة خبرتك وتوجيهك للمسار الأنسب مجاناً.
              </p>
            </div>

            <a
              href="https://wa.me/201097828846"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-extrabold px-8 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-[#25D366]/30 text-base"
            >
              <i className="fa-brands fa-whatsapp text-2xl" />
              <span>تحدث مع مستشارنا الآن</span>
            </a>
          </div>
        </section>

      </div>
    </>
  )
}

export default Home
  