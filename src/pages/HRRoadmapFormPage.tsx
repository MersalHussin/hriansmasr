import BookingForm from "../components/CourseBooking/BookingForm";

export default function HRRoadmapFormPage() {
  return (
    <BookingForm
      seoTitle="تأكيد حجز كورس HR Executive Roadmap"
      seoDescription="سجل بياناتك الآن لحجز مقعدك المبدئي في كورس HR Executive Roadmap."
      pageTitle="احجز مقعدك الآن"
      pageSubtitle="سجل بياناتك لحجز مكانك المبدئي في برنامج HR Executive Roadmap"
      collectionName="hr_roadmap_bookings"
      courseName="HR Roadmap"
      successRoute="/hr-roadmap/success"
    />
  );
}
