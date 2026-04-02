import { Link } from "react-router-dom"
import { useEffect } from "react"
import SEO from "../components/SEO"

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <SEO
        title="أتش أرجية مصر | HRians Egypt - كورسات موارد بشرية"
        description="اختر الكورس المناسب لك من كورسات أتش أرجية مصر في الموارد البشرية"
        keywords="موارد بشرية, HR, كورس, تدريب مهني"
      />
      <section className="relative min-h-[calc(100vh-90px)] overflow-hidden py-16 px-4 bg-[radial-gradient(circle_at_15%_20%,rgba(239,138,27,0.18),transparent_45%),radial-gradient(circle_at_85%_20%,rgba(28,84,179,0.2),transparent_35%),linear-gradient(180deg,#ffffff_0%,#f7f9ff_100%)]">
        <div className="absolute inset-0 bg-[url('/images/Hero-Background.jpg')] bg-cover bg-center opacity-10" />
        <div className="absolute -top-16 left-0 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -bottom-16 right-0 h-72 w-72 rounded-full bg-yellow/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <img src="/images/Auth.svg" alt="HRians Egypt" className="w-[200px] md:w-[260px] mx-auto mb-6" />
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/80 px-4 py-2 text-sm font-bold text-primary mb-4">
              برامج احترافية بتقودك للشغل الحقيقي
            </span>
            <h1 className="text-primary font-extrabold text-4xl md:text-6xl mb-4 leading-tight">
              اختار البرنامج اللي هيعمل
              <span className="text-yellow block md:inline md:mr-2">نقلة في كاريرك</span>
            </h1>
            <p className="text-black-v2 text-lg md:text-xl font-medium max-w-[620px] mx-auto leading-relaxed">
              مسارات عملية + تطبيقات واقعية + دعم مباشر علشان توصل أسرع للنتيجة اللي مستنيها
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <Link
              to="/hidden-market-masterclass"
              className="group relative overflow-hidden rounded-4xl border border-white/40 bg-white/85 backdrop-blur-xl shadow-[0_30px_80px_-35px_rgba(28,84,179,0.55)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_90px_-30px_rgba(28,84,179,0.75)]"
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,#1C54B3_0%,#163f85_50%,#0f2d5f_100%)]" />
              <div className="absolute -top-16 -left-8 h-44 w-44 rounded-full bg-yellow/35 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-white/10 blur-2xl" />

              <div className="relative p-8 flex flex-col min-h-[340px] justify-between text-center">
                <div>
                  <div className="bg-yellow text-white text-sm font-extrabold px-4 py-1 rounded-full mb-4 inline-block shadow-lg shadow-yellow/30">
                    🔥 الأكثر طلباً
                  </div>
                  <h2 className="text-white font-extrabold text-3xl leading-tight mb-3">
                    The Hidden Market
                    <span className="block text-yellow-v2">Masterclass</span>
                  </h2>
                  <p className="text-white/85 text-base leading-relaxed">
                    تعلم أسرار الوصول للوظائف غير المعلنة وازاي تخلي الفرص هي اللي تدور عليك
                  </p>
                </div>

                <div className="mt-8 inline-flex items-center justify-center gap-2 bg-yellow text-white font-extrabold px-8 py-3 rounded-xl text-lg transition-all duration-300 group-hover:bg-yellow-v2 group-hover:scale-105">
                  ابدأ دلوقتي
                  <span aria-hidden="true">←</span>
                </div>
              </div>
            </Link>

            <Link
              to="/hr-roadmap"
              className="group relative overflow-hidden rounded-4xl border border-white/60 bg-white/85 backdrop-blur-xl shadow-[0_30px_80px_-35px_rgba(239,138,27,0.55)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_90px_-30px_rgba(239,138,27,0.75)]"
            >
              <div className="absolute inset-0 bg-[linear-gradient(145deg,#EF8A1B_0%,#EFB61B_70%,#ffc95e_100%)]" />
              <div className="absolute -bottom-14 -right-8 h-44 w-44 rounded-full bg-primary/30 blur-3xl" />

              <div className="relative p-8 flex flex-col min-h-[340px] justify-between text-center">
                <div>
                  <div className="bg-primary text-white text-sm font-extrabold px-4 py-1 rounded-full mb-4 inline-block">
                    🗺️ خطوة بخطوة
                  </div>
                  <h2 className="text-white font-extrabold text-3xl leading-tight mb-3">HR Roadmap</h2>
                  <p className="text-white/90 text-base leading-relaxed">
                    خطة تدريب عملية من الصفر للاحتراف بكل الأدوات اللي محتاجها عشان تبدأ صح
                  </p>
                </div>

                <div className="mt-8 inline-flex items-center justify-center gap-2 bg-primary text-white font-extrabold px-8 py-3 rounded-xl text-lg transition-all duration-300 group-hover:bg-primary/90 group-hover:scale-105">
                  اعرف أكتر
                  <span aria-hidden="true">←</span>
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-12 text-center">
            <p className="text-black-v2 font-medium mb-3">مش عارف تختار؟</p>
            <a
              href="https://wa.me/201097828846"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-7 py-3.5 rounded-xl hover:bg-[#1ebe5d] transition-all duration-300 hover:scale-105 shadow-lg shadow-[#25D366]/30"
            >
              <i className="fa-brands fa-whatsapp text-xl" />
              تواصل معنا على واتساب
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
  