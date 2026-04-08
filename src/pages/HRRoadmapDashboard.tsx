import AdminDashboard from "../components/CourseBooking/AdminDashboard";

export default function HRRoadmapDashboard() {
  return (
    <AdminDashboard
      seoTitle="لوحة التحكم - HR Roadmap"
      pageTitle="HR Roadmap"
      collectionName="hr_roadmap_bookings"
      courseNameFilter="HR Roadmap"
      adminKeyDocName="hr_roadmap"
      storageKey="admin_hr_roadmap_auth"
    />
  );
}
