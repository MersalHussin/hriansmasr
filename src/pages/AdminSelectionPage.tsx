import { Link, useNavigate } from "react-router-dom";
import SEO from "../components/SEO";

export default function AdminSelectionPage() {
  const navigate = useNavigate();

  return (
    <>
      <SEO title="لوحة الإدارة - اختيار الكورس" description="بوابة الإدارة للمشرفين" />
      
      {/* Back button */}
      <div className="fixed top-0 w-full p-4 z-50 pointer-events-none">
        <button
          onClick={() => navigate('/')}
          className="pointer-events-auto bg-white/80 backdrop-blur border border-slate-200 text-slate-700 w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#1c54b3] hover:text-white hover:border-[#1c54b3] transition-all shadow-sm"
          title="العودة للرئيسية"
        >
          <i className="fa-solid fa-arrow-right" />
        </button>
      </div>

      <section className="min-h-screen pt-24 pb-24 bg-slate-50 flex items-center justify-center font-sans" dir="rtl">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl font-black text-[#1c54b3] mb-4">بوابة الإدارة</h1>
            <p className="text-slate-600 font-bold text-lg">
              اختر الكورس الذي تود إدارة تفاصيله وحجوزاته
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up">
            {/* The Hidden Market Card */}
            <Link
              to="/admin/hidden-market"
              className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-xl hover:shadow-2xl hover:border-[#1c54b3]/30 hover:-translate-y-2 transition-all flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-[#1c54b3]/10 text-[#1c54b3] rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-user-secret" />
              </div>
              <h2 className="text-2xl font-black text-slate-800 mb-3 group-hover:text-[#1c54b3] transition-colors">
                The Hidden Market
              </h2>
              <p className="text-slate-500 font-medium">
                إدارة حجوزات وبيانات كورس The Hidden Market
              </p>
            </Link>

            {/* HR Roadmap Card */}
            <Link
              to="/admin/hr-roadmap"
              className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-xl hover:shadow-2xl hover:border-[#1c54b3]/30 hover:-translate-y-2 transition-all flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-[#1c54b3]/10 text-[#1c54b3] rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-map-location-dot" />
              </div>
              <h2 className="text-2xl font-black text-slate-800 mb-3 group-hover:text-[#1c54b3] transition-colors">
                HR Roadmap
              </h2>
              <p className="text-slate-500 font-medium">
                إدارة حجوزات وبيانات كورس HR Executive Roadmap
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}