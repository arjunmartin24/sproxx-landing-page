import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LoginGate from "./components/LoginGate";
import GridAccess from "./GridAccess";
import ProtectedRoute from "./components/ProtectedRoute";
import "./index.css";

export default function App() {
  return (
    <Routes>
      {/* Root route - shows Terminus landing page */}
      <Route path="/" element={<LandingPage />} />
      
      {/* Login page route */}
      <Route path="/login" element={<LoginGate />} />
      
      {/* Protected route - only accessible after login */}
      <Route 
        path="/gridaccess" 
        element={
          <ProtectedRoute>
            <GridAccess />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
