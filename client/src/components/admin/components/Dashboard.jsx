import React, { useEffect, useState } from "react";
import axiosInstance from "../../../config/axios";
import "../styles/main.css";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalContacts: 0,
    totalInquiries: 0
  });

  const fetchStats = async () => {
    try {
      const res = await axiosInstance.get("/admin/stats");
      setStats(res.data);
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div className="content-section">
      <h2>Dashboard</h2>
      <p>Welcome back! Here's the latest data from your admin panel.</p>

      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Contacts</h3>
          <p>{stats.totalContacts}</p>
        </div>

        <div className="stat-card">
          <h3>Total Inquiries</h3>
          <p>{stats.totalInquiries}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
