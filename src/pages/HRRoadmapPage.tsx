import { useEffect, useRef } from "react"
import SEO from "../components/SEO"
import ReelsFeedback from "../components/ReelsFeedback"
import { t } from "i18next"
import Gallery from "../components/Gallery";
import { Link } from "react-router-dom";

const FORM_LINK = "/hr-roadmap/book";

const programPillars = [
  {
    title: "التوظيف والمواهب",
    desc: "كيفية التخطيط، الاستقطاب،، وعمل مقابلات مبنية على الجدارات (CBI) لاختيار أفضل الكفاءات.",
    icon: "fa-solid fa-users-viewfinder",
    span: "col-span-1 md:col-span-2 text-white bg-gradient-to-br from-[#1c54b3] to-[#11367a]"
  },
  {
    title: "هيكلة الأجور",
    desc: "تصميم أنظمة تعويضات ومزايا (C&B) عادلة ومحفزة تضمن ولاء الفريق.",
    icon: "fa-solid fa-money-check-dollar",
    span: "col-span-1 border border-[#1c54b3]/20 bg-white text-[#1c54b3]"
  },
  {
    title: "إدارة الأداء",
    desc: "وضع مؤشرات أداء (KPIs) دقيقة، وإدارة التقييمات، وربطها بالهدف العام.",
    icon: "fa-solid fa-arrow-up-right-dots",
    span: "col-span-1 border border-[#1c54b3]/20 bg-white text-[#1c54b3]"
  },
  {
    title: "قانون العمل",
    desc: "التطبيق العملي للتشريعات وتجنب الثغرات وغرامات مكتب العمل بمهارة تامة.",
    icon: "fa-solid fa-scale-balanced",
    span: "col-span-1 md:col-span-2 text-white bg-[#ee8a1c]"
  },
  {
    title: "التطوير التنظيمي (OD)",
    desc: "هندسة الإدارات والهياكل التنظيمية لدعم نمو الأعمال وتطوير الموظفين.",
    icon: "fa-solid fa-sitemap",
    span: "col-span-1 border border-[#1c54b3]/20 bg-white text-[#1c54b3]"
  },
  {
    title: "التحليل الاستراتيجي",
    desc: "فهم لغة الأرقام وتحليل البيانات (HR Analytics) للمشاركة في صنع قرارات الإدارة العليا.",
    icon: "fa-solid fa-chart-pie",
    span: "col-span-1 md:col-span-2 border border-[#1c54b3]/20 bg-slate-50 text-[#1c54b3]"
  }
]

const targetAudience = [
  { title: "المبتدئون وحديثي التخرج", desc: "لتأسيس علمي وعملي قوي يجعلك قادراً على دخول سوق العمل بخطى ثابتة واحترافية.", icon: "fa-solid fa-seedling" },
  { title: "أخصائيو الموارد البشرية", desc: "كل من يطمح للترقية والانتقال من دور المنفذ (Operational) للإدارة الشاملة.", icon: "fa-solid fa-user-tie" },
  { title: "مديرو الموارد البشرية", desc: "لتحديث استراتيجياتهم وتطوير قدراتهم في اتخاذ قرارات مبنية على تحليلات دقيقة.", icon: "fa-solid fa-briefcase" },
  { title: "أصحاب الأعمال", desc: "لتمكينهم من بناء هياكل قوية وفرق عمل تدعم رؤية شركاتهم من اليوم الأول.", icon: "fa-solid fa-building" }
]

const feedbackVideos = [
  "https://www.youtube.com/watch?v=dcPAnppg1Ns&list=PLYDxevzgna4TGPzVbnFuHl2NjQdGHTa0R",
  "https://www.youtube.com/watch?v=eKyRZeD5MTE&list=PLYDxevzgna4TGPzVbnFuHl2NjQdGHTa0R&index=8",
  "https://www.youtube.com/watch?v=uM7fzJ0l-JU&list=PLYDxevzgna4TGPzVbnFuHl2NjQdGHTa0R&index=9",
  "https://www.youtube.com/watch?v=utvxmFBM7IA&list=PLYDxevzgna4TGPzVbnFuHl2NjQdGHTa0R&index=7",
  "https://www.youtube.com/watch?v=ghk6SDd1xvA&list=PLYDxevzgna4TGPzVbnFuHl2NjQdGHTa0R&index=18",
  "https://www.youtube.com/watch?v=_hDJvz1juvA&list=PLYDxevzgna4TGPzVbnFuHl2NjQdGHTa0R&index=19",
  "https://www.youtube.com/watch?v=6jv6i0G9_ys&list=PLYDxevzgna4TGPzVbnFuHl2NjQdGHTa0R&index=24",
  "https://www.youtube.com/watch?v=l0Rm2FazTfs&list=PLYDxevzgna4TGPzVbnFuHl2NjQdGHTa0R&index=27",
  "https://www.youtube.com/watch?v=pRAyRRGi8pI&list=PLYDxevzgna4TGPzVbnFuHl2NjQdGHTa0R&index=28"
]

