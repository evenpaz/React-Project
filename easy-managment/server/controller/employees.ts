// import express from "express";
// import { EmployeeModel } from "../models/employeeModel";
// import upload from "../middelwares/fileUpload";
// import { uuid } from "uuidv4";

// const enrichImageServerPath = (employee: any): any => {
//   const newName = `${process.env.SERVER_DOMAIN}:${process.env.PORT}/images/${employee.image}`;
//   employee.image = newName;
//   return employee;
// };

// const employeeRouter = express.Router();

// // show employees from db

// const getEmployees = async (req: express.Request, res: express.Response) => {
//   try {
//     let employees = await EmployeeModel.find();
//     employees = employees.map((employee) => enrichImageServerPath(employee));
//     res.status(200).send(employees);
//   } catch (error) {
//     // console.error(error);
//     res.status(500).send("internal-error");
//   }
// };

// //   create new employee in the db

// const createEmployee = async (req: express.Request, res: express.Response) => {
//   //   console.log("here before the try");
//   try {
//     const image = req.file;
//     console.log("image :" + image);
//     console.log(req.body);
//     const {
//       personalId,
//       firstName,
//       lastName,
//       phone,
//       email,
//       birth,
//       gender,
//       userName,
//       password,
//       employeePosition,
//       employeeType,
//     } = req.body;
//     const id = uuid();
//     const companyId = "100";
//     console.log("personalId: ", personalId);
//     // console.log("newEmployeeData: " + newEmployeeData);
//     await EmployeeModel.create({
//       id,
//       personalId,
//       firstName,
//       lastName,
//       phone,
//       email,
//       birth,
//       gender,
//       userName,
//       password,
//       employeePosition,
//       employeeType,
//       image: image?.filename,
//       companyId,
//     });
//     // console.log("new employee: " + newEmployee);

//     res.status(200).send("created successfully");
//   } catch (error) {
//     console.log("here in the catch");
//     res.status(500).send("internal-error");
//   }
// };
// // update employee in db

// const updateEmployee = async (req: express.Request, res: express.Response) => {
//   try {
//     console.log(req.body);
//   } catch (error) {
//     console.error(error);
//   }
// };

// // delete employee from db
// const deleteEmployee = async (req: express.Request, res: express.Response) => {
//   try {
//     const { id, firstName, lastName } = req.body;
//     if (id) {
//       const employeeToDelete = await EmployeeModel.findOneAndDelete({ id });
//       if (employeeToDelete) {
//         console.log(`${firstName} ${lastName} has been deleted`);
//         res.send("deleted successfully");
//       }
//     }
//   } catch (error) {
//     res.status(500).render("internal-error");
//   }
// };

// employeeRouter
//   .put("/create", upload.single("image"), createEmployee)
//   .put("/update", updateEmployee)
//   .delete("/delete", deleteEmployee)
//   .get("/", getEmployees);

// export default employeeRouter;
