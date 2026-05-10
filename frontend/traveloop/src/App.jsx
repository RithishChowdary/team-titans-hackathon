import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import CreateTripPage from "./pages/CreateTripPage";
import TripPlannerPage from "./pages/TripPlannerPage";
import PublicTripPage from "./pages/PublicTripPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/create-trip" element={<CreateTripPage />} />
      <Route path="/trip/:id" element={<TripPlannerPage />} />
      <Route path="/public/:token" element={<PublicTripPage />} />
    </Routes>
  );
}

export default App;