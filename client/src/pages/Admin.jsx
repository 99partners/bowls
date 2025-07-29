import React, { useEffect, useState } from "react";
import API_CONFIG from "../config/api";

const Admin = () => {
  const [contactCount, setContactCount] = useState(0);
  const [inquiryCount, setInquiryCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        setLoading(true);
        setError("");
        const [contactRes, inquiryRes] = await Promise.all([
          fetch(`${API_CONFIG.baseUrl}/api/contacts/count`),
          fetch(`${API_CONFIG.baseUrl}/api/inquiries/count`)
        ]);
        const contactData = await contactRes.json();
        const inquiryData = await inquiryRes.json();
        setContactCount(contactData.count || 0);
        setInquiryCount(inquiryData.count || 0);
      } catch (err) {
        setError("Failed to fetch counts");
      } finally {
        setLoading(false);
      }
    };
    fetchCounts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Admin <span className="text-orange-500">Dashboard</span>
        </h1>
        {loading ? (
          <div className="text-lg text-gray-600 text-center">Loading...</div>
        ) : error ? (
          <div className="text-lg text-red-600 text-center">{error}</div>
        ) : (
          <div className="flex justify-center gap-8 mb-10">
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="text-2xl font-bold text-orange-600">{contactCount}</div>
              <div className="text-gray-700">Contact Forms</div>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="text-2xl font-bold text-orange-600">{inquiryCount}</div>
              <div className="text-gray-700">Inquiries</div>
            </div>
          </div>
        )}
        {/* You can add tables or details below as needed */}
      </div>
    </div>
  );
};

export default Admin;