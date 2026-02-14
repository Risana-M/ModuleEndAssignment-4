import mongoose from "mongoose";

const caseSchema = mongoose.Schema({
  customer_id: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
  assigned_to: String,
  priority: String,
  status: { type: String, default: "open" },
  created_at: { type: Date, default: Date.now }
});

export default mongoose.model("Case", caseSchema);
