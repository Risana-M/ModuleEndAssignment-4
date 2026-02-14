import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";



import authRoutes from "./app/routes/authRoutes.js";
import customerRoutes from "./app/routes/customerRoutes.js";
import caseRoutes from "./app/routes/caseRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api", customerRoutes);
app.use("/api", caseRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);

