import express from "express";
import {
  getCustomers,
  addCustomer,
  updateCustomer,
  deleteCustomer
} from "../controllers/customerControllers.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/customers", protect, getCustomers);
router.post("/customers", protect, addCustomer);
router.patch("/customers/:id", protect, updateCustomer);
router.delete("/customers/:id", protect, deleteCustomer);

export default router;
