import { useState } from "react";
import SEO from "../SEO";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

interface BookingFormProps {
  seoTitle: string;
  seoDescription: string;
  pageTitle: string;
  pageSubtitle: string;
  collectionName: string;
  courseName: string;
  successRoute: string;
}

export default function BookingForm({
  seoTitle,
  seoDescription,
  pageTitle,
  pageSubtitle,
  collectionName,
  courseName,
  successRoute,
}: BookingFormProps) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    jobLevel: "",
    questions: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await addDoc(collection(db, collectionName), {
        ...formData,
        courseName,
        createdAt: serverTimestamp(),
      });
      navigate(successRoute, { state: { formData } });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("حدث خطأ أثناء إرسال البيانات: " + (error instanceof Error ? error.message : "يرجى المحاولة مرة أخرى."));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />

      <div className="fixed top-0 w-full p-4 z-50 pointer-events-none">
        <button
          onClick={() => navigate(-1)}
          className="pointer-events-auto bg-white/80 backdrop-blur border border-slate-200 text-slate-700 w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#1c54b3] hover:text-white transition-all shadow-sm"
          title="العودة"
        >
          <i className="fa-solid fa-arrow-right" />
        </button>
      </div>

      <section className="min-h-screen pt-32 pb-24 bg-slate-50 flex items-center justify-center font-sans" dir="rtl">
        <div className="container mx-auto px-4 max-w-xl">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12">
            <div className="animate-fade-in-up">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-black text-[#1c54b3] mb-4">{pageTitle}</h1>
                <p className="text-slate-600 font-bold">{pageSubtitle}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-slate-700 font-bold mb-2">
                    الاسم <span className="text-red-500">*</span>
                  </label>
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
                  <label className="block text-slate-700 font-bold mb-2">
                    رقم الموبايل (واتساب) <span className="text-red-500">*</span>
                  </label>
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
                  <label className="block text-slate-700 font-bold mb-2">
                    البريد الإلكتروني <span className="text-red-500">*</span>
                  </label>
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
                  <label className="block text-slate-700 font-bold mb-2">
                    الوظيفة أو المستوى <span className="text-red-500">*</span>
                  </label>
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
                  <label className="block text-slate-700 font-bold mb-2">
                    هل لديك أي أسئلة هامة؟ (اختياري)
                  </label>
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
                  className={`w-full ${
                    isLoading ? "bg-slate-400 cursor-not-allowed" : "bg-[#1c54b3] hover:bg-[#15418c] hover:-translate-y-1 shadow-lg"
                  } text-white font-black text-xl py-4 rounded-xl transition-all flex items-center justify-center gap-2`}
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
          </div>
        </div>
      </section>
    </>
  );
}