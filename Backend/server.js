import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import dataRouter from "./routes/dataRoutes.js";
import cookieParser from "cookie-parser";

const app = express();

connectDB();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser())
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("servers is runing");
});
app.use("/api/auth", authRoutes);
app.use("/api", dataRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server is runing on port ${PORT}`);
});
