import { useEffect } from "react"
import { Link } from "react-router-dom"
import SEO from "../components/SEO"

function HRRoadmapPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <SEO
        title="HR Roadmap | HRians Egypt"
        description="برنامج تدريبي عملي يمشي معاك خطوة بخطوة في طريق الموارد البشرية"
        keywords="HR roadmap, موارد بشرية, تدريب, كورس HR"
      />
      <section className="min-h-[calc(100vh-90px)] bg-gradient-to-br from-yellow to-yellow-v2 flex flex-col items-center justify-center text-center px-4">
        <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-3xl p-12 max-w-xl">
          <div className="text-6xl mb-6">🗺️</div>
          <h1 className="text-white font-extrabold text-4xl md:text-5xl mb-4">HR Roadmap</h1>
          <p className="text-white/90 text-xl mb-8 leading-relaxed">
            الصفحة دي قريباً — برنامج تدريبي عملي يمشي معاك خطوة بخطوة في طريق الموارد البشرية
          </p>
          <a
            href="https://wa.me/201097828846"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white font-bold text-xl px-10 py-4 rounded-xl hover:bg-primary/90 transition-colors mb-4"
          >
            تواصل معنا للتسجيل
          </a>
          <br />
          <Link to="/" className="text-white/80 hover:text-white underline text-sm">
            ← رجوع للرئيسية
          </Link>
        </div>
      </section>
    </>
  )
}

export default HRRoadmapPage
