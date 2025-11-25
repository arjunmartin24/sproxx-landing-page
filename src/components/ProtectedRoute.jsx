import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  // Check if user is logged in via localStorage
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  if (!isLoggedIn) {
    // Redirect to login if not authenticated
    return <Navigate to="/" replace />;
  }

  return children;
}

