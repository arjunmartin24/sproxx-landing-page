import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../Login";

export default function LoginGate() {
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    if (isLoggedIn) {
      navigate("/gridaccess", { replace: true });
    }
  }, [navigate]);

  const handleLogin = () => {
    // Store login state in localStorage
    localStorage.setItem("loggedIn", "true");
    // Navigate to gridaccess page after successful login
    navigate("/gridaccess", { replace: true });
  };

  return <Login onLogin={handleLogin} isModal={false} />;
}

