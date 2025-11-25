import { Routes, Route } from "react-router-dom";
import LoginGate from "./components/LoginGate";
import GridAccess from "./GridAccess";
import ProtectedRoute from "./components/ProtectedRoute";
import "./index.css";

export default function App() {
  return (
    <Routes>
      {/* Root route - shows login gate */}
      <Route path="/" element={<LoginGate />} />
      
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
