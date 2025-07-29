import express from "express";
const router = express.Router();
import { getContactCount } from "../controllers/contactController.js";
import { getInquiryCount } from "../controllers/inquiryController.js";


// GET /api/admin/stats – dashboard summary
router.get("/stats", async (req, res) => {
  try {
    const [contactCount, inquiryCount] = await Promise.all([
      getContactCount(),
      getInquiryCount()
    ]); 

    res.json({
      totalContacts: contactCount,
      totalInquiries: inquiryCount
    });
  } catch (err) {
    console.error("Error fetching dashboard stats:", err);
    res.status(500).json({ message: "Failed to fetch stats" });
  }
});

export default router;
