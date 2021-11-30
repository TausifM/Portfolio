const http = require("http");
const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./router/userRouter.js");
const path = require("path");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect(
  "mongodb+srv://Tausif01:Tausif123Shama@cluster0.xsmwf.mongodb.net/PUser?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
app.use("/api/users", userRouter);
const port = process.env.PORT || 5015;

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});
const httpServer = http.Server(app);
httpServer.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
// const server = app.listen(process.env.PORT, () => {
//   console.log(`Server is working on http://localhost:${process.env.PORT}`);
// });
