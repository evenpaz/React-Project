import express from "express";
import { CompanyModel } from "../models/companyModel";
import { uuid } from "uuidv4";
import upload from "../middelwares/fileUpload";
import { adminEmailUserName, transporter } from "./companies";
import bcrypt from "bcrypt";

const AdminRouter = express.Router();
const saltRounds = 10;

const enrichLogoServerPath = (company: any): any => {
  const newName = `${process.env.SERVER_DOMAIN}:${process.env.PORT}/images/${company.logo}`;
  company.logo = newName;
  return company;
};

require("dotenv").config();
const adminUserName = process.env.ADMIN_USER_NAME;
const adminPassword = process.env.ADMIN_USER_PASSWORD;

const login = async (req: express.Request, res: express.Response) => {
  const { userName, password } = req.body;

  try {
    if (userName == adminUserName && password == adminPassword) {
      res.status(200).send("authorized");
    } else {
      res.status(401).send("bad combination");
    }
  } catch (error) {
    res.status(500).send("internal-error");
  }
};

const getCompanies = async (req: express.Request, res: express.Response) => {
  try {
    let companies = await CompanyModel.find();
    if (companies) {
      console.log(companies);
      companies.map((com) => enrichLogoServerPath(com));

      res.status(200).send(companies);
    } else res.status(404).send("not found");
  } catch (error) {
    res.status(500).send("internal-error");
  }
};
// origin add company!!!!
// const addCompany = async (req: express.Request, res: express.Response) => {
//   let { companyName, companyNumber } = req.body;
//   const image = req.file;
//   const employeeId = uuid();
//   // const hashedPassword = await bcrypt.hash(`${companyName}123`, saltRounds);
//   const newCompany = new CompanyModel({
//     id: uuid(),
//     name: companyName,
//     companyNumber: companyNumber,
//     logo: image?.filename,
//     employees: {
//       [employeeId]: {
//         employeeId: employeeId,
//         personalId: "",
//         firstName: "new",
//         lastName: "user",
//         phone: "",
//         email: "",
//         image: "",
//         birth: new Date(),
//         gender: "",
//         userName: `${companyName}123`,
//         password: `${companyName}123`,
//         employeeType: "",
//         employeePosition: "",
//         shiftRequests: { "": "" },
//       },
//     },
//     rota: [""],
//   });
//   console.log(newCompany);

//   try {
//     const company = await CompanyModel.create(newCompany);
//     res.status(201).send("created");
//   } catch (error) {
//     res.status(500).send("internal-error");
//   }
// };

const addCompany = async (req: express.Request, res: express.Response) => {
  let { companyName, companyNumber } = req.body;
  const image = req.file;
  const employeeId = uuid();
  const hashedPassword = await bcrypt.hash(`${companyName}123`, saltRounds);
  const newCompany = new CompanyModel({
    id: uuid(),
    name: companyName,
    companyNumber: companyNumber,
    logo: image?.filename,
    employees: {
      [employeeId]: {
        employeeId: employeeId,
        personalId: "",
        firstName: "new",
        lastName: "user",
        phone: "",
        email: "",
        image: "",
        birth: new Date(),
        gender: "",
        userName: `${companyName}123`,
        password: hashedPassword,
        employeeType: "",
        employeePosition: "",
        shiftRequests: { "": "" },
      },
    },
    rota: [""],
  });
  console.log(newCompany);

  try {
    const company = await CompanyModel.create(newCompany);
    res.status(201).send("created");
  } catch (error) {
    res.status(500).send("internal-error");
  }
};

const updateCompany = async (req: express.Request, res: express.Response) => {
  const companyData = req.body;
  console.log(companyData);
};

const deleteCompany = async (req: express.Request, res: express.Response) => {
  const { companyId } = req.body;
  console.log(companyId);

  try {
    const deleteCompany = await CompanyModel.findOneAndDelete({
      id: companyId,
    });
    res.status(200).send("deleted");
  } catch (error) {
    res.status(500).send("internal-error");
  }
};

const sendMessageToAdminMail = async (
  req: express.Request,
  res: express.Response
) => {
  const msgData = req.body;

  console.log("req.body:", req.body);

  try {
    transporter.sendMail({
      from: adminEmailUserName,
      to: adminEmailUserName,
      subject: "New message",
      html: `<h1>התקבלה פניה חדשה מלקוח:</h1>
      <h3>שם: ${msgData.fullName}</h3>
      <h3>טלפון: ${msgData.phone}</h3>
      <h3>מייל: ${msgData.email}</h3>
      <h3>סיבת הפניה: ${msgData.subject}</h3>
      <h3>הודעה: ${msgData.textMsg}</h3>
        `,
    });

    res.status(200).send("msg sended");
  } catch (error) {
    res.status(500).send("internal-error");
  }
};

AdminRouter.post("/login", login)
  .post("/add-company", upload.single("image"), addCompany)
  .get("/get-companies", getCompanies)
  .put("/update-company", updateCompany)
  .delete("/delete-company", deleteCompany)
  .post("/send-msg-to-email", sendMessageToAdminMail);
export default AdminRouter;
