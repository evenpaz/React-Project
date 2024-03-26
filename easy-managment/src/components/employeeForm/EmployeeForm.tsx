import { FormEvent, useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import "./employeeForm.scss";
import { noFileChoose } from "../../assets/lorem/lorem";
import { CostumersContext } from "../../context/CostumersProvider";

export interface newEmployeeData {
  employeeId: string;
  personalId: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  image: string;
  birth: Date;
  gender: string;
  userName: string;
  password: string;
  employeeType: string;
  employeePosition: string;
  companyId: string;
}

type EmployeeFormProps = {
  title: string;
  btnText: string;
  handelClick: string;
  empToUpdate?: any;
};

const EmployeeForm = ({
  title,
  btnText,
  handelClick,
  empToUpdate,
}: EmployeeFormProps) => {
  const { state: companyData } = useContext(CostumersContext);
  const [showPass, setShowPass] = useState(false);
  const [EmployeeData, setEmployeeData] = useState<newEmployeeData>({
    employeeId: "",
    personalId: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    image: "",
    birth: new Date(),
    gender: "",
    password: "",
    userName: "",
    employeeType: "",
    employeePosition: "",
    companyId: "",
  });

  const [fileName, setFileName] = useState(noFileChoose);

  useEffect(() => {
    console.log("EmployeeData:", EmployeeData);
    console.log("empIdToUpdate", empToUpdate);
    if (empToUpdate && Object.keys(empToUpdate).length > 0) {
      setEmployeeData(empToUpdate);
      console.log("here");
      console.log("EmployeeData:", EmployeeData.employeeId);
    }
  }, [empToUpdate]);
  const handleUploadImage = (event: any) => {
    setEmployeeData({ ...EmployeeData, image: event.target.files[0] });
    setFileName(event.target.files[0].name);
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setEmployeeData({
      ...EmployeeData,
      [name]: value,
    });
  };

  const handleAddEmployee = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const data = new FormData();
      data.append("companyId", companyData.companyId);
      data.append("employeeId", "null");
      data.append("personalId", EmployeeData.personalId);
      data.append("firstName", EmployeeData.firstName);
      data.append("lastName", EmployeeData.lastName);
      data.append("phone", EmployeeData.phone);
      data.append("email", EmployeeData.email);
      data.append("image", EmployeeData.image);
      data.append("birth", EmployeeData.birth);
      data.append("gender", EmployeeData.gender);
      data.append("userName", EmployeeData.userName);
      data.append("password", EmployeeData.password);
      data.append("employeeType", EmployeeData.employeeType);
      data.append("employeePosition", EmployeeData.employeePosition);

      fetch("http://localhost:4000/companies/api/add-employee", {
        method: "PUT",
        body: data,
      });
      console.log("response:", data);
      console.log("newEmployeeData.image:", EmployeeData.image);
      // window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateEmployee = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("hi");

    try {
      const data = new FormData();
      data.append("employeeId", EmployeeData.employeeId);
      data.append("companyId", companyData.companyId);
      data.append("personalId", EmployeeData.personalId);
      data.append("firstName", EmployeeData.firstName);
      data.append("lastName", EmployeeData.lastName);
      data.append("phone", EmployeeData.phone);
      data.append("email", EmployeeData.email);
      data.append("image", EmployeeData.image);
      data.append("birth", EmployeeData.birth);
      data.append("gender", EmployeeData.gender);
      data.append("userName", EmployeeData.userName);
      data.append("password", EmployeeData.password);
      data.append("employeeType", EmployeeData.employeeType);
      data.append("employeePosition", EmployeeData.employeePosition);
      fetch("http://localhost:4000/companies/api/update-employee", {
        method: "POST",
        body: data,
      });
      console.log("response:", data);
      console.log("newEmployeeData.image:", EmployeeData.image);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1>{title}</h1>
      <form
        className="EmployeeForm"
        onSubmit={
          handelClick == "addEmployee"
            ? handleAddEmployee
            : handleUpdateEmployee
        }
      >
        <div className="EmployeeForm-spacer">
          <input
            type="text"
            id="userName"
            name="userName"
            placeholder={"שם משתמש"}
            value={EmployeeData.userName}
            onChange={handleInputChange}
            minLength={6}
            required
          />
          <span id="--form__password-line">
            <i
              id="showPassword"
              onClick={() => {
                setShowPass(!showPass);
              }}
            >
              {showPass ? <FaEye size="1.5em" /> : <FaEyeSlash size="1.5em" />}
            </i>
            <input
              type={showPass ? "text" : "password"}
              id="password"
              name="password"
              value={EmployeeData.password}
              onChange={handleInputChange}
              placeholder="סיסמא"
              minLength={6}
              required
            />
          </span>
        </div>
        <div className="EmployeeForm-spacer">
          <select
            name="employeeType"
            id="employeeType"
            value={EmployeeData.employeeType}
            onChange={handleInputChange}
            required
          >
            <option value="">סוג עובד</option>
            <option value="employee">עובדים</option>
            <option value="manager">מנהלים</option>
          </select>
          <select
            name="employeePosition"
            id="employeePosition"
            value={EmployeeData.employeePosition}
            onChange={handleInputChange}
            required
          >
            <option value="">מחלקה</option>
            <option value="operator">מפעיל</option>
            <option value="technician">טכנאי</option>
            <option value="customerService">נציג שירות לקוחות</option>
          </select>
        </div>
        <div className="EmployeeForm-spacer">
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={EmployeeData.firstName}
            onChange={handleInputChange}
            placeholder="שם פרטי"
            required
          />
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={EmployeeData.lastName}
            onChange={handleInputChange}
            placeholder="שם משפחה"
            required
          />
        </div>
        <div className="EmployeeForm-spacer">
          <input
            type="text"
            name="personalId"
            id="personalId"
            value={EmployeeData.personalId}
            onChange={handleInputChange}
            placeholder="תעודת זהות"
            minLength={9}
            maxLength={9}
            required
          />
          <div className="uploadFileDiv">
            <label htmlFor="img">
              <span>
                <p> העלה תמונת עובד</p>
                <FiUpload color="var(--primary-bg-color)" />
              </span>
            </label>
            <input type="file" name="image" onChange={handleUploadImage} />
            <div
              className={
                fileName == noFileChoose
                  ? "fileNameBox-empty"
                  : "fileNameBox-choose"
              }
            >
              <p>{fileName}</p>
            </div>
          </div>
        </div>
        <div className="EmployeeForm-spacer">
          <input
            type="email"
            name="email"
            id="email"
            value={EmployeeData.email}
            onChange={handleInputChange}
            placeholder="אימייל"
            required
          />
          <input
            type="text"
            name="phone"
            id="phone"
            value={EmployeeData.phone}
            onChange={handleInputChange}
            placeholder="טלפון נייד"
            minLength={10}
            max={10}
            required
          />
        </div>
        <div className="EmployeeForm-spacer">
          <select
            name="gender"
            id="gender"
            value={EmployeeData.gender}
            onChange={handleInputChange}
            required
          >
            <option value="">מין</option>
            <option value="male">זכר</option>
            <option value="female">נקבה</option>
            <option value="other">אחר</option>
          </select>
          <input
            type="date"
            name="birth"
            id="birth"
            value={EmployeeData.birth}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="green-btn">
          {btnText}
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
