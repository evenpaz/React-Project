import { Schema, model } from "mongoose";

const employeeSchema = new Schema({
  id: { type: String },
  personalId: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  phone: { type: String },
  email: { type: String },
  image: { type: String },
  birth: { type: Date },
  gender: { type: String },
  userName: { type: String },
  password: { type: String },
  employeeType: { type: String },
  employeePosition: { type: String },
  companyId: { type: String },
});

export const EmployeeModel = model("employeeModel", employeeSchema);
