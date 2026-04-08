import { useState, useEffect } from "react";
import { collection, getDocs, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import SEO from "../SEO";
import * as XLSX from "xlsx";
import { useNavigate } from "react-router-dom";

interface AdminDashboardProps {
  seoTitle: string;
  pageTitle: string;
  collectionName: string;
  courseNameFilter: string;
  adminKeyDocName: string;
  storageKey: string;
}

interface Booking {
  id: string;
  name: string;
  mobile: string;
  email: string;
  jobLevel: string;
  questions?: string;
  courseName?: string;
  isConfirmed: boolean;
  createdAt?: { toMillis: () => number };
}

export default function AdminDashboard({
  seoTitle,
  pageTitle,
  collectionName,
  courseNameFilter,
  adminKeyDocName,
  storageKey,
}: AdminDashboardProps) {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passKey, setPassKey] = useState("");
  const [authError, setAuthError] = useState("");
  const [isChecking, setIsChecking] = useState(false);

  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  // Check session storage on mount
  useEffect(() => {
    const savedAuth = sessionStorage.getItem(storageKey);
    if (savedAuth === "true") {
      setIsAuthenticated(true);
      fetchBookings();
    }
  }, [storageKey]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsChecking(true);
    setAuthError("");

    try {
      // Get the specific key for this course from admin_keys collection
      const docRef = doc(db, "admin_keys", adminKeyDocName);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists() && docSnap.data().key === passKey) {
        setIsAuthenticated(true);
        sessionStorage.setItem(storageKey, "true");
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

  const exportToExcel = () => {
    if (bookings.length === 0) return;

    // Format data for Excel
    const excelData = bookings.map((booking, index) => ({
      "م": index + 1,
      "الاسم": booking.name,
      "رقم الموبايل": booking.mobile,
      "البريد الإلكتروني": booking.email,
      "الوظيفة / المستوى": booking.jobLevel,
      "الأسئلة أو الملاحظات": booking.questions || "لا يوجد",
      "تاريخ الحجز (يوم/شهر/سنة)": booking.createdAt 
        ? new Date(booking.createdAt.toMillis()).toLocaleDateString('ar-EG') 
        : "-",
      "الوقت": booking.createdAt 
        ? new Date(booking.createdAt.toMillis()).toLocaleTimeString('ar-EG') 
        : "-",
      "حالة الحجز": booking.isConfirmed ? "مؤكد" : "قيد الانتظار"
    }));

    // Create a worksheet
    const worksheet = XLSX.utils.json_to_sheet(excelData);
    
    // Set RTL direction for the worksheet
    if(!worksheet['!views']) worksheet['!views'] = [];
    worksheet['!views'].push({ rightToLeft: true });

    // Auto-size columns slightly
    worksheet["!cols"] = [
      { wch: 5 }, { wch: 25 }, { wch: 15 }, { wch: 30 }, 
      { wch: 20 }, { wch: 40 }, { wch: 15 }, { wch: 10 }, { wch: 15 }
    ];

    // Create a workbook
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "الحجوزات");

    // Generate output file
    const dateStr = new Date().toISOString().split('T')[0];
    XLSX.writeFile(workbook, `حجوزات_${pageTitle}_${dateStr}.xlsx`);
  };

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, collectionName));
      let data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Booking[];
      
      // Filter logically if we have a shared collection
      if (courseNameFilter) {
        data = data.filter(b => b.courseName === courseNameFilter || (!b.courseName && courseNameFilter === "HR Roadmap"));
      }

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
      const bookingRef = doc(db, collectionName, id);
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
        <SEO title={seoTitle} description="صفحة محمية بكلمة مرور" />

        <div className="fixed top-0 w-full p-4 z-50 pointer-events-none">
          <button
            onClick={() => navigate('/admin')}
            className="pointer-events-auto bg-white/80 backdrop-blur border border-slate-200 text-slate-700 w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#1c54b3] hover:text-white transition-all shadow-sm"
            title="العودة"
          >
            <i className="fa-solid fa-arrow-right" />
          </button>
        </div>

        <section className="min-h-screen pt-32 pb-24 bg-slate-50 flex items-center justify-center font-sans" dir="rtl">
          <div className="container mx-auto px-4 max-w-md">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 text-center animate-fade-in-up">
              <div className="w-20 h-20 bg-[#1c54b3]/10 text-[#1c54b3] rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6">
                <i className="fa-solid fa-lock" />
              </div>
              <h1 className="text-3xl font-black text-[#1c54b3] mb-2">منطقة الإدارة</h1>
              <p className="text-slate-600 font-bold mb-8">
                أدخل الكود السري للوصول لبيانات {pageTitle}
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
  const totalBookings = bookings.length;
  const confirmedBookings = bookings.filter((b) => b.isConfirmed).length;
  const pendingBookings = totalBookings - confirmedBookings;

  return (
    <>
      <SEO title={seoTitle} description={`إدارة حجوزات ${pageTitle}`} />

      <div className="fixed top-0 w-full p-4 z-50 pointer-events-none">
        <button
          onClick={() => navigate('/admin')}
          className="pointer-events-auto bg-white/80 backdrop-blur border border-slate-200 text-slate-700 w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#1c54b3] hover:text-white transition-all shadow-sm"
          title="العودة"
        >
          <i className="fa-solid fa-arrow-right" />
        </button>
      </div>

      <section className="min-h-screen pt-32 pb-24 bg-slate-50 font-sans" dir="rtl">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <h1 className="text-3xl font-black text-[#1c54b3]">إدارة حجوزات {pageTitle}</h1>
            <div className="flex items-center gap-3">
              <button
                onClick={exportToExcel}
                className="bg-[#25D366] text-white px-4 py-2 rounded-lg font-bold hover:bg-[#1fa950] transition-colors flex items-center gap-2 shadow-sm"
              >
                <i className="fa-solid fa-file-excel" /> تصدير Excel
              </button>
              <button 
                onClick={fetchBookings}
                className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg font-bold hover:bg-slate-100 transition-colors flex items-center gap-2 shadow-sm"
              >
                <i className="fa-solid fa-rotate-right" /> تحديث
              </button>
              <button 
                onClick={() => {
                  sessionStorage.removeItem(storageKey);
                  setIsAuthenticated(false);
                }}
                className="bg-red-50 text-red-600 px-4 py-2 rounded-lg font-bold hover:bg-red-100 transition-colors flex items-center gap-2 shadow-sm"
              >
                <i className="fa-solid fa-arrow-right-from-bracket" /> خروج
              </button>
            </div>
          </div>

          {!loading && totalBookings > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-l-[#1c54b3] flex items-center justify-between">
                <div>
                  <p className="text-slate-500 font-bold mb-1 text-sm">إجمالي الحجوزات</p>
                  <p className="text-3xl font-black text-[#1c54b3]">{totalBookings}</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#1c54b3]/10 flex items-center justify-center text-[#1c54b3] text-xl">
                  <i className="fa-solid fa-users" />
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-l-green-500 flex items-center justify-between">
                <div>
                  <p className="text-slate-500 font-bold mb-1 text-sm">تم الدفع (مؤكد)</p>
                  <p className="text-3xl font-black text-green-600">{confirmedBookings}</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-500 text-xl">
                  <i className="fa-solid fa-check-circle" />
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-l-amber-500 flex items-center justify-between">
                <div>
                  <p className="text-slate-500 font-bold mb-1 text-sm">في الانتظار</p>
                  <p className="text-3xl font-black text-amber-600">{pendingBookings}</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 text-xl">
                  <i className="fa-solid fa-clock-rotate-left" />
                </div>
              </div>
            </div>
          )}

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
                    <tr className="bg-slate-50 text-slate-600 uppercase text-sm border-b-2 border-slate-200">
                      <th className="p-5 font-black">الاسم</th>
                      <th className="p-5 font-black">الموبايل</th>
                      <th className="p-5 font-black hidden md:table-cell">تاريخ الحجز</th>
                      <th className="p-5 font-black">الوظيفة</th>
                      <th className="p-5 font-black text-center">حالة الحجز</th>
                      <th className="p-5 font-black text-center">تحديث</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {bookings.map((booking) => (
                      <tr key={booking.id} className="hover:bg-slate-50/50 transition-colors group">
                        <td className="p-5">
                          <p className="font-bold text-slate-800">{booking.name}</p>
                          <p className="text-xs text-slate-500 mt-1 md:hidden" dir="ltr">{booking.email}</p>
                          <p className="text-xs text-slate-400 mt-1 hidden md:block" dir="ltr">{booking.email}</p>
                        </td>
                        <td className="p-5">
                          <a href={`https://wa.me/${booking.mobile.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer" className="text-[#1c54b3] font-bold hover:underline" dir="ltr">
                            {booking.mobile}
                          </a>
                        </td>
                        <td className="p-5 hidden md:table-cell text-slate-600 text-sm">
                          {booking.createdAt ? new Date(booking.createdAt.toMillis()).toLocaleDateString("ar-EG", {
                            year: 'numeric', month: 'short', day: 'numeric',
                            hour: '2-digit', minute:'2-digit'
                          }) : "-"}
                        </td>
                        <td className="p-5 text-slate-600 text-sm font-medium">{booking.jobLevel}</td>
                        <td className="p-5 text-center">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-black border ${
                            booking.isConfirmed 
                              ? 'bg-green-50 text-green-700 border-green-200' 
                              : 'bg-amber-50 text-amber-700 border-amber-200'
                          }`}>
                            {booking.isConfirmed ? (
                              <><i className="fa-solid fa-check ml-1.5" /> تم التأكيد</>
                            ) : (
                              <><i className="fa-solid fa-clock ml-1.5" /> قيد الانتظار</>
                            )}
                          </span>
                        </td>
                        <td className="p-5 text-center">
                          <button
                            onClick={() => toggleConfirmation(booking.id, !!booking.isConfirmed)}
                            className={`p-2 rounded-lg transition-all ${
                              booking.isConfirmed 
                                ? 'bg-slate-100 text-slate-500 hover:bg-slate-200' 
                                : 'bg-[#1c54b3]/10 text-[#1c54b3] hover:bg-[#1c54b3]/20'
                            }`}
                            title={booking.isConfirmed ? "إلغاء التأكيد" : "تأكيد الدفع"}
                          >
                            <i className={`fa-solid ${booking.isConfirmed ? 'fa-xmark' : 'fa-check'}`} />
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