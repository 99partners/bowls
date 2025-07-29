import React, { useEffect, useState } from "react";
import axiosInstance from "../../../config/axios";
import "../styles/main.css";

const ContactManagement = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axiosInstance.get("/api/contacts");
        setContacts(res.data.data); // ✅ access the `data` key
      } catch (err) {
        console.error("❌ Failed to fetch contacts:", err);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div className="content-section">
      <h2>Contact Management</h2>
      <p>Manage customer inquiries and messages</p>

      <h3>Contact Messages</h3>
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>{contact.message}</td>
              <td>{new Date(contact.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactManagement;
