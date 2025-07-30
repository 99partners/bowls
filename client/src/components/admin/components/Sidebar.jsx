import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";

const Sidebar = () => {
  return (
    <aside className="admin-sidebar">
      <h1 className="sidebar-title">99 Bowls</h1>
      <h2>Admin Panel</h2>
      <nav>
        <ul>
          <li>
            <Link to="/admin">Dashboard</Link>
          </li>
          <li>
            <Link to="/admin/inquiries">Inquiries</Link>
          </li>
          <li>
            <Link to="/admin/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
