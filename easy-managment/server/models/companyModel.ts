import mongoose, { Schema, model } from "mongoose";

const shiftRequestSchema = new Schema({
  date: { type: String },
  shift: { type: String },
  request: { type: Boolean },
});

export const shiftRequestModel = model("shiftRequestModel", shiftRequestSchema);

const rotaSchema = new Schema({
  date: { type: String },
  shift: { type: String },
  employees: { type: Object },
});

export const rotaSchemaModel = model("rotaSchemaModel", rotaSchema);

const employeeSchema = new Schema({
  employeeId: { type: String },
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
  shiftRequests: { type: Object, of: shiftRequestSchema },
});

export const employeeModel = model("employeeModel", employeeSchema);

const companySchema = new Schema({
  id: { type: String },
  name: { type: String },
  companyNumber: { type: Number },
  logo: { type: String },
  employees: { type: Object, of: employeeSchema },
  rota: { type: Object, of: rotaSchema },
});

export const CompanyModel = model("companyModel", companySchema);
