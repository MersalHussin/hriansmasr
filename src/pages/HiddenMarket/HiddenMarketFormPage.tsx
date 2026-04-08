import BookingForm from "../../components/CourseBooking/BookingForm";

export default function HiddenMarketFormPage() {
  return (
    <BookingForm
      seoTitle="تأكيد حجز كورس The Hidden Market"
      seoDescription="سجل بياناتك الآن لحجز مقعدك المبدئي في كورس The Hidden Market."
      pageTitle="احجز مقعدك الآن"
      pageSubtitle="سجل بياناتك لحجز مكانك المبدئي في برنامج The Hidden Market"
      collectionName="hidden_market_bookings"
      courseName="The Hidden Market"
      successRoute="/hidden-market-masterclass/success"
    />
  );
}