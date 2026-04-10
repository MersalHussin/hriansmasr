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
      <section className="relative min-h-[calc(100vh-90px)] overflow-hidden py-14 md:py-20 px-4 bg-slate-50 font-sans" dir="rtl">
        {/* Background Gradients (Simple & Elegant) */}
        <div className="absolute top-0 right-0 w-full h-[500px] bg-linear-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-yellow/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-6xl">
          
          {/* Header Title Section */}
          <div className="text-center mb-16 flex flex-col items-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-5 py-2 text-sm font-bold text-primary mb-6 shadow-sm">
              <i className=" fa-solid fa-gem text-yellow"></i> استثمر في قيمتك المهنية
            </span>
            <h1 className=" rubik text-primary font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight drop-shadow-sm">
              مكانك الحقـــــيقي
              <span className=" block  md:mr-3">أكبر مما تـــــتخيل</span>
            </h1>
            <p className="rubik text-slate-600 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              نحن لا نقدم مجرد دورات تدريبية، بل نبني معك مساراً مهنياً يعكس حجم خبرتك الحقيقية ويضعك في المكانة التي تستحقها في سوق العمل.
            </p>
          </div>

          {/* Courses Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto w-full">
            
            {/* Course 1: Hidden Market */}
            <Link
              to="/hidden-market-masterclass"
              className="group bg-white rounded-4xl overflow-hidden shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_-15px_rgba(28,84,179,0.2)] transition-all duration-500 hover:-translate-y-2 border border-slate-100 flex flex-col relative"
            >
              {/* Card Image */}
              <div className="relative h-64 md:h-72 w-full overflow-hidden bg-slate-100">
                <img 
                  src="./images/The-Hidden/Course.jpg"
                  alt="The Hidden Market Masterclass" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/800x600/0A2552/FFFFFF/png?text=The+Hidden+Market+Masterclass&font=Montserrat' }}
                />
                <div className="absolute top-5 right-5 bg-yellow text-brand-dark text-xs font-black px-4 py-2 rounded-lg shadow-lg">
                  🔥 للمحترفين فقط
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 md:p-10 flex flex-col flex-1">
                <h2 className="text-primary font-black text-2xl md:text-3xl mb-3 flex items-center justify-between" style={{fontFamily: "Calistoga"}}>
                  The Hidden Market
                </h2>
                <span className="text-yellow-v2 font-bold text-lg mb-4 block">هندسة النفوذ المهني</span>
                <p className="text-slate-600 text-base leading-relaxed mb-10 flex-1 font-medium">
                  أعد صياغة صورتك المهنية لتعكس قيمتك الحقيقية. تعلم كيف تجعل الشركات الكبرى تبحث عنك وتتفاوض معك، وكيف تقتنص الفرص المخفية التي لا تُعلن للعامة.
                </p>
                
                {/* Card Button */}
                <div className="w-full bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white border border-primary/10 group-hover:border-primary font-bold py-4 rounded-xl text-center transition-colors duration-300 flex items-center justify-center gap-2">
                  اكتشف قوة البراند الخاص بك <i className="fa-solid fa-arrow-left"></i>
                </div>
              </div>
            </Link>

            {/* Course 2: HR Roadmap */}
            <Link
              to="/hr-roadmap"
              className="group bg-white rounded-4xl overflow-hidden shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_-15px_rgba(239,138,27,0.2)] transition-all duration-500 hover:-translate-y-2 border border-slate-100 flex flex-col relative"
            >
              {/* Card Image */}
              <div className="relative h-64 md:h-72 w-full overflow-hidden bg-slate-100">
                <img 
                  src="./images/HR-Roodmap/Course-2.jpg"
                  alt="HR Roadmap" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/800x600/EF8A1B/FFFFFF/png?text=HR+Roadmap&font=Montserrat' }}
                />
                <div className="absolute top-5 right-5 bg-primary text-white text-xs font-black px-4 py-2 rounded-lg shadow-lg">
                  🗺️ دليلك للاحتراف
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 md:p-10 flex flex-col flex-1">
                <h2 className="text-primary font-black text-2xl md:text-3xl mb-3 flex items-center justify-between" style={{fontFamily: "Calistoga"}}>
                  HR Roadmap
                </h2>
                <span className="text-primary/60 font-bold text-lg mb-4 block">نبني معك أساساً صلباً</span>
                <p className="text-slate-600 text-base leading-relaxed mb-10 flex-1 font-medium">
                  استثمر في بدايتك الصحيحة بمجال الموارد البشرية. خطة متكاملة تأخذ بيدك من الشغف الأولي إلى الاحتراف الحقيقي، لتصبح كادراً مؤثراً يضيف قيمة لأي مؤسسة.
                </p>
                
                {/* Card Button */}
                <div className="w-full bg-yellow/10 text-yellow-v2 group-hover:bg-yellow group-hover:text-white border border-yellow/20 group-hover:border-yellow font-bold py-4 rounded-xl text-center transition-colors duration-300 flex items-center justify-center gap-2">
                  ابدأ رحلة بناء قيمتك <i className="fa-solid fa-arrow-left"></i>
                </div>
              </div>
            </Link>

          </div>

          {/* Contact Support CTA Box */}
          <div className="mt-20 flex justify-center w-full">
            <div className="bg-white rounded-3xl p-8 w-full max-w-3xl shadow-xl shadow-slate-200 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 transition-colors duration-300 hover:border-green-200">
              <div className="text-center md:text-right">
                <h3 className="text-primary font-extrabold text-xl mb-2">محتار ومش عارف تختار؟ 🤔</h3>
                <p className="text-slate-500 font-medium">فريقنا متواجد ومستعد يوجهك لأفضل مسار يناسب خبرتك وطموحك.</p>
              </div>
              <a
                href="https://wa.me/201097828846"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-3 bg-[#25D366] text-white font-extrabold px-8 py-4 rounded-[14px] hover:bg-[#1ebe5d] transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-[#25D366]/30"
              >
                <i className="fa-brands fa-whatsapp text-3xl" />
                تواصل معنا متترددش
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Home
  