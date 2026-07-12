import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import jobsRouter from "./routes/jobs.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

// connect to MongoDB
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// job routes
app.use('/api/jobs', jobsRouter);
app.use('/api/users', userRoutes);

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}    
);