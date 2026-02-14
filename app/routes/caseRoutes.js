import express from "express";
import {
  getCases,
  createCase,
  updateCase,
  deleteCase
} from "../controllers/caseControllers.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/cases", protect, getCases);
router.post("/cases", protect, createCase);
router.patch("/cases/:id", protect, updateCase);
router.delete("/cases/:id", protect, deleteCase);

export default router;
