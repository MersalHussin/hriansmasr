import { useEffect, useRef } from "react"
import SEO from "../components/SEO"
import Feedback from "../components/Feedback"
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

const outcomes = [
  "توصل لوظائف مش بتتعلن للعامة",
  "تبني شبكة علاقات مهنية قوية",
  "تحوّل LinkedIn لمصدر فرص حقيقي",
  "تعرف تتواصل مع decision makers",
  "تبني Personal Brand مميزة",
  "تحصل على عروض وظيفية بدون تقديم",
]

const stats = [
  { num: "+500", label: "خريج ناجح" },
  { num: "70%", label: "من الوظائف مخفية" },
  { num: "+8", label: "ساعات محتوى" },
  { num: "4.9★", label: "تقييم الكورس" },
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
      <section className="relative overflow-hidden min-h-[calc(100vh-90px)] flex items-center bg-[linear-gradient(135deg,#0A2552_0%,#12397A_100%)] pt-[90px]">
        <div className="absolute inset-0 bg-[url('/images/Hero-Background.jpg')] bg-cover bg-center opacity-5 mix-blend-overlay" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow/15 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-yellow-v2/15 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-1/3 w-56 h-56 rounded-full border border-white/10" />

        <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center gap-12 relative z-10">
          <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
            
            <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-sm px-5 py-2 rounded-full mb-8 shadow-xl shadow-black/10">
              🔥 البرنامج التدريبي الأكثر طلباً في مصر
            </span>

            <img 
              src="/Logo_Hidden.svg" 
              alt="The Hidden Market Masterclass Logo" 
              className="w-full max-w-[650px] md:max-w-[800px] object-contain drop-shadow-2xl mb-8 hover:scale-105 transition-transform duration-700" 
            />
            
            <p className="text-white/90 text-xl md:text-2xl leading-relaxed mb-10 max-w-3xl font-medium">
              اكتشف السوق الخفي للوظائف وتعلم كيف توصل للفرص اللي مش بتتعلن — وكن الخيار الأول لصناع القرار
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {["Mentorship مباشر", "Templates جاهزة", "استراتيجيات تطبيق فوري"].map((item) => (
                <span key={item} className="bg-yellow/20 border border-yellow/40 text-yellow-v2 px-5 py-2.5 rounded-full text-base font-bold backdrop-blur-sm">
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a
                href="https://wa.me/201097828846"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow hover:bg-yellow-v2 text-white font-extrabold text-xl px-12 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl shadow-yellow/30 flex items-center justify-center gap-2"
              >
                سجّل دلوقتي <i className="fa-brands fa-whatsapp text-2xl" />
              </a>
              <button
                onClick={() => document.getElementById("modules")?.scrollIntoView({ behavior: "smooth" })}
                className="border-2 border-white/30 bg-white/5 backdrop-blur-sm text-white font-bold text-xl px-12 py-4 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                اكتشف المحتوى ↓
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== About Ahmed Nagy ===== */}
      <section className="about-founder py-20 bg-[linear-gradient(135deg,#0A2552_0%,#12397A_100%)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/Hero-Background.jpg')] bg-cover bg-center opacity-5 mix-blend-overlay pointer-events-none" />
        <h1 className="title text-white relative z-10">{t('founderPageTitle')}</h1>
        <div className="container max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row justify-evenly items-center gap-8 relative z-10">
          <div className="max-w-[600px] w-full">
            <h1 className="text-2xl md:text-3xl font-extrabold text-yellow-v2">{t('founderName')}</h1>
            <p className="text-base md:text-lg lg:text-xl mt-4 font-semibold text-white/80 leading-relaxed">{t('founderBio')}</p>
          </div>
          <div className="image w-full md:w-auto relative">
            <div className="absolute -inset-4 bg-yellow/20 rounded-4xl rounded-br-sm blur-xl z-0" />
            <img className="relative z-10 rounded-4xl w-full md:w-[600px] rounded-br-sm border-yellow/50 border-4 shadow-2xl" src="/images/TV/3.webp" alt="صورة للمؤسس في الراديو 90:90" />
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section id="stats" className="bg-yellow py-10 relative z-20 shadow-xl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <div key={i} className="animate-on-scroll fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-white font-extrabold text-4xl md:text-5xl">{s.num}</div>
                <div className="text-white/90 font-semibold text-base mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROBLEM ===== */}
      <section id="problem" className="py-24 bg-[linear-gradient(135deg,#12397A_0%,#0A2552_100%)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/Hero-Background.jpg')] bg-cover bg-center opacity-5 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <h2 className="title text-white animate-on-scroll fade-in-up drop-shadow-lg">هل بتعاني من كده؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
            {[
              "بتبعت CV على طول ومش بتلاقي رد",
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
              <div className="bg-[#0A2552] backdrop-blur-xl rounded-2xl px-8 py-5">
                <p className="text-yellow-v2 font-extrabold text-2xl md:text-3xl">
                  الكورس ده هيغير طريقة تفكيرك في البحث عن الشغل 💡
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MODULES ===== */}
      <section id="modules" className="py-24 bg-[linear-gradient(135deg,#1C54B3_0%,#12397A_45%,#0A2552_100%)] relative overflow-hidden">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courseStages.map((stage, i) => (
              <div
                key={i}
                className="animate-on-scroll fade-in-up group relative"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Number Badge Background */}
                <div className="absolute -top-6 -right-6 text-9xl font-black text-white/5 select-none pointer-events-none group-hover:text-yellow/5 transition-colors duration-500 z-0">
                  0{i + 1}
                </div>
                
                {/* Card Container */}
                <div className="relative z-10 h-full flex flex-col bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(239,138,27,0.3)] hover:border-yellow/30">
                  
                  {/* Card Header */}
                  <div className="flex items-start gap-5 mb-8 border-b border-white/10 pb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow to-yellow-v2 flex items-center justify-center shrink-0 shadow-lg shadow-yellow/20 group-hover:scale-110 transition-transform duration-500">
                      <i className={`${stage.icon} text-white text-3xl`} />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-white text-2xl md:text-3xl mb-2">{stage.title}</h3>
                      <div className="inline-block bg-white/10 text-yellow text-sm font-bold px-3 py-1 rounded-md">
                        {stage.subtitle}
                      </div>
                    </div>
                  </div>

                  {/* Card Content (Points) */}
                  <ul className="flex-1 space-y-4">
                    {stage.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="mt-1.5 w-2 h-2 rounded-full bg-yellow shrink-0 shadow-[0_0_8px_rgba(239,138,27,0.8)]" />
                        <p className="text-white/80 leading-relaxed text-sm md:text-base">
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
      <section id="outcomes" className="py-24 bg-[linear-gradient(135deg,#0A2552_0%,#194B9E_100%)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/Hero-Background.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-yellow/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 animate-on-scroll fade-in-up">
              هتخرج من الكورس وعندك
            </h2>
            <div className="w-24 h-1.5 bg-yellow rounded-full mx-auto animate-on-scroll fade-in-up" style={{ animationDelay: "0.1s" }} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outcomes.map((o, i) => (
              <div
                key={i}
                className="animate-on-scroll fade-in-up group relative overflow-hidden"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-start gap-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full transition-transform hover:-translate-y-1 hover:border-yellow/30">
                  <div className="w-10 h-10 rounded-xl bg-yellow text-white flex items-center justify-center shrink-0 font-bold text-lg shadow-lg shadow-yellow/20 group-hover:scale-110 transition-transform duration-300">
                    <i className="fa-solid fa-check" />
                  </div>
                  <span className="text-white/90 font-medium text-lg leading-snug mt-1">{o}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COURSE IMAGES ===== */}
      <section id="gallery" className="py-24 bg-[linear-gradient(135deg,#0e2e66_0%,#0A2552_100%)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/Hero-Background.jpg')] bg-cover bg-center opacity-5 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <h2 className="title text-yellow-v2 animate-on-scroll fade-in-up drop-shadow-xl">من داخل الكورس</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <div key={n} className="animate-on-scroll fade-in-up group overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 shadow-2xl relative block">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2552] to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-10" />
                <img
                  src={`/images/Course/${n}.webp`}
                  alt={`محتوى الكورس ${n}`}
                  className="w-full h-32 md:h-48 object-cover group-hover:scale-110 transition-transform duration-700 relative z-0"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEEDBACK ===== */}
      <div id="feedback">
        <Feedback />
      </div>

      <div id="reels-feedback">
        <ReelsFeedback />
      </div>

      {/* ===== CTA ===== */}
      <section id="cta" className="py-24 bg-[linear-gradient(135deg,#12397A_0%,#0A2552_100%)] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/Hero-Background.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <div className="animate-on-scroll fade-in-up bg-white/5 backdrop-blur-2xl border border-white/10 p-10 md:p-16 rounded-[40px] shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)]">
            <h2 className="text-white font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              هل أنت مستعد <span className="text-yellow-v2">لتغيير قواعد اللعبة؟</span>
            </h2>
            <p className="text-white/80 text-lg md:text-xl font-medium mb-12 leading-relaxed max-w-2xl mx-auto">
              انضم لأكتر من 500 خريج وابدأ رحلتك في اكتشاف السوق الخفي.. لاستقطاب أفضل الفرص قبل الإعلان عنها رسمياً!
            </p>
            
            <div className="flex flex-col items-center justify-center gap-6">
              <a
                href="https://wa.me/201097828846"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-yellow to-yellow-v2 text-white font-extrabold text-xl md:text-2xl px-12 py-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_-10px_rgba(239,138,27,0.5)]"
              >
                تواصل معنا للحجز <i className="fa-brands fa-whatsapp text-3xl" />
              </a>
              <span className="flex items-center justify-center gap-2 text-white/60 text-sm font-semibold mt-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
                فريق الدعم متاح للرد فوراً على الواتساب
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HiddenMarketPage
