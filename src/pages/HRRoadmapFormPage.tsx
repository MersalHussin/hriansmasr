import { useState } from "react";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export default function HRRoadmapFormPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    jobLevel: "",
    questions: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Add a new document to the "hr_roadmap_bookings" collection
      await addDoc(collection(db, "hr_roadmap_bookings"), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("حدث خطأ أثناء إرسال البيانات. يرجى المحاولة مرة أخرى.");
    } finally {
      setIsLoading(false);
    }
  };

  const whatsappMessage = `مرحباً، لقد سجلت في كورس HR Executive Roadmap وأريد إتمام الدفع لتأكيد حجزي. 
الاسم: ${formData.name}
الموبايل: ${formData.mobile}
البريد: ${formData.email}
الوظيفة: ${formData.jobLevel}`;

  const whatappLink = "https://wa.me/201097828846?text=" + encodeURIComponent(whatsappMessage);

  return (
    <>
      <SEO
        title="تأكيد حجز كورس HR Executive Roadmap"
        description="سجل بياناتك الآن لحجز مقعدك المبدئي في كورس HR Executive Roadmap."
      />

      <section className="min-h-screen pt-32 pb-24 bg-slate-50 flex items-center justify-center font-sans" dir="rtl">
        <div className="container mx-auto px-4 max-w-xl">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12">
            {!isSubmitted ? (
              <div className="animate-fade-in-up">
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-black text-[#1c54b3] mb-4">احجز مقعدك الآن</h1>
                  <p className="text-slate-600 font-bold">
                    سجل بياناتك لحجز مكانك المبدئي في برنامج HR Executive Roadmap
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-slate-700 font-bold mb-2">الاسم <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-[#1c54b3] focus:ring-2 focus:ring-[#1c54b3]/20 bg-slate-50 transition-all font-medium"
                      placeholder="اكتب اسمك الثلاثي"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold mb-2">رقم الموبايل (واتساب) <span className="text-red-500">*</span></label>
                    <input
                      type="tel"
                      name="mobile"
                      required
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-[#1c54b3] focus:ring-2 focus:ring-[#1c54b3]/20 bg-slate-50 transition-all font-medium text-left"
                      placeholder="010XXXXXXXX"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold mb-2">البريد الإلكتروني <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-[#1c54b3] focus:ring-2 focus:ring-[#1c54b3]/20 bg-slate-50 transition-all font-medium text-left"
                      placeholder="example@gmail.com"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold mb-2">الوظيفة أو المستوى <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="jobLevel"
                      required
                      value={formData.jobLevel}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-[#1c54b3] focus:ring-2 focus:ring-[#1c54b3]/20 bg-slate-50 transition-all font-medium"
                      placeholder="مثال: أخصائي موارد بشرية، حديث التخرج..."
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold mb-2">هل لديك أي أسئلة هامة؟ (اختياري)</label>
                    <textarea
                      name="questions"
                      value={formData.questions}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-[#1c54b3] focus:ring-2 focus:ring-[#1c54b3]/20 bg-slate-50 transition-all font-medium"
                      placeholder="اترك سؤالك هنا..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full ${isLoading ? 'bg-slate-400 cursor-not-allowed' : 'bg-[#1c54b3] hover:bg-[#15418c] hover:-translate-y-1 shadow-lg'} text-white font-black text-xl py-4 rounded-xl transition-all flex items-center justify-center gap-2`}
                  >
                    {isLoading ? (
                      <>
                        <i className="fa-solid fa-circle-notch fa-spin" /> جاري تسجيل البيانات...
                      </>
                    ) : (
                      <>
                        تأكيد الحجز المبدئي <i className="fa-solid fa-check" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center animate-fade-in-up py-8">
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
            )}
          </div>
        </div>
      </section>
    </>
  );
}
