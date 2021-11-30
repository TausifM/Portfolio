dotenv.config();
import http from "http";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./router/userRouter.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect(
  "mongodb+srv://Tausif01:Tausif123Shama@cluster0.xsmwf.mongodb.net/PUser?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
app.get("/", (req, res) => {
  res.send("Server is ready");
});
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
app.use("/api/users", userRouter);
const port = process.env.PORT || 5010;

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});
const httpServer = http.Server(app);
httpServer.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
