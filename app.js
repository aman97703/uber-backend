const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
const cors = require("cors");
const connectToDb = require("./db/db");
connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const userRoutes = require("./routes/usre.route");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/user", userRoutes);

module.exports = app;
