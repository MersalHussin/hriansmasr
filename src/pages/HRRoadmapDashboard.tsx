import { useState, useEffect } from "react";
import { collection, getDocs, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import SEO from "../components/SEO";

export default function HRRoadmapDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passKey, setPassKey] = useState("");
  const [authError, setAuthError] = useState("");
  const [isChecking, setIsChecking] = useState(false);

  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Check session storage on mount
  useEffect(() => {
    const savedAuth = sessionStorage.getItem("admin_hr_roadmap_auth");
    if (savedAuth === "true") {
      setIsAuthenticated(true);
      fetchBookings();
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsChecking(true);
    setAuthError("");

    try {
      // Get the specific key for this course from admin_keys collection
      const docRef = doc(db, "admin_keys", "hr_roadmap");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists() && docSnap.data().key === passKey) {
        setIsAuthenticated(true);
        sessionStorage.setItem("admin_hr_roadmap_auth", "true");
        fetchBookings();
      } else {
        setAuthError("كود المرور غير صحيح. تأكد من إعداد الكود في Firebase.");
      }
    } catch (error) {
      console.error("Login Check Error:", error);
      setAuthError("حدث خطأ أثناء الاتصال بقاعدة البيانات. تأكد من قواعد الأمان (Rules).");
    } finally {
      setIsChecking(false);
    }
  };

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "hr_roadmap_bookings"));
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as any[];
      
      data.sort((a, b) => {
        const timeA = a.createdAt?.toMillis?.() || 0;
        const timeB = b.createdAt?.toMillis?.() || 0;
        return timeB - timeA;
      });
      
      setBookings(data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      alert("حدث خطأ أثناء جلب البيانات. تأكد من تعديل قواعد Firebase.");
    } finally {
      setLoading(false);
    }
  };

  const toggleConfirmation = async (id: string, currentStatus: boolean) => {
    try {
      const bookingRef = doc(db, "hr_roadmap_bookings", id);
      await updateDoc(bookingRef, { isConfirmed: !currentStatus });
      setBookings(bookings.map(b => b.id === id ? { ...b, isConfirmed: !currentStatus } : b));
    } catch (error) {
      console.error("Error updating booking:", error);
      alert("حدث خطأ أثناء التحديث.");
    }
  };

  // ---------------- LOGIN SCREEN ----------------
  if (!isAuthenticated) {
    return (
      <>
        <SEO title="دخول الإدارة - HR Roadmap" description="صفحة محمية بكلمة مرور" />
        <section className="min-h-screen pt-32 pb-24 bg-slate-50 flex items-center justify-center font-sans" dir="rtl">
          <div className="container mx-auto px-4 max-w-md">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 text-center animate-fade-in-up">
              <div className="w-20 h-20 bg-[#1c54b3]/10 text-[#1c54b3] rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6">
                <i className="fa-solid fa-lock" />
              </div>
              <h1 className="text-3xl font-black text-[#1c54b3] mb-2">منطقة الإدارة</h1>
              <p className="text-slate-600 font-bold mb-8">
                أدخل الكود السري الخاص بكورس HR Roadmap
              </p>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <input
                    type="password"
                    required
                    value={passKey}
                    onChange={(e) => setPassKey(e.target.value)}
                    className="w-full px-4 py-4 rounded-xl border border-slate-200 focus:outline-[#1c54b3] focus:ring-2 focus:ring-[#1c54b3]/20 bg-slate-50 transition-all font-bold text-center text-xl tracking-widest"
                    placeholder="••••••••"
                  />
                  {authError && (
                    <p className="text-red-500 font-bold text-sm mt-3">{authError}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isChecking}
                  className={`w-full ${isChecking ? 'bg-slate-400 cursor-not-allowed' : 'bg-[#1c54b3] hover:bg-[#15418c] hover:-translate-y-1 shadow-lg'} text-white font-black text-xl py-4 rounded-xl transition-all flex items-center justify-center gap-2`}
                >
                  {isChecking ? (
                    <><i className="fa-solid fa-circle-notch fa-spin" /> جاري التحقق...</>
                  ) : (
                    <>تسجيل الدخول <i className="fa-solid fa-arrow-left-to-bracket" /></>
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>
      </>
    );
  }

  // ---------------- DASHBOARD SCREEN ----------------
  return (
    <>
      <SEO title="لوحة التحكم - HR Roadmap" description="إدارة حجوزات كورس HR Roadmap" />
      <section className="min-h-screen pt-32 pb-24 bg-slate-50 font-sans" dir="rtl">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <h1 className="text-3xl font-black text-[#1c54b3]">إدارة حجوزات HR Roadmap</h1>
            <div className="flex items-center gap-3">
              <button 
                onClick={fetchBookings}
                className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg font-bold hover:bg-slate-100 transition-colors flex items-center gap-2 shadow-sm"
              >
                <i className="fa-solid fa-rotate-right" /> تحديث البيانات
              </button>
              <button 
                onClick={() => {
                  sessionStorage.removeItem("admin_hr_roadmap_auth");
                  setIsAuthenticated(false);
                }}
                className="bg-red-50 text-red-600 px-4 py-2 rounded-lg font-bold hover:bg-red-100 transition-colors flex items-center gap-2 shadow-sm"
              >
                <i className="fa-solid fa-arrow-right-from-bracket" /> خروج
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            {loading ? (
              <div className="p-12 text-center text-slate-500 font-bold text-xl">
                <i className="fa-solid fa-circle-notch fa-spin text-3xl mb-4 block text-[#1c54b3]" />
                جاري تحميل البيانات...
              </div>
            ) : bookings.length === 0 ? (
              <div className="p-12 text-center text-slate-500 font-bold text-xl">
                لا يوجد حجوزات حتى الآن.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-right border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 font-bold border-b">الاسم</th>
                      <th className="p-4 font-bold border-b">الموبايل</th>
                      <th className="p-4 font-bold border-b">البريد الإلكتروني</th>
                      <th className="p-4 font-bold border-b">الوظيفة</th>
                      <th className="p-4 font-bold border-b min-w-[200px]">الأسئلة/الملاحظات</th>
                      <th className="p-4 font-bold border-b text-center">حالة الحجز</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((booking) => (
                      <tr key={booking.id} className="border-b hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-800">{booking.name}</td>
                        <td className="p-4 text-slate-600" dir="ltr">{booking.mobile}</td>
                        <td className="p-4 text-slate-600" dir="ltr">{booking.email}</td>
                        <td className="p-4 text-slate-600">{booking.jobLevel}</td>
                        <td className="p-4 text-sm text-slate-500 whitespace-pre-wrap">{booking.questions || "-"}</td>
                        <td className="p-4 text-center">
                          <button
                            onClick={() => toggleConfirmation(booking.id, !!booking.isConfirmed)}
                            className={`px-4 py-2 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2 w-full max-w-[140px] mx-auto ${
                              booking.isConfirmed 
                                ? 'bg-green-100 text-green-700 border border-green-200 hover:bg-green-200' 
                                : 'bg-red-100 text-red-700 border border-red-200 hover:bg-red-200'
                            }`}
                          >
                            {booking.isConfirmed ? (
                              <><i className="fa-solid fa-check-circle" /> تم التأكيد</>
                            ) : (
                              <><i className="fa-solid fa-clock" /> انتظار الدفع</>
                            )}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
