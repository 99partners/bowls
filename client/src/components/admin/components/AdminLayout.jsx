import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header"; // Import the Header component
import "../styles/admin.css";

const AdminLayout = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const isAuthenticated = localStorage.getItem("adminToken");

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" />;
  }

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <div className="admin-layout">
      <Sidebar />
      <main className="admin-main">
        <Header onLogout={handleLogout} />
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
