import { useEffect } from "react";
import BookingForm from "../components/CourseBooking/BookingForm";
import ReactPixel from 'react-facebook-pixel';


export default function HRRoadmapFormPage() {
  useEffect(() => {
    ReactPixel.track('InitiateCheckout'); 
  }, []);
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
