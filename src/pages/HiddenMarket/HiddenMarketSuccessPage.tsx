import BookingSuccess from "../../components/CourseBooking/BookingSuccess";

interface FormData {
  name: string;
  mobile: string;
  email: string;
  jobLevel: string;
}

export default function HiddenMarketSuccessPage() {
  const getWhatsappMessage = (formData: FormData) => `مرحباً، لقد سجلت في كورس The Hidden Market وأريد إتمام الدفع لتأكيد حجزي. 
الاسم: ${formData.name}
الموبايل: ${formData.mobile}
البريد: ${formData.email}
الوظيفة: ${formData.jobLevel}`;

  return (
    <BookingSuccess
      seoTitle="تم الحجز بنجاح - The Hidden Market"
      seoDescription="تم تسجيل بياناتك بنجاح في كورس The Hidden Market."
      courseName="The Hidden Market"
      whatsappMessageTemplate={getWhatsappMessage}
      fallbackRoute="/hidden-market-masterclass/book"
    />
  );
}