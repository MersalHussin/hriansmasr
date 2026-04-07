import { useEffect, useRef } from "react"
import SEO from "../components/SEO"
// import Feedback from "../components/Feedback"
import ReelsFeedback from "../components/ReelsFeedback"
import { t } from "i18next"

const courseStages = [
  {
    title: "المرحلة الأولى:",
    subtitle: 'مرحلة "الصدمة وتفكيك القواعد القديمة"',
    icon: "fa-solid fa-person-circle-exclamation",
    points: [
      { highlight: "عقيدة السوق الخفي:", text: 'ليه 80% من الوظائف والصفقات "مخفية"؟ وإزاي الكبار بيخلصوا شغلهم في الضل (The Insider Games).' },
      { highlight: "فخ الموظف المثالي:", text: 'ليه "شطارتك" الفنية هي اللي حابساك في مكانك؟ وإزاي تتحول من "منفذ" لـ "سلطة استشارية".' },
      { highlight: "أخطاء الكبار:", text: 'تشريح واقعي لغلطات المديرين اللي بتخليهم "مستباحين مهنياً".' }
    ]
  },
  {
    title: "المرحلة الثانية:",
    subtitle: 'مرحلة "بناء الهوية والهيبة الرقمية"',
    icon: "fa-solid fa-fingerprint",
    points: [
      { highlight: "الهوية البصرية (Visual Identity):", text: 'إزاي تبني براند لنفسك "يخض" اللي يشوفه قبل ما يقابلك. (استخدام الـ AI في تصميم الهوية والصور الاحترافية).' },
      { highlight: "المقر الرقمي (Digital Headquarters):", text: 'بناء موقعك الشخصي بالـ AI في دقائق، عشان تكون "كيان" مش مجرد "بروفايل".' },
      { highlight: "نفوذ لينكد إن (LinkedIn Authority):", text: 'تحويل البروفايل من "سي في" لـ "منصة نفوذ" تجذب صناع القرار (The Lead Magnet Profile).' }
    ]
  },
  {
    title: "المرحلة الثالثة:",
    subtitle: 'مرحلة "صناعة المحتوى والمغناطيس الرقمي"',
    icon: "fa-solid fa-magnet",
    points: [
      { highlight: "هندسة المحتوى (Content Engineering):", text: 'إزاي تكتب محتوى يخلي العميل أو الـ CEO يحس إنك "الدواء" لمشكلته.' },
      { highlight: "النمو المتسارع (Growth Hacking):", text: 'استراتيجيات الظهور والانتشار في دوائر صناع القرار فقط (Quality over Quantity).' },
      { highlight: "الـ AI كمساعد طيار:", text: 'إزاي تستخدم الذكاء الاصطناعي في إنتاج محتوى يومي بضغطة زر وبنفس "روحك" وخبرتك.' }
    ]
  },
  {
    title: "المرحلة الرابعة:",
    subtitle: 'مرحلة "تسييل الخبرة (الكاش)"',
    icon: "fa-solid fa-money-bill-trend-up",
    points: [
      { highlight: "هندسة الاستشارة (The Consultation Blueprint):", text: 'إزاي تحول خبرتك لـ "منتج استشاري" (Consulting Package).' },
      { highlight: "تسعير الهيبة (Premium Pricing):", text: 'إزاي تقيم استشارتك، وإزاي ترفض "عزومة القهوة" وتبيع "روشتة الملايين".' },
      { highlight: "إغلاق الصفقات (The Close):", text: 'فن تقديم العرض المالي (Proposal) للشركات الكبرى وإقناعهم إنك "الاستثمار" الأنجح.' }
    ]
  }
]

const FORM_LINK = "https://docs.google.com/forms/d/1XBIyFfwF98HRQexWtOojaZNTxd5RDwuqP63GetjF-N0/viewform?chromeless=1&edit_requested=true";

const outcomes = [
  { text: "توصل لوظائف مش بتتعلن للعامة", icon: "fa-solid fa-briefcase" },
  { text: "تبني شبكة علاقات مهنية قوية", icon: "fa-solid fa-users" },
  { text: "تحوّل LinkedIn لمصدر فرص حقيقي", icon: "fa-brands fa-linkedin-in" },
  { text: "تعرف تتواصل مع decision makers", icon: "fa-solid fa-handshake" },
  { text: "تبني Personal Brand مميزة", icon: "fa-solid fa-star" },
  { text: "تحصل على عروض وظيفية بدون تقديم", icon: "fa-solid fa-envelope-open-text" },
]



