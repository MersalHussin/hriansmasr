import SEO from "../components/SEO";
import { Link, useLocation, Navigate } from "react-router-dom";

export default function HRRoadmapSuccessPage() {
  const location = useLocation();
  const formData = location.state?.formData;

  // If no form data is found, it means they navigated directly to the success page
  if (!formData) {
    return <Navigate to="/hr-roadmap/book" replace />;
  }

  const whatsappMessage = `مرحباً، لقد سجلت في كورس HR Executive Roadmap وأريد إتمام الدفع لتأكيد حجزي. 
الاسم: ${formData.name}
الموبايل: ${formData.mobile}
البريد: ${formData.email}
الوظيفة: ${formData.jobLevel}`;

  const whatappLink = "https://wa.me/201097828846?text=" + encodeURIComponent(whatsappMessage);

  return (
    <>
      <SEO
        title="تم الحجز بنجاح - HR Executive Roadmap"
        description="تم تسجيل بياناتك بنجاح في كورس HR Executive Roadmap."
      />

      <section className="min-h-screen pt-32 pb-24 bg-slate-50 flex items-center justify-center font-sans" dir="rtl">
        <div className="container mx-auto px-4 max-w-xl">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 text-center animate-fade-in-up">
            <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
              <i className="fa-solid fa-party-horn" /> 🎉
            </div>
            <h2 className="text-3xl font-black text-[#1c54b3] mb-4">تم تسجيل بياناتك بنجاح!</h2>
            <p className="text-slate-600 text-lg font-bold mb-6 leading-relaxed">
              لقد حجزت مكانك المبدئي في <strong className="text-[#1c54b3]">HR Executive Roadmap</strong>.<br/>
              الخطوة التالية هي إتمام الدفع لتأكيد حجزك مئة بالمئة.
            </p>
            
            <div className="bg-[#ee8a1c]/10 border border-[#ee8a1c]/20 p-4 rounded-2xl mb-8">
              <p className="text-[#ee8a1c] font-black">
                <i className="fa-solid fa-triangle-exclamation ml-2" />
                حجزك المبدئي محجوز لمدة 24 ساعة فقط — أتمّ الدفع الآن لضمان مقعدك!
              </p>
            </div>

            <a
              href={whatappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1fa950] text-white font-black text-xl py-4 rounded-xl transition-all hover:-translate-y-1 shadow-[0_10px_20px_-10px_rgba(37,211,102,0.5)] mb-4"
            >
              <i className="fa-brands fa-whatsapp text-2xl" /> إتمام الدفع الآن (عبر واتسآب)
            </a>

            <Link to="/" className="text-slate-500 font-bold hover:text-[#1c54b3] transition-colors mt-4 inline-block">
              العودة للصفحة الرئيسية
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
