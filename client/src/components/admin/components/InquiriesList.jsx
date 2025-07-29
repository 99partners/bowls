import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";

const InquiriesList = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://api.99bowls.in/api/inquiries");
      setInquiries(response.data);
    } catch (error) {
      toast.error("Failed to fetch inquiries");
      console.error("Error fetching inquiries:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="content-section">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="content-section">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Inquiries</h2>
        <button
          onClick={fetchInquiries}
          className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
        >
          Refresh
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Phone
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Message
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {inquiries.map((inquiry) => (
              <tr key={inquiry._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {inquiry.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {inquiry.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {inquiry.phone || "N/A"}
                </td>
                <td className="px-6 py-4 text-sm">
                  <div className="max-w-xs overflow-hidden text-ellipsis">
                    {inquiry.message}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {new Date(inquiry.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {inquiries.length === 0 && (
        <div className="text-center py-8 text-gray-500">No inquiries found</div>
      )}
    </div>
  );
};

export default InquiriesList;