const features = [
  {
    icon: "fa-solid fa-briefcase",
    title: "محتوى حصري للمحترفين",
    desc: "تدريب عملي 100% مصمم خصيصاً لأصحاب الخبرات والمناصب لتجاوز الطرق التقليدية في التوظيف، والدخول مباشرة في دائرة صناع القرار."
  },
  {
    icon: "fa-solid fa-user-secret",
    title: "اختراق السوق الخفي",
    desc: "تعلم استراتيجيات الوصول للوظائف اللي مبتنزلش في إعلانات، وإزاي تخلي الشركات هي اللي تتفاوض معاك مش العكس."
  },
  {
    icon: "fa-solid fa-wand-magic-sparkles",
    title: "مساعد الـ AI الشخصي",
    desc: "هتتعلم توظف الذكاء الاصطناعي بشكل احترافي عشان يبنيلك بروفايل قوي ومحتوى يومي بيعكس خبرتك في دقائق."
  },
  {
    icon: "fa-solid fa-file-signature",
    title: "قوالب (Templates) ونماذج جاهزة",
    desc: "مش هتبدأ من الصفر. هتاخد Scripts جاهزة للتواصل المباشر مع المديرين التنفيذيين والـ Headhunters بطريقة تضمن الرد."
  },
  {
    icon: "fa-solid fa-handshake-angle",
    title: "توجيه وتطبيق مباشر",
    desc: "بتمشي خطوة بخطوة وبتطبق على أرض الواقع عشان تضمن أفضل النتايج لبروفايلك ولشبكة علاقاتك في أسرع وقت."
  },
  {
    icon: "fa-solid fa-money-bill-trend-up",
    title: "استراتيجيات التسعير والتفاوض",
    desc: "إزاي تسعّر خبرتك صح، وتسوق لنفسك كـ (استشاري) مش مجرد موظف، وتقفل صفقاتك التفاوضية بقوة وبثقة."
  }
]



function HiddenMarketPage() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    observerRef.current = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("show")),
      { threshold: 0.1 }
    )
    document.querySelectorAll(".animate-on-scroll").forEach(el => observerRef.current?.observe(el))
    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <>
      <SEO
        title="The Hidden Market Masterclass | HRians Egypt"
        description="اكتشف السوق الخفي للوظائف وتعلم كيف توصل للفرص اللي مش بتتعلن مع أحمد ناجي الدخميسي"
        keywords="hidden market, وظائف, linkedin, personal brand, HR, موارد بشرية"
      />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden min-h-[calc(100vh-90px)] flex items-center bg-[linear-gradient(135deg,var(--color-brand-dark)_0%,var(--color-brand-light)_100%)] pt-[90px]">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 bg-[url('/images/Hero-Background.jpg')] bg-cover bg-center opacity-5 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,var(--color-brand-dark)_100%)] opacity-80" />
        
        {/* Glow Spheres */}
        <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-yellow/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/30 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none" />

        <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center gap-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* TEXT COLUMN */}
            <div className="text-center lg:text-right flex flex-col items-center lg:items-start w-full">
              
              {/* Executive Badge */}
              <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-full mb-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] transform transition-transform hover:scale-105">
                <span className="flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-yellow opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-v2"></span>
                </span>
                <span className="text-white/90 font-bold text-sm tracking-wide">البرنامج التنفيذي الحصري للمحترفين</span>
              </div>

              {/* Logo */}
              <img 
                src="/Logo_Hidden.svg" 
                alt="The Hidden Market Masterclass Logo" 
                className="w-full max-w-[400px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] mb-6" 
              />
              
              {/* Subtitle */}
              <p className="text-white/80 text-xl md:text-3xl font-extrabold text-yellow-v2 mb-4 leading-tight">
               من التنظير.. إلى غرفة العمليات
              </p>
              
              {/* Refined Shorter Copy */}
              <p className="text-white/80 text-md  leading-relaxed mb-8 max-w-lg font-medium">
              اخترق "السوق الخفي" للوظائف، صِد أفضل الفرص قبل الإعلان عنها، واجبر صناع القرار على التفاوض معك بأساليب وتطبيقات عملية (100%).
              </p>

              {/* Core Pillars - Condensed */}
              <div className="grid grid-cols-2 gap-3 mb-10 w-full max-w-lg">
                {[
                  { icon: "fa-solid fa-map-location-dot", text: "خريطة النفوذ والوصول" },
                  { icon: "fa-solid fa-robot", text: "AI Scripting" },
                  { icon: "fa-solid fa-briefcase", text: "محاكاة التفاوض" },
                  { icon: "fa-solid fa-id-card", text: "الهيبة الرقمية" }
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-3 hover:bg-white/10 hover:border-yellow/20 transition-all duration-300 shadow-lg">
                    <i className={`${item.icon} text-yellow-v2 mt-0.5 text-xl drop-shadow-md`} />
                    <span className="text-white/90 text-sm font-bold tracking-wide leading-tight">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg">
                <a
                  href={FORM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flexitems-center justify-center bg-linear-to-r from-yellow to-yellow-v2 text-brand-dark font-extrabold text-lg px-8 py-3 rounded-xl overflow-hidden shadow-[0_15px_30px_-10px_rgba(239,138,27,0.5)] transition-all duration-300 hover:scale-[1.02] flex-1 text-center flex"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  <span className="relative flex items-center justify-center gap-3">
                   سجل دلوقتي <i className="fa-solid fa-file-signature text-xl" />
                  </span>
                </a>
                <button
                  onClick={() => document.getElementById("modules")?.scrollIntoView({ behavior: "smooth" })}
                  className="group flex flex-1 items-center justify-center border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold text-lg px-8 py-3 rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                >
                    المحتوى  <i className="fa-solid fa-arrow-down mr-3 text-sm group-hover:translate-y-1 transition-transform" />
                </button>
              </div>
              
            </div>

            {/* IMAGE COLUMN */}
            <div className="hidden lg:flex w-full relative h-[500px] items-center justify-center">
              <div className="absolute -inset-4 bg-linear-to-br from-brand-light to-[#0c224a] rounded-[2.5rem] transform rotate-3 scale-105 opacity-40 blur-2xl pointer-events-none"></div>
              <div className="absolute inset-0 border-4 border-yellow-v2/30 rounded-[2.5rem] transform -rotate-3 scale-[1.02] pointer-events-none transition-transform hover:rotate-0 hover:scale-100 duration-500"></div>
              
              <div className="hero-rec relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-white/10 group cursor-pointer">
                <img 
                  src="/images/The-Hidden/Hero.png" 
                  alt="The Hidden Market Training" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-6 right-6 left-6 bg-position-[calc(var(--color-brand-dark)/0.85)] backdrop-blur-md border border-white/10 p-4 rounded-xl transform translate-y-2 group-hover:translate-y-0 opacity-90 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow rounded-xl flex items-center justify-center shrink-0">
                      <i className="fa-solid fa-bullseye text-2xl text-brand-dark"></i>
                    </div>
                    <div>
                      <strong className="block text-white text-lg font-black mb-0.5">أحمد ناجي الدخميسي</strong>
                      <span className="block text-white/70 text-sm font-medium">مستشار موارد بشرية وتنمية مهارات بشرية بخبرة ١٤ عام</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== About Ahmed Nagy ===== */}
      <section className="about-founder py-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/Hero-Background.jpg')] bg-cover bg-center opacity-[0.03] pointer-events-none grayscale" />
        <h1 className="title text-[var(--color-brand-dark)] relative z-10">{t('founderPageTitle')}</h1>
        <div className="container max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row justify-evenly items-center gap-8 relative z-10">
          <div className="max-w-[600px] w-full">
            <h1 className="text-2xl md:text-3xl font-black text-[var(--color-brand-dark)]">{t('founderName')}</h1>
            <p className="text-base md:text-lg lg:text-xl mt-4 font-bold text-slate-600 leading-relaxed">{t('founderBio')}</p>
            <div className="mt-8 flex justify-center md:justify-start">
              <a 
                href="https://hriansmasr.com/founder" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 bg-[var(--color-brand-dark)] hover:bg-[var(--color-brand-light)] text-white font-bold py-3 px-8 rounded-full transition-all hover:-translate-y-1 shadow-lg"
              >
                معلومات أكتر عن المحاضر <i className="fa-solid fa-arrow-left text-sm" />
              </a>
            </div>
          </div>
          <div className="image w-full md:w-auto relative">
            <div className="absolute -inset-4 bg-[var(--color-brand-dark)]/10 rounded-4xl rounded-br-sm blur-xl z-0" />
            <img className="relative z-10 rounded-4xl w-full md:w-[600px] rounded-br-sm border-white border-4 shadow-2xl" src="/images/TV/3.webp" alt="صورة للمؤسس في الراديو 90:90" />
          </div>
        </div>
      </section>



      {/* ===== PROBLEM ===== */}
      <section id="problem" className="py-24 bg-[linear-gradient(135deg,var(--color-brand-light)_0%,var(--color-brand-dark)_100%)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/Hero-Background.jpg')] bg-cover bg-center opacity-5 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <h2 className="title text-white animate-on-scroll fade-in-up drop-shadow-lg">هل بتعاني من إنك</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
            {[
              "خبراتك ومؤهلاتك أكبر بكتير من الوظائف اللي بتتعرض بشكل تقليدي",
              "بتحس إن الوظائف المعلنة مش كافية",
              "مش عارف تبني علاقات مهنية صح",
              "LinkedIn بروفايلك مش بيجيب نتيجة",
              "بتحس إن في ناس بتاخد فرص أحسن منك",
              "مش عارف توصل لـ decision makers",
            ].map((p, i) => (
              <div
                key={i}
                className="animate-on-scroll fade-in-up flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 text-right transition-transform hover:-translate-y-1 hover:bg-white/10"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                  <span className="text-red-400 text-xl">✗</span>
                </div>
                <span className="text-white/90 font-medium text-lg">{p}</span>
              </div>
            ))}
          </div>
          <div className="mt-16 animate-on-scroll fade-in-up">
            <div className="inline-block bg-gradient-to-r from-yellow/20 via-yellow-v2/20 to-yellow/20 p-[1px] rounded-2xl">
              <div className="bg-[var(--color-brand-dark)] backdrop-blur-xl rounded-2xl px-8 py-5">
                <p className="text-yellow-v2 font-extrabold text-2xl md:text-3xl">
                  الكورس ده هيغير طريقة تفكيرك في البحث عن الشغل 💡
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section id="features" className="py-24 bg-slate-50 relative overflow-hidden text-right" dir="rtl">
        <div className="absolute inset-0 bg-[url('/images/Hero-Background.jpg')] bg-cover bg-center opacity-[0.03] pointer-events-none grayscale" />
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-yellow/10 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16 animate-on-scroll fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-brand-dark)]/20 bg-[var(--color-brand-dark)]/5 px-4 py-2 text-sm font-bold text-[var(--color-brand-dark)] mb-4">
              <i className="fa-solid fa-star text-yellow-v2"></i> القيم المضافة
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[var(--color-brand-dark)] mb-4">
              ايه اللي بيميز <span className="text-primary">The Hidden Market</span>؟
            </h2>
            <div className="w-24 h-1.5 bg-[var(--color-brand-dark)] rounded-full mx-auto" />
            <p className="text-slate-600 max-w-2xl mx-auto text-lg mt-6 font-bold">
              الأسلوب والأدوات اللي هتغير مفهومك عن البحث عن فرص العمل، من الانتظار السلبي إلى الاستهداف المباشر لصناع القرار.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div 
                key={i}
                className="animate-on-scroll fade-in-up group flex flex-col bg-white border border-slate-200 p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:border-[var(--color-brand-dark)]/30 hover:shadow-[0_20px_40px_-20px_rgba(10,37,82,0.15)] relative overflow-hidden"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-slate-100 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 shadow-sm group-hover:bg-[var(--color-brand-dark)] group-hover:border-[var(--color-brand-dark)] transition-all duration-300">
                  <i className={`${feature.icon} text-2xl text-[var(--color-brand-dark)] group-hover:text-yellow-v2 transition-colors duration-300`} />
                </div>
                
                <h3 className="text-[var(--color-brand-dark)] font-extrabold text-xl mb-3 relative z-10">
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 text-base leading-relaxed font-bold relative z-10">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MODULES (TIMELINE) ===== */}
      <section id="modules" className="py-24 bg-[linear-gradient(135deg,#1C54B3_0%,var(--color-brand-light)_45%,var(--color-brand-dark)_100%)] relative overflow-hidden text-right" dir="rtl">
        {/* Background Details */}
        <div className="absolute inset-0 bg-[url('/images/Hero-Background.jpg')] bg-cover bg-center opacity-5 mix-blend-overlay pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-yellow/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 -left-32 w-80 h-80 bg-yellow-v2/10 rounded-full blur-[90px] pointer-events-none" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16 animate-on-scroll fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-yellow/20 bg-yellow/10 px-4 py-2 text-sm font-bold text-yellow mb-4">
              خطة الرحلة
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">مراحل الكورس</h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              برنامج متكامل ينقلك من التفكير التقليدي في الوظائف إلى بناء منظومة متكاملة تجذب الفرص وتصنع النفوذ
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto before:absolute before:inset-0 before:mr-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
            {courseStages.map((stage, i) => (
              <div
                key={i}
                className="animate-on-scroll fade-in-up relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-12"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Icon Marker */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-[var(--color-brand-dark)] bg-gradient-to-br from-yellow to-yellow-v2 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(239,138,27,0.5)] z-10 transition-transform duration-500 group-hover:scale-110 ml-0 md:ml-0 mr-[-0.3rem] md:mr-0">
                  <i className={`${stage.icon} text-xl`} />
                </div>
                
                {/* Card Container */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] relative z-10 flex flex-col bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8 transition-all duration-500 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(239,138,27,0.3)] hover:border-yellow/30">
                  
                  {/* Number Badge Background */}
                  <div className="absolute top-2 left-6 text-7xl font-black text-white/5 select-none pointer-events-none group-hover:text-yellow/5 transition-colors duration-500 z-0">
                    0{i + 1}
                  </div>
                  
                  {/* Card Header */}
                  <div className="relative z-10 mb-6 border-b border-white/10 pb-5">
                    <h3 className="font-extrabold text-white text-2xl md:text-3xl mb-2">{stage.title}</h3>
                    <div className="inline-block bg-white/10 text-yellow text-sm font-bold px-3 py-1 rounded-md">
                      {stage.subtitle}
                    </div>
                  </div>

                  {/* Card Content (Points) */}
                  <ul className="relative z-10 space-y-4">
                    {stage.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="mt-2 w-2 h-2 rounded-full bg-yellow shrink-0 shadow-[0_0_8px_rgba(239,138,27,0.8)]" />
                        <p className="text-white/80 leading-relaxed text-sm md:text-base font-medium">
                          <strong className="text-white ml-2 drop-shadow-sm">{point.highlight}</strong>
                          {point.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUTCOMES ===== */}
      <section id="outcomes" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/Hero-Background.jpg')] bg-cover bg-center opacity-[0.03] grayscale pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-[var(--color-brand-light)]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-brand-dark)]/20 bg-white px-5 py-2 text-sm font-bold text-[var(--color-brand-dark)] mb-4 shadow-sm animate-on-scroll fade-in-up">
              المخرجات
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[var(--color-brand-dark)] mb-6 animate-on-scroll fade-in-up">
              هتخرج من الكورس وعندك ايه؟
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg md:text-xl font-bold animate-on-scroll fade-in-up" style={{ animationDelay: "0.1s" }}>
              كل اللى هتحتاجه عشان تبدأ وتنجح وتطور مسارك المهنى فى مجال الموارد البشرية هتلاقيه مجهز ليك فى الكورس
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {outcomes.map((o, i) => (
              <div
                key={i}
                className="animate-on-scroll fade-in-up group bg-white border border-slate-200 rounded-[32px] p-6 md:p-8 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(10,37,82,0.1)] hover:-translate-y-2 hover:border-[var(--color-brand-light)]/30 transition-all duration-500 relative overflow-hidden flex items-center gap-6"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-l from-slate-50/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="absolute left-[-5%] top-[50%] -translate-y-1/2 text-[10rem] font-black text-slate-50 group-hover:text-[var(--color-brand-light)]/5 transition-colors duration-500 select-none z-0" style={{ fontFamily: 'Calistoga' }}>
                  {(i + 1).toString().padStart(2, '0')}
                </div>
                
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-[1.2rem] bg-gradient-to-br from-[var(--color-brand-dark)] to-[var(--color-brand-light)] text-yellow shadow-xl shadow-[var(--color-brand-dark)]/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 relative z-10">
                  <i className={`${o.icon} text-3xl md:text-4xl`} />
                </div>
                
                <h3 className="text-[var(--color-brand-dark)] font-black text-xl lg:text-2xl leading-relaxed relative z-10">
                  {o.text}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COURSE IMAGES ===== */}
      <section id="gallery" className="py-24 bg-[linear-gradient(135deg,#0e2e66_0%,var(--color-brand-dark)_100%)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/Hero-Background.jpg')] bg-cover bg-center opacity-5 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16 animate-on-scroll fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-yellow/20 bg-yellow/10 px-4 py-2 text-sm font-bold text-yellow mb-4">
              من داخل الكورس
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              صور من الورش العملية
            </h2>
          </div>
          
          {/* أسسنا شبكة Grid احترافية لعرض الصور بنمط ذكي (Bento Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
            
            {/* Wide 1 (تأخذ مساحة عمودين) */}
            <div className="animate-on-scroll fade-in-up group overflow-hidden rounded-3xl border border-white/10 shadow-2xl relative block md:col-span-2 md:row-span-1" style={{ animationDelay: '0.1s' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-dark)]/80 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300 z-10" />
              <img
                src="https://scontent.fcai19-11.fna.fbcdn.net/v/t39.30808-6/658585923_26428782573408490_2506700317568725263_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHdj8WuNmLtXOqrwUP8dnfwiVdjXk0v4rOJV2NeTS_isx8Fmq71s6v51L2XMQMGiVI2uSgBk2Md2Hoyfpdsaz0a&_nc_ohc=QXMWf55fDvAQ7kNvwEicTSs&_nc_oc=AdplGK8dZLrJDVzI8N7IAxkFYmH08S3lLlYoYCe6H24aXK_WjU_e2JYDu7rb3lregjs&_nc_zt=23&_nc_ht=scontent.fcai19-11.fna&_nc_gid=YrVPqg2c3QLRBBlGBsxa0w&_nc_ss=7a3a8&oh=00_Af2SOfvdl9yA57XFbsJTsSf_MBuPDwEkHRdm62zu39FxJw&oe=69D48A6B"
                alt="تدريب السوق الخفي"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 relative z-0"
                loading="lazy"
              />
            </div>

            {/* Vertical 1 (تأخذ ارتفاع صفين وعرض عمود واحد) */}
            <div className="animate-on-scroll fade-in-up group overflow-hidden rounded-3xl border border-white/10 shadow-2xl relative block md:col-span-1 md:row-span-2" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-dark)]/80 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300 z-10" />
              <img
                src="https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/660985895_26428772886742792_1263854306626122597_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEBUs6HOQIBp-p-eJjrMloJ4tukWvPzzG_i26Ra8_PMb8XuTU8LmVXsGc1rT2GDolQRVNTJYvPHoG85nTTwxT-j&_nc_ohc=3TJdxqfeIKAQ7kNvwESDx-b&_nc_oc=AdpC2yVq6raI1-9N8jTIhdBN4Vn8l9uZ2CbHER6nL50sRWMwcp7ZPFSWmxN1mSO1f0c&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=3BCrStEBF0Onl1tnI9_Rug&_nc_ss=7a3a8&oh=00_Af2vElXSxSDL0-06UbcOGVKH0s5CZqFNHHl3bo7iLipnsg&oe=69D49EEE"
                alt="تفاعل وتدريب عملي"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 relative z-0"
                loading="lazy"
              />
            </div>

            {/* Vertical 2 (تأخذ ارتفاع صفين وعرض عمود واحد) */}
            <div className="animate-on-scroll fade-in-up group overflow-hidden rounded-3xl border border-white/10 shadow-2xl relative block md:col-span-1 md:row-span-2" style={{ animationDelay: '0.3s' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-dark)]/80 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300 z-10" />
              <img
                src="https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/659801783_26428771773409570_3920793003010735135_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEiwL2ilrPQ124TsmoEHTaO3kBaIxt2-4zeQFojG3b7jDWzM71RR55W-dpEsn1mcd_pZET7EEo3_V5aI9Nk_V7h&_nc_ohc=KznaEZ_Ux4YQ7kNvwFsGT68&_nc_oc=AdrYsLz8RJFb3vZHjTdC3L5tDPDDWldBlYgclfs6h576Ktmfg2fXge-Hci2Ocr3u2kw&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=nNu6r_7Mlh-or470yrrmGA&_nc_ss=7a3a8&oh=00_Af3sURNUPQar8MS-hwtVf5820celf4a8CnnItsRHinAXSQ&oe=69D49823"
                alt="نقاشات الورشة"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 relative z-0"
                loading="lazy"
              />
            </div>

            {/* Wide 2 (تأخذ مساحة عمودين) */}
            <div className="animate-on-scroll fade-in-up group overflow-hidden rounded-3xl border border-white/10 shadow-2xl relative block md:col-span-2 md:row-span-1" style={{ animationDelay: '0.4s' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-dark)]/80 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300 z-10" />
              <img
                src="https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/657726655_26428782873408460_4552988750096273614_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGTQpbr1mHtl0_0o8_nvxCgwZBCaJVJb8TBkEJolUlvxIlGO_WWSGgQ-DqzjXBznijMlveh1WtHDb3KlsTHjzAq&_nc_ohc=G_qpB_lZRtwQ7kNvwEdVgrY&_nc_oc=AdpHFBUKhaC8k5H0ME-PJZZZyxR-Qj5JNiM2fHjlHKUUpFiL0UpARIIoWDDeDL__yGE&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=MtXMCCuC8M3Sfur7hg1vIA&_nc_ss=7a3a8&oh=00_Af30VW1dJurNuR2wX4Cxn3H33WLYnAjwCpq9-nkBhnYZww&oe=69D4B5FD"
                alt="صورة جماعية"
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 relative z-0"
                loading="lazy"
              />
            </div>

            {/* Wide 3 (تأخذ العرض بالكامل من الأسفل) */}
            <div className="animate-on-scroll fade-in-up group overflow-hidden rounded-3xl border border-white/10 shadow-2xl relative block md:col-span-4 md:row-span-1" style={{ animationDelay: '0.5s' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-dark)]/80 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300 z-10" />
              <img
                src="https://scontent.fcai19-11.fna.fbcdn.net/v/t39.30808-6/660106537_26428778646742216_5394434949459489937_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeECTjmwQ33_Z2SP4C_Us2gG9NpPDKaAGfD02k8MpoAZ8PJ2d3ZJDNuxUNz3-PGBZeyfu7aCENiKtxIMp8xLJ4HS&_nc_ohc=-3eAqDFpQ9oQ7kNvwFZoHH3&_nc_oc=AdrhAgfjmeLnoMJ5v0VAZt1oDYHxbR17Qy98hzKLYv4lcecy3MUy60zDSksnVrZfbyM&_nc_zt=23&_nc_ht=scontent.fcai19-11.fna&_nc_gid=TF9MQNIsRcz76Feu9BEmBg&_nc_ss=7a3a8&oh=00_Af3mvbQqPWlECWsAotXH69qOufcTyTZCxI3_Y2WJcST1zw&oe=69D4888A"
                alt="تطبيق عملي"
                className="w-full h-full object-cover object-[center_30%] group-hover:scale-110 transition-transform duration-700 relative z-0"
                loading="lazy"
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* ===== FEEDBACK ===== */}
      <div id="reels-feedback">
        <ReelsFeedback />
      </div>

      {/* ===== EXECUTIVE DETAILS ===== */}
      <section className="py-24 bg-slate-50 relative overflow-hidden" dir="rtl">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            
            {/* Why This Round is Different */}
            <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200 shadow-[0_20px_40px_-20px_rgba(10,37,82,0.08)]">
              <h3 className="text-2xl md:text-3xl font-black text-[var(--color-brand-dark)] mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-yellow/20 flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-star text-yellow-v2 text-xl"></i>
                </div>
                لماذا هذا الراوند مختلف؟
              </h3>
              <ul className="space-y-6 text-slate-700 font-bold">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-brand-light)]/10 flex items-center justify-center shrink-0 mt-1">
                    <i className="fa-solid fa-certificate text-[var(--color-brand-light)] text-sm"></i>
                  </div>
                  <p className="leading-relaxed"><strong className="text-[var(--color-brand-dark)] block text-lg mb-1 font-black">شهادة نجاح واقعية:</strong>النجاح لا يُحكى بل يُرى؛ مستوى الحضور القوي في الدفعة الأولى هو أكبر دليل على جودة المحتوى وقوة شبكة العلاقات (Networking) التي ستنضم إليها.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-brand-light)]/10 flex items-center justify-center shrink-0 mt-1">
                    <i className="fa-solid fa-crown text-[var(--color-brand-light)] text-sm"></i>
                  </div>
                  <p className="leading-relaxed"><strong className="text-[var(--color-brand-dark)] block text-lg mb-1 font-black">سقف التوقعات:</strong>بعد أن شرفنا في الدفعة السابقة القامة البيعية الأستاذ/ أحمد قطقطة كضيف شرف، نعدكم بمفاجأة في هذا الراوند ستكون هي "الضربة القاضية" في مسارك المهني.</p>
                </li>
              </ul>
            </div>

            {/* Attendance Conditions */}
            <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200 shadow-[0_20px_40px_-20px_rgba(10,37,82,0.08)]">
              <h3 className="text-2xl md:text-3xl font-black text-[var(--color-brand-dark)] mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-yellow/20 flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-user-shield text-yellow-v2 text-xl"></i>
                </div>
                شروط الحضور
              </h3>
              <p className="text-slate-600 mb-8 font-bold text-lg border-b border-slate-100 pb-4">الحضور مقتصر فقط على:</p>
              <ul className="space-y-4">
                {[
                  "أصحاب الشركات (Business Owners).",
                  "المديرين التنفيذيين (C-Level & Directors).",
                  "كبار المستشارين والخبراء (Senior Consultants)."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[var(--color-brand-dark)] to-[var(--color-brand-light)] flex items-center justify-center text-white shrink-0 shadow-md">
                      <i className="fa-solid fa-check text-sm"></i>
                    </div>
                    <span className="font-bold text-[var(--color-brand-dark)] text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="bg-[linear-gradient(135deg,var(--color-brand-dark)_0%,#0e2e66_100%)] rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-2xl text-white border-4 border-white">
              <div className="absolute top-0 left-0 w-64 h-64 bg-yellow/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-black mb-12 text-center flex items-center justify-center gap-4 drop-shadow-md">
                  التفاصيل التنفيذية
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div className="flex flex-col justify-center p-6 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                    <i className="fa-solid fa-location-dot text-yellow-v2 text-4xl mb-4 drop-shadow-md"></i>
                    <span className="text-white/60 text-sm mb-2 font-bold uppercase tracking-wider">المكان</span>
                    <strong className="text-xl">The GrEEK Campus</strong>
                    <span className="text-yellow text-sm mt-2 font-bold bg-yellow/10 py-1 px-3 rounded-full self-center">ومتاح أونلاين</span>
                  </div>
                  <div className="flex flex-col justify-center p-6 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                    <i className="fa-solid fa-calendar-days text-yellow-v2 text-4xl mb-4 drop-shadow-md"></i>
                    <span className="text-white/60 text-sm mb-2 font-bold uppercase tracking-wider">الموعد</span>
                    <strong className="text-xl mt-1">السبت</strong>
                    <strong className="text-2xl text-yellow mt-1 font-black">18-04-2026</strong>
                  </div>
                  <div className="flex flex-col justify-center p-6 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                    <i className="fa-solid fa-clock text-yellow-v2 text-4xl mb-4 drop-shadow-md"></i>
                    <span className="text-white/60 text-sm mb-2 font-bold uppercase tracking-wider">التوقيت</span>
                    <strong className="text-xl">من 2:00 ظهراً</strong>
                    <strong className="text-xl text-white/90">حتى 7:00 مساءً</strong>
                  </div>
                  <div className="flex flex-col justify-center p-6 bg-gradient-to-b from-yellow/20 to-yellow/5 border border-yellow/30 rounded-3xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-yellow/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <div className="relative z-10">
                      <i className="fa-solid fa-chair text-yellow text-4xl mb-3 animate-bounce drop-shadow-md"></i>
                      <span className="text-white/80 block text-sm mb-1 font-bold">العدد المتبقي</span>
                      <strong className="text-3xl font-black text-yellow block mb-1">3 مقاعد</strong>
                      <span className="text-white/50 text-xs font-medium">من أصل 15 متدرباً</span>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section id="cta" className="py-24 bg-[var(--color-brand-dark)] text-center relative overflow-hidden border-t-[8px] border-yellow-v2">
        <div className="absolute inset-0 bg-[url('/images/Hero-Background.jpg')] bg-cover bg-center opacity-[0.03] mix-blend-overlay pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-brand-light)]/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <div className="animate-on-scroll fade-in-up flex flex-col items-center p-8 md:p-12">
            
            <div className="mb-6 inline-flex flex-wrap items-center justify-center gap-2 bg-yellow-v2/10 border border-yellow-v2/20 text-yellow-v2 px-6 py-2.5 rounded-full font-bold text-base md:text-lg shadow-lg">
              <i className="fa-solid fa-hourglass-half" />
              <span>الدفعة القادمة: <span className="bg-yellow-v2 text-[var(--color-brand-dark)] px-2 rounded font-black mr-1">١٨ أبريل</span></span>
            </div>

            <h2 className="text-white font-black text-3xl  text-yellow-v2 lg:text-4xl mb-4 leading-tight drop-shadow-sm">
              يوم واحد تدريبي (٦ ساعات) هينقلك في حتة تانية!
            </h2>
            
            <p className="text-white/80 text-xl font-bold mb-4 leading-relaxed max-w-2xl">
              "الفرص لا تُمنح لمن يتمنى.. بل لمن يستعد ويخترق."
            </p>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-10 w-full max-w-md mx-auto backdrop-blur-sm">
              <span className="block text-white/70 text-sm font-bold mb-2">قيمة الاستثمار:</span>
              <strong className="text-4xl font-black text-yellow block mb-2">2500 ج.م</strong>
              <span className="text-white/80 text-sm font-medium block">شاملة الأدوات التقنية، قوالب الـ AI، وملفات التدريب الكاملة.</span>
            </div>
            
            <a
              href={FORM_LINK} target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center gap-4 bg-yellow-v2 text-[var(--color-brand-dark)] font-black text-2xl px-14 py-6 rounded-full transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_15px_30px_-10px_rgba(239,182,27,0.4)] hover:bg-yellow"><i className="fa-solid fa-file-signature text-3xl" />احجز مقعدك الآن<i className="fa-solid fa-arrow-left text-lg opacity-50 group-hover:-translate-x-3 transition-transform" /></a>
            
            <div className="flex items-center justify-center gap-3 mt-10 text-yellow text-base md:text-lg font-bold">
              <div className="w-3 h-3 rounded-full bg-yellow animate-pulse" />
              يسعدنا الرد على استفساراتك عبر واتساب في أي وقت
            </div>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default HiddenMarketPage
