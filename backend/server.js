import http from "http";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./router/userRouter.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/myportfolio", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
app.get("/", (req, res) => {
  res.send("Server is ready");
});
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
app.use("/api/users", userRouter);
const port = process.env.PORT || 5000;

const httpServer = http.Server(app);
httpServer.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
