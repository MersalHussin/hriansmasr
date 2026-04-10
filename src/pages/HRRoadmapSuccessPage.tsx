import { useEffect } from "react";
import BookingSuccess from "../components/CourseBooking/BookingSuccess";
import ReactPixel from 'react-facebook-pixel';
export default function HRRoadmapSuccessPage() {
  useEffect(() => {
    ReactPixel.track('Lead'); 
  }, []);
  return (
    <BookingSuccess
      seoTitle="تم الحجز بنجاح - HR Executive Roadmap"
      seoDescription="تم تسجيل بياناتك بنجاح في كورس HR Executive Roadmap."
      courseName="HR Executive Roadmap"
      fallbackRoute="/hr-roadmap/book"
      whatsappMessageTemplate={(formData) =>
        `مرحباً، لقد سجلت في كورس HR Executive Roadmap وأريد إتمام الدفع لتأكيد حجزي. 
الاسم: ${formData.name}
الموبايل: ${formData.mobile}
البريد: ${formData.email}
الوظيفة: ${formData.jobLevel}`
      }
    />
  );
}
