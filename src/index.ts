import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

import userRoutes from "./routes/users";

mongoose
  .connect(process.env.DB_HOST as string)
  .then(() => console.log("Connected to database!"));

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/my/user", userRoutes);

app.listen(7000, () => {
  console.log("server started on localhost:7000");
});
