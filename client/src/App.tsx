import { Routes, Route } from "react-router-dom";

import LandingPage from "@/landing/LandingPage";
import Layout from "@/components/layout";
import DashboardPage from "@/pages/dashboard";
import NewLeadPage from "@/pages/new-lead";
import PipelinePage from "@/pages/pipeline";
import ActivityPage from "@/pages/activity";
import CalendarPage from "@/pages/calendar";
import MarketingPage from "@/pages/marketing";

export default function App() {
  return (
    <Routes>
      {/* Landing Page */}
      <Route path="/" element={<LandingPage />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<DashboardPage />} />

        {/* Sales */}
        <Route path="new" element={<NewLeadPage />} />
        <Route path="pipeline/:id" element={<PipelinePage />} />
        <Route path="activity" element={<ActivityPage />} />
        <Route path="calendar" element={<CalendarPage />} />
        <Route path="settings" element={<DashboardPage />} />

        {/* Marketing */}
        <Route path="marketing" element={<MarketingPage />} />
      </Route>
    </Routes>
  );
}