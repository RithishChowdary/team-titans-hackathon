import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import CreateTripPage from "./pages/CreateTripPage";
import TripPlannerPage from "./pages/TripPlannerPage";
import PublicTripPage from "./pages/PublicTripPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/create-trip" element={<ProtectedRoute><CreateTripPage /></ProtectedRoute>} />
      <Route path="/trip/:id" element={<ProtectedRoute><TripPlannerPage /></ProtectedRoute>} />
      <Route path="/public/:token" element={<ProtectedRoute><PublicTripPage /></ProtectedRoute>} />
    </Routes>
  );
}

export default App;