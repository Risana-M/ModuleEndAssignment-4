import mongoose from "mongoose";

const customerSchema = mongoose.Schema({
  name: { type: String, required: true },
  contact_info: String,
  status: { type: String, default: "active" }
});

export default mongoose.model("Customer", customerSchema);