function HRRoadmapPage() {
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
        title="HR Executive Roadmap"
        description="ارتقِ من المهام الروتينية إلى القيادة الاستراتيجية. احترف كافة أقسام إدارة الموارد البشرية بأسلوب عملي تطبيقي."
        keywords="HR roadmap, موارد بشرية, كورس HR, تدريب HR, إدارة موارد بشرية, Business Partner"
      />

      {/* ===== HERO (Centered & Modern) ===== */}
      <section className="relative pt-[120px] pb-24 lg:pt-40 lg:pb-32 bg-[#1c54b3] overflow-hidden text-center rounded-b-[3rem] lg:rounded-b-[5rem]">
        <div className="absolute inset-0 bg-[url('/images/Hero-Background.jpg')] bg-cover bg-center opacity-5 mix-blend-overlay" />
        <div className="absolute inset-0 bg-linear-to-b from-[#1c54b3]/40 to-transparent opacity-80" />
        
        {/* Colorful Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1c54b3] rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-50" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#ee8a1c] rounded-full blur-[100px] pointer-events-none mix-blend-screen opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#ee8a1c]/10 border border-[#ee8a1c]/20 text-[#ee8a1c] px-4 py-2 rounded-full mb-8 font-bold text-sm shadow-lg animate-on-scroll fade-in-up">
            <span className="w-2.5 h-2.5 bg-[#ee8a1c] rounded-full animate-pulse" />
            من الدخول للمجال وحتى المناصب القيادية في الـ HR
          </div>
          
          <h1 className="text-white text-5xl md:text-7xl font-black max-w-4xl mx-auto leading-tight mb-6 animate-on-scroll fade-in-up" style={{ animationDelay: '0.1s' }}>
            بداية صحيحة وتطور سريع نحو <span className="text-transparent bg-clip-text bg-linear-to-r from-[#ee8a1c] to-[#f9a445]">احتراف المهنة</span>
          </h1>

          <p className="text-white/80 text-lg md:text-2xl max-w-3xl mx-auto mb-12 font-medium leading-relaxed animate-on-scroll fade-in-up" style={{ animationDelay: '0.2s' }}>
            سواء كنت تخطو خطواتك الأولى، أو تسعى للتطور لمرحلة مدير، كورس <strong className="text-white font-black">HR Executive Roadmap</strong> دليلك العملي لفهم وتطبيق جميع المهام باحتراف.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-on-scroll fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Link
              to={FORM_LINK}
              className="bg-[#ee8a1c] hover:bg-[#e67e22] text-white font-black text-xl px-10 py-4 rounded-2xl transition-all hover:-translate-y-1 shadow-[0_15px_30px_-10px_rgba(238,138,28,0.5)] flex items-center justify-center gap-3"
            >
              ابدأ رحلتك الآن <i className="fa-solid fa-rocket" />
            </Link>
            <button
              onClick={() => document.getElementById("pillars")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xl px-10 py-4 rounded-2xl transition-all flex items-center justify-center gap-3"
            >
              اكتشف المحاور <i className="fa-solid fa-arrow-down" />
            </button>
          </div>
        </div>
      </section>

      

      {/* ===== INFO BANNER (Floating below Hero) ===== */}
      <section className="relative z-20 -mt-16 container mx-auto px-4 max-w-5xl">
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center animate-on-scroll fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-[#1c54b3]/10 flex items-center justify-center text-[#1c54b3] text-xl mb-2"><i className="fa-solid fa-layer-group" /></div>
            <strong className="text-[#1c54b3] font-black text-lg">منهجية تطبيقية</strong>
            <span className="text-slate-500 text-sm font-bold">لابتعد عن النظريات</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-[#ee8a1c]/10 flex items-center justify-center text-[#ee8a1c] text-xl mb-2"><i className="fa-solid fa-file-invoice" /></div>
            <strong className="text-[#1c54b3] font-black text-lg">نماذج جاهزة</strong>
            <span className="text-slate-500 text-sm font-bold">عقود، لوائح، وهياكل</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-[#1c54b3]/10 flex items-center justify-center text-[#1c54b3] text-xl mb-2"><i className="fa-solid fa-users" /></div>
            <strong className="text-[#1c54b3] font-black text-lg">مجتمع داعم</strong>
            <span className="text-slate-500 text-sm font-bold">شبكة قوية من المحترفين</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-[#ee8a1c]/10 flex items-center justify-center text-[#ee8a1c] text-xl mb-2"><i className="fa-solid fa-chalkboard-user" /></div>
            <strong className="text-[#1c54b3] font-black text-lg">تفاعل مباشر</strong>
            <span className="text-slate-500 text-sm font-bold">استشارات عملية حيّة</span>
          </div>
        </div>
      </section>

          {/* ===== FOUNDER / INSTRUCTOR ===== */}
      <section className="about-founder py-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/Hero-Background.jpg')] bg-cover bg-center opacity-[0.03] pointer-events-none grayscale" />
        <h1 className="title text-[#1c54b3] relative z-10">{t('founderPageTitle')}</h1>
        <div className="container max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row justify-evenly items-center gap-8 relative z-10">
          <div className="max-w-[600px] w-full text-right">
            <h1 className="text-2xl md:text-3xl font-black text-[#1c54b3]">{t('founderName')}</h1>
            <p className="text-base md:text-lg lg:text-xl mt-4 font-bold text-slate-600 leading-relaxed">{t('founderBio')}</p>
            <div className="mt-8 flex justify-center md:justify-start">
              <a 
                href="https://hriansmasr.com/founder" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 bg-[#1c54b3] hover:bg-[#15418c] text-white font-bold py-3 px-8 rounded-full transition-all hover:-translate-y-1 shadow-lg"
              >
                اعرف أكثر عن المحاضر <i className="fa-solid fa-arrow-left text-sm" />
              </a>
            </div>
          </div>
          <div className="image w-full md:w-auto relative">
            <div className="absolute -inset-4 bg-[#ee8a1c]/20 rounded-4xl rounded-br-sm blur-2xl z-0" />
            <img className="relative z-10 rounded-4xl w-full md:w-[600px] rounded-br-sm border-white border-4 shadow-2xl" src="/images/TV/3.webp" alt="صورة للمؤسس في الراديو 90:90" />
          </div>
        </div>
      </section>

      {/* ===== PROBLEM (Split Layout) ===== */}
      <section className="py-24 bg-slate-50" dir="rtl">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            <div className="lg:w-1/3 animate-on-scroll fade-in-up">
              <span className="text-[#ee8a1c] font-black text-lg mb-2 block">المشكلة</span>
              <h2 className="text-3xl md:text-5xl font-black text-[#1c54b3] mb-6 leading-tight">
                هل تشعر أن دورك المهني <span className="text-[#1c54b3]">مهمش</span> أو غير مؤثر؟
              </h2>
              <p className="text-slate-600 text-lg font-bold leading-relaxed mb-8">
                الكثير من محترفي الموارد البشرية يستهلكون طاقاتهم في مهام شؤون العاملين والإجراءات الورقية الروتينية دون أي تدخل حقيقي في رسم استراتيجية الشركة أو تحديد أهدافها. هذا التجاهل يعود لافتقارهم للأدوات الإدارية الحديثة.
              </p>
              <Link to={FORM_LINK} className="inline-flex items-center gap-2 text-[#1c54b3] font-black text-lg hover:text-[#ee8a1c] transition-colors">
                وقت التغيير قد حان <i className="fa-solid fa-arrow-left text-sm" />
              </Link>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
              {[
                { text: "عدم القدرة على ربط مهام الـ HR بأهداف وأرباح الشركة.", icon: "fa-solid fa-link-slash" },
                { text: "صعوبة السيطرة على قانون العمل المصري والتصادم مع غرامات غير متوقعة.", icon: "fa-solid fa-gavel" },
                { text: "الافتقار إلى هيكل محكم للأجور والتعويضات يحافظ على الكفاءات.", icon: "fa-solid fa-money-bill-transfer" },
                { text: "الفشل في تصميم مؤشرات أداء (KPIs) عادلة وفرضها على الأقسام.", icon: "fa-solid fa-chart-line" },
              ].map((item, i) => (
                <div key={i} className="bg-white border text-right border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow animate-on-scroll fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="w-12 h-12 bg-red-50 text-red-500 rounded-lg flex items-center justify-center mb-4 text-xl"><i className={item.icon} /></div>
                  <strong className="text-slate-800 font-extrabold text-lg leading-snug">{item.text}</strong>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ===== TARGET AUDIENCE (Cards) ===== */}
      <section className="py-20 bg-white border-y border-slate-100" dir="rtl">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 animate-on-scroll fade-in-up">
            <h2 className="text-3xl md:text-5xl font-black text-[#1c54b3] mb-4">لمن هذا البرنامج؟</h2>
            <p className="text-slate-600 text-lg font-bold">صُمم هذا المحتوى ليكون رفيقك من البداية لتضع قدمك في المجال، وحتى توصلك لمستوى قيادي.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudience.map((aud, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 p-8 rounded-3xl text-center hover:-translate-y-2 transition-transform duration-300 animate-on-scroll fade-in-up" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="w-20 h-20 mx-auto bg-white shadow-xl shadow-[#1c54b3]/10 text-[#1c54b3] flex items-center justify-center rounded-2xl text-4xl mb-6 transform -rotate-3 hover:rotate-0 transition-transform">
                  <i className={aud.icon} />
                </div>
                <h3 className="text-2xl font-black text-[#1c54b3] mb-3">{aud.title}</h3>
                <p className="text-slate-600 font-bold leading-relaxed">{aud.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      

      {/* ===== PILLARS (Bento Grid instead of Timeline) ===== */}
      <section id="pillars" className="py-24 bg-[#1c54b3] relative overflow-hidden" dir="rtl">
        <div className="absolute inset-0 bg-[#1c54b3]/5" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="mb-16 md:flex justify-between items-end animate-on-scroll fade-in-up">
            <div className="max-w-2xl">
              <span className="text-[#ee8a1c] font-black text-lg mb-2 block">المحاور الرئيسية</span>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">الكفاءة الشاملة<br/>في <span className="text-[#1c54b3] bg-white px-3 py-1 rounded-lg ml-2">6 محاور</span> رئيسية</h2>
            </div>
            <p className="text-white/70 font-medium text-lg mt-6 md:mt-0 max-w-md">مزيج تطبيقي يعطيك الصورة الكاملة لإدارة كافة أنشطة وعمليات الـ HR، بعيداً عن التشتت بين الكورسات المنفصلة.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programPillars.map((pillar, i) => (
              <div key={i} className={`p-8 rounded-4xl flex flex-col justify-between transition-transform hover:-translate-y-1 hover:shadow-2xl ${pillar.span} animate-on-scroll fade-in-up`} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="mb-6">
                  <i className={`${pillar.icon} text-4xl mb-6 opacity-90`} />
                  <h3 className="text-2xl font-black mb-3">{pillar.title}</h3>
                  <p className="opacity-80 font-bold text-lg leading-relaxed">{pillar.desc}</p>
                </div>
                <div className="w-12 h-1 bg-current opacity-20 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="pillars" className="pt-24 bg-slate-50 relative overflow-hidden" dir="rtl">
            <Gallery/>
      </section>




      {/* ===== FEEDBACK ===== */}
      <div id="reels-feedback" className="bg-slate-50 py-10">
        <ReelsFeedback videoLinks={feedbackVideos} isLandscape={true} brandColor="#1c54b3" />
      </div>


      {/* ===== CTA (Clean and Direct) ===== */}
      <section className="py-24 bg-slate-100 text-center relative overflow-hidden" dir="rtl">
        <div className="container mx-auto px-4 relative z-10 max-w-3xl">
          <h2 className="text-[#1c54b3] font-black text-3xl md:text-5xl mb-6">
            استثمار اليوم هو ترقية الغد
          </h2>
          <p className="text-slate-600 text-xl font-bold mb-10 leading-relaxed">
            الشركات تبحث عن من يمتلك الرؤية والإدارة، وليس فقط من يُجيد متابعة الحضور والانصراف. انضم إلينا واكتسب عقلية الشريك الاستراتيجي.
          </p>
          <Link
            to={FORM_LINK}
            className="group inline-flex items-center gap-3 bg-[#1c54b3] text-white font-black text-2xl px-12 py-5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#11367a]"
          >
            احجز مقعدك الآن <i className="fa-solid fa-arrow-left group-hover:-translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  )
}

export default HRRoadmapPage
