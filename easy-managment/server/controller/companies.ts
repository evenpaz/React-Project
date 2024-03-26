import express from "express";
import { CompanyModel } from "../models/companyModel";
import upload from "../middelwares/fileUpload";
import { uuid } from "uuidv4";
import nodemailer from "nodemailer";
import bcrypt from "bcrypt";
// import {
// addUserTokens,
// authMiddleware,
// removeUserToken,
// } from "../middelwares/auth";
// import jwt, { JwtPayload } from "jsonwebtoken";

export const saltRounds = 10;
let storedCompanyData: any = {
  companyId: "blank-company",
  employeeId: "blank-employee",
};

require("dotenv").config();

export const adminEmailUserName = process.env.ADMIN_EMAIL_USERNAME;
const adminEmailPassword = process.env.ADMIN_EMAIL_PASSWORD;
const adminEmailService = process.env.ADMIN_EMAIL_SERVICE;
const expirationTime = `${
  Number(process.env.EXPIRATION_TIME_IN_MS) || 3600000
}ms`;

export const transporter = nodemailer.createTransport({
  host: adminEmailService,
  secure: false,
  port: 587,
  auth: {
    user: adminEmailUserName,
    pass: adminEmailPassword,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const companyRouter = express.Router();

const enrichImageServerPath = (employee: any): any => {
  const newName = `${process.env.SERVER_DOMAIN}:${process.env.PORT}/images/${employee.image}`;
  employee.image = newName;
  return employee;
};
const enrichLogoServerPath = (image: any): any => {
  const newName = `${process.env.SERVER_DOMAIN}:${process.env.PORT}/images/${image}`;
  image = newName;
  return image;
};
// origin login
// const login = async (req: express.Request, res: express.Response) => {
//   const { userName, password, companyNumber } = req.body;
//   console.log("req.body", { userName, password, companyNumber });

//   try {
//     const company = await CompanyModel.findOne({
//       companyNumber,
//     });
//     if (company) {
//       console.log("company", company);

//       const employeesValuesArr = Object.values(company.employees);
//       console.log("employeesValuesArr", employeesValuesArr);

//       const employee: any = employeesValuesArr.find(
//         (e: any) => e.userName === userName && e.password === password
//       );
//       if (!employee) {
//         res.status(401).send("bad-combination");
//       } else {
//         console.log("employee:", employee);

//         storedCompanyData = {
//           companyId: company.id,
//           employeeId: employee.employeeId,
//         };

//         res.status(200).send(storedCompanyData);
//       }
//     } else res.status(404).send("company not found");
//   } catch {
//     res.status(500).send("internal-error");
//   }
// };

const login = async (req: express.Request, res: express.Response) => {
  const { userName, password, companyNumber } = req.body;
  console.log("req.body", { userName, password, companyNumber });

  try {
    const company = await CompanyModel.findOne({
      companyNumber,
    });
    if (company) {
      console.log("company", company);

      const employeesValuesArr = Object.values(company.employees);
      console.log("employeesValuesArr", employeesValuesArr);

      const employee: any = employeesValuesArr.find(
        (e: any) => e.userName === userName
      );
      if (!employee) {
        res.status(401).send("bad-combination");
      } else {
        console.log("employee:", employee);
        const isValidPassword = await bcrypt.compare(
          password,
          employee.password as string
        );
        if (!isValidPassword) {
          console.log("!isValidPassword herrreee");
          res.status(401).send("bad-combination");
        } else {
          console.log("look here");

          storedCompanyData = {
            companyId: company.id,
            employeeId: employee.employeeId,
          };

          res.status(200).send(storedCompanyData);

          // const payload = {
          //   companyId: company.id,
          //   employeeId: employee.employeeId,
          //   iat: Math.floor(Date.now() / 1000),
          // };
          // console.log("payload", payload);

          // const accessToken = jwt.sign(
          //   payload,
          //   process.env.ACCESS_TOKEN_SECRET as string,
          //   { expiresIn: expirationTime }
          // );

          // console.log("accessToken", accessToken);

          // const refreshToken = jwt.sign(
          //   payload,
          //   process.env.ACCESS_TOKEN_SECRET as string
          // );
          // addUserTokens(employee.employeeId, accessToken, refreshToken);
          // res.json({ accessToken, refreshToken });
        }
      }
    } else res.status(404).send("company not found");
  } catch {
    res.status(500).send("internal-error");
  }
};

// const logout = async (req: express.Request, res: express.Response) => {
//   try {
//     const employeePayload = req.user;
//     const { refreshToken } = req.body;
//     const authHeader = req.headers.authorization;
//     const accessToken = authHeader?.split(" ")[1] as string;
//     removeUserToken(
//       employeePayload?.personalId as string,
//       accessToken,
//       refreshToken
//     );
//     res.send("token removed");
//   } catch (error) {
//     res.status(500).render("internal-error");
//   }
// };

const forgotPassword = async (req: express.Request, res: express.Response) => {
  const { companyNumber, email } = req.body;
  console.log("typeof companyNumber", typeof companyNumber);
  console.log("typeof email", typeof email);
  console.log("{ companyNum, email } ", { companyNumber, email });
  try {
    const company = await CompanyModel.findOne(
      { email } && {
        companyNumber,
      }
    );
    if (company) {
      const employeesValuesArr = Object.values(company.employees);
      const employee: any = employeesValuesArr.find(
        (e: any) => e.email === email
      );
      const userName = employee.userName;
      const password = employee.password;
      console.log("userName", userName);
      console.log("password", password);

      transporter.sendMail({
        from: adminEmailUserName,
        to: email,
        subject: "Forgot password",
        text: `this is your info:
  company number: ${companyNumber},
  user name: ${userName},
  password: ${password}
  `,
      });
      res.status(200).send("email sent successfully");
    }
  } catch (error) {
    res.status(500).send("internal-error");
  }
};

const getCompanyData = async (req: express.Request, res: express.Response) => {
  const companyId = storedCompanyData.companyId;
  const employeeId = storedCompanyData.employeeId;
  // console.log("storedCompanyData.companyId: ", storedCompanyData.companyId);
  // console.log("storedCompanyData.employeeId: ", storedCompanyData.employeeId);
  try {
    if (companyId && employeeId) {
      // console.log("here");

      const company = await CompanyModel.findOne({ id: companyId });
      // console.log("company:", company);

      const employeeData = company?.employees[employeeId];
      // console.log("employeeData", employeeData);
      if (company) {
        const employeesValuesArr = Object.values(company.employees);
        const employee = employeesValuesArr.find(
          (e: any) => e.employeeId === employeeId
        );

        const companyData = {
          name: company.name,
          logo: enrichLogoServerPath(company?.logo),
          rota: company?.rota,
          companyId: company.id,
          employeeData: employeeData,
          employees: employeesValuesArr.map((e: any) =>
            enrichImageServerPath(e)
          ),
        };
        res.status(200).send(companyData);
      } else {
        res.status(404).send("not found company or employee");
      }
    } else {
      res.status(404).send("not found company or employee");
    }
  } catch (error) {
    res.status(500).send("internal-error");
  }
};

const handleAddEmployee = async (employee: any, id: string) => {
  try {
    const updateCompany = await CompanyModel.findOneAndUpdate(
      { id },
      { $set: { [`employees.${employee.employeeId}`]: employee } }
    );
    console.log("company updated with the new employee:", employee);
  } catch (error) {
    console.error(error);
  }
};
//origin add employee
// const addEmployee = async (req: express.Request, res: express.Response) => {
//   try {
//     let employeeData = req.body;
//     console.log("employeeData", employeeData);

//     const image = req.file;
//     employeeData.employeeId = uuid();
//     const companyId = employeeData.companyId;
//     delete employeeData.companyId;
//     employeeData.image = image?.filename;
//     employeeData.shiftRequests = {};
//     // employeeData.password = await bcrypt.hash(
//     //   employeeData.password,
//     //   saltRounds
//     // );
//     // console.log("employeeData.password after hash", employeeData.password);
//     handleAddEmployee(employeeData, companyId);
//     res.status(200).send("ok");
//   } catch (error) {
//     console.error(error);
//   }
// };

const addEmployee = async (req: express.Request, res: express.Response) => {
  try {
    let employeeData = req.body;
    console.log("employeeData", employeeData);

    const image = req.file;
    employeeData.employeeId = uuid();
    const companyId = employeeData.companyId;
    delete employeeData.companyId;
    employeeData.image = image?.filename;
    employeeData.shiftRequests = {};
    employeeData.password = await bcrypt.hash(
      employeeData.password,
      saltRounds
    );
    console.log("employeeData.password after hash", employeeData.password);
    handleAddEmployee(employeeData, companyId);
    res.status(200).send("ok");
  } catch (error) {
    console.error(error);
  }
};

const deleteEmployee = async (req: express.Request, res: express.Response) => {
  try {
    const employeeId = req.body.employeeId;
    const id = req.body.companyId;

    const updateCompany = await CompanyModel.findOneAndUpdate(
      { id },
      { $unset: { [`employees.${employeeId}`]: employeeId } }
    );
    res.status(200).send("delete successfully");
  } catch (error) {
    res.status(500).render("internal-error");
  }
};

// origin updateEmployee
// const updateEmployee = async (req: express.Request, res: express.Response) => {
//   try {
//     let employeeData = req.body;
//     const image = req.file;
//     const id = employeeData.companyId;
//     delete employeeData.companyId;
//     employeeData.image = image?.filename;
//     console.log("employeeData", employeeData);
//     console.log("id", id);
//     try {
//       const employee: any = await searchEmployee(id, employeeData.employeeId);
//       if (employee == -1) {
//         res.status(500).send("internal-error");
//       }
//       if (employee != -1) {
//         console.log("employee", employee);

//         // const hashedPassword = await bcrypt.hash(
//         //   employeeData.password,
//         //   saltRounds
//         // );
//         console.log("employeeData.password", employeeData.password);
//         // console.log("hashedPassword", hashedPassword);

//         // employeeData.password = hashedPassword;

//         if (employeeData.image == undefined) {
//           console.log("in if loop because employeeData.image == undefined");
//           try {
//             employeeData.image = employee.image;
//             const updateCompany = await CompanyModel.findOneAndUpdate(
//               { id },
//               {
//                 $set: {
//                   [`employees.${employeeData.employeeId}`]: employeeData,
//                 },
//               }
//             );
//             res.status(200).send("ok");
//           } catch (error) {
//             res.status(404).send("not-found");
//           }
//         } else {
//           console.log("in else loop because employeeData.image == something");
//           try {
//             const updateCompany = await CompanyModel.findOneAndUpdate(
//               { id },
//               {
//                 $set: {
//                   [`employees.${employeeData.employeeId}`]: employeeData,
//                 },
//               }
//             );

//             console.log("updateCompany,", updateCompany);
//             console.log(
//               "updateCompany?.employees.employee",
//               updateCompany?.employees[employeeData.employeeId]
//             );

//             res.status(200).send("ok");
//           } catch (error) {
//             res.status(404).send("not-found");
//           }
//         }
//       }
//     } catch (error) {
//       res.status(500).send("internal-error");
//     }

//     //
//   } catch (error) {
//     res.status(500).send("internal-error");
//   }
// };

const updateEmployee = async (req: express.Request, res: express.Response) => {
  try {
    let employeeData = req.body;
    const image = req.file;
    const id = employeeData.companyId;
    delete employeeData.companyId;
    employeeData.image = image?.filename;
    console.log("employeeData", employeeData);
    console.log("id", id);
    try {
      const employee: any = await searchEmployee(id, employeeData.employeeId);
      if (employee == -1) {
        res.status(500).send("internal-error");
      }
      if (employee != -1) {
        console.log("employee", employee);

        const hashedPassword = await bcrypt.hash(
          employeeData.password,
          saltRounds
        );
        console.log("employeeData.password", employeeData.password);
        console.log("hashedPassword", hashedPassword);

        employeeData.password = hashedPassword;

        if (employeeData.image == undefined) {
          console.log("in if loop because employeeData.image == undefined");
          try {
            employeeData.image = employee.image;
            const updateCompany = await CompanyModel.findOneAndUpdate(
              { id },
              {
                $set: {
                  [`employees.${employeeData.employeeId}`]: employeeData,
                },
              }
            );
            res.status(200).send("ok");
          } catch (error) {
            res.status(404).send("not-found");
          }
        } else {
          console.log("in else loop because employeeData.image == something");
          try {
            const updateCompany = await CompanyModel.findOneAndUpdate(
              { id },
              {
                $set: {
                  [`employees.${employeeData.employeeId}`]: employeeData,
                },
              }
            );

            console.log("updateCompany,", updateCompany);
            console.log(
              "updateCompany?.employees.employee",
              updateCompany?.employees[employeeData.employeeId]
            );

            res.status(200).send("ok");
          } catch (error) {
            res.status(404).send("not-found");
          }
        }
      }
    } catch (error) {
      res.status(500).send("internal-error");
    }

    //
  } catch (error) {
    res.status(500).send("internal-error");
  }
};

const searchEmployee = async (id: string, employeeId: string) => {
  try {
    const company = await CompanyModel.findOne({ id });
    if (company) {
      const employee: any = company.employees[employeeId];
      return employee;
    } else {
      const employee = -1;
      return employee;
    }
  } catch (error) {
    console.error(error);
    const employee = -1;
    return employee;
  }
};

type reqType = { date: string; shift: string; request: boolean };

const updateEmployeeShiftRequest = async (
  req: express.Request,
  res: express.Response
) => {
  const { companyId, employeeId, updateShiftReq } = req.body;
  console.log("{ companyId, employeeId,shiftRequest }:", {
    companyId,
    employeeId,
    updateShiftReq,
  });
  const id = companyId;
  const shiftReq: Record<any, reqType> = updateShiftReq;
  console.log("shiftReq:", shiftReq);
  try {
    const employee: any = await searchEmployee(id, employeeId);
    if (employee == -1) {
      res.status(500).send("internal-error");
    }
    if (employee != -1) {
      // let shiftReqDb: any = employee.shiftRequests;
      console.log("shiftReq from Db", employee.shiftRequests);

      for (const [key, req] of Object.entries(shiftReq)) {
        if (!(key in employee.shiftRequests)) {
          if (req.request == true) {
            employee.shiftRequests[key] = req;
            console.log("here1: ", employee.shiftRequests[key]);
          }
        } else {
          let sameReq = shiftReq[key];
          console.log("here2", sameReq);

          if (sameReq.request === employee.shiftRequests[key].request) {
            console.log("here3", sameReq, employee.shiftRequests[key]);
          }
          if (sameReq.request !== employee.shiftRequests[key].request) {
            console.log("here4", sameReq, req);

            delete employee.shiftRequests[key];
            console.log(employee.shiftRequests[key]);
          }
        }
      }
      console.log("shiftReqDb after for loop", employee.shiftRequests);

      try {
        await CompanyModel.findOneAndUpdate(
          { id },
          {
            $set: {
              [`employees.${employeeId}.shiftRequests`]: employee.shiftRequests,
            },
          }
        );
        res.status(200).send("ok");
      } catch (error) {
        res.status(500).send("internal-error");
      }
    }
  } catch {
    res.status(500).send("internal-error");
  }
};

const updateCompanyRota = async (
  req: express.Request,
  res: express.Response
) => {
  const { companyId, emp } = req.body;
  const id = companyId;
  try {
    console.log("companyId:", companyId);
    console.log("rota", emp);

    const updateCompany = await CompanyModel.findOneAndUpdate(
      { id },
      { $set: { rota: emp } }
    );
    console.log("rota updated");

    res.status(200).send("ok");
  } catch (error) {
    res.status(500).send("internal-error");
  }
};

//

companyRouter
  .post("/login", login)
  // .post("/logout", authMiddleware, logout)
  .post("/api/forgot-password", forgotPassword)
  .get("/api/", getCompanyData)
  .put("/api/add-employee", upload.single("image"), addEmployee)
  .put("/api/delete-employee", deleteEmployee)
  .post("/api/update-employee", upload.single("image"), updateEmployee)
  .put("/api/shift-requests", updateEmployeeShiftRequest)
  .put("/api/current-rota", updateCompanyRota);
export default companyRouter;
