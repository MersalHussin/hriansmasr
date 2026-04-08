import AdminDashboard from "../../components/CourseBooking/AdminDashboard";

export default function HiddenMarketDashboard() {
  return (
    <AdminDashboard
      seoTitle="لوحة التحكم - The Hidden Market"
      pageTitle="The Hidden Market"
      collectionName="hidden_market_bookings"
      courseNameFilter="The Hidden Market"
      adminKeyDocName="hidden_market"
      storageKey="admin_hidden_market_auth"
    />
  );
}