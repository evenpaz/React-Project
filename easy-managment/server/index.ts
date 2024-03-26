import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import companyRouter from "./controller/companies";
// import { CompanyModel, employeeModel } from "./models/companyModel";
// import { uuid } from "uuidv4";
import AdminRouter from "./controller/admin";
// import { authMiddleware } from "./middelwares/auth";

require("dotenv").config();

const app = express();
const port = process.env.PORT;
const mongoUri = process.env.MONGO_URI as string;

app.set("view engine", "ejs");

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log("mongoDB is connected");
  })
  .catch((err) => {
    console.error(err);
  });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/images", express.static("./Images"));

// app.use("/api", authMiddleware);

app.use("/companies", companyRouter);
app.use("/admin", AdminRouter);

// app.use("*", (req, res) => {
//   res.render("not-found");
// });

app.get("/", function (req, res) {
  res.send("hello");
});

app.listen(port, () => console.log(`listening on port: ${port}`));
