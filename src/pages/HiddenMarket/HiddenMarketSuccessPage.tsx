import BookingSuccess from "../../components/CourseBooking/BookingSuccess";

export default function HiddenMarketSuccessPage() {
  const getWhatsappMessage = (formData: any) => `مرحباً، لقد سجلت في كورس The Hidden Market وأريد إتمام الدفع لتأكيد حجزي. 
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