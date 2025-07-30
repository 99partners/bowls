// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "../styles/main.css";
// import {
//   FaTachometerAlt,
//   FaEnvelope,
//   FaAddressBook,
//   FaSignOutAlt
// } from "react-icons/fa";

// const Sidebar = () => {

//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("adminToken");
//     navigate("/admin/login");
//   };

//   return (
//     <aside className="admin-sidebar">
//       <div className="sidebar-header">
//         <img src="/logo.png" alt="99 Bowls Logo" className="sidebar-logo" />
//         <h1 className="sidebar-title">99 Bowls</h1>
//       </div>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/admin" className="sidebar-link">
//               <FaTachometerAlt className="sidebar-link-icon" />
//               <span>Dashboard</span>
//             </Link>
//           </li>
//           <li>
//             <Link to="/admin/inquiries" className="sidebar-link">
//               <FaEnvelope className="sidebar-link-icon" />
//               <span>Inquiries</span>
//             </Link>
//           </li>
//           <li>
//             <Link to="/admin/contacts" className="sidebar-link">
//               <FaAddressBook className="sidebar-link-icon" />
//               <span>Contacts</span>
//             </Link>
//           </li>
//         </ul>
//       </nav>

//       <div className="sidebar-footer">
//         <a onClick={handleLogout} className="logout-button">
//           <FaSignOutAlt className="logout-icon" />
//           <span>Logout</span>
//         </a>
//       </div>

//     </aside>
//   );
// };

// export default Sidebar;

import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/main.css";
import {
  FaTachometerAlt,
  FaEnvelope,
  FaAddressBook,
  FaSignOutAlt
} from "react-icons/fa";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <aside className="admin-sidebar">
      <div className="sidebar-header">
        <img src="/logo.png" alt="99 Bowls Logo" className="sidebar-logo" />
        <h1 className="sidebar-title">99 Bowls</h1>
      </div>
      
      <nav>
        <ul>
          <li>
            <NavLink
              to="/admin"
              className={({ isActive }) => 
                isActive ? "sidebar-link active" : "sidebar-link"
              }
              end
            >
              <FaTachometerAlt className="sidebar-link-icon" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/inquiries"
              className={({ isActive }) => 
                isActive ? "sidebar-link active" : "sidebar-link"
              }
            >
              <FaEnvelope className="sidebar-link-icon" />
              <span>Inquiries</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/contacts"
              className={({ isActive }) => 
                isActive ? "sidebar-link active" : "sidebar-link"
              }
            >
              <FaAddressBook className="sidebar-link-icon" />
              <span>Contacts</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="sidebar-footer">
        <button onClick={handleLogout} className="logout-button">
          <FaSignOutAlt className="logout-icon" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;