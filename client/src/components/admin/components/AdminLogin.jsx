import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({
    email: "admin@99bowls.in", // default admin email
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Hardcoded admin credentials for demo
    const ADMIN_EMAIL = "admin@99bowls.in";
    const ADMIN_PASSWORD = "admin123"; // You should use a more secure password in production

    try {
      if (
        credentials.email === ADMIN_EMAIL &&
        credentials.password === ADMIN_PASSWORD
      ) {
        // Set a simple token in localStorage
        localStorage.setItem("adminToken", "admin-authenticated");
        toast.success("Login successful!");
        navigate("/admin");
      } else {
        toast.error("Invalid credentials");
      }
    } catch (error) {
      toast.error("Login failed");
    }
  };

  return (
    <div className="auth-layout">
      <div className="admin-login">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
              value={credentials.email}
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white p-2 rounded hover:bg-primary/90"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
