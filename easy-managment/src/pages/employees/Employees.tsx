import { FaFileExcel } from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";
import { MdNotificationAdd } from "react-icons/md";
import IconAndTextBtn from "../../components/iconAndTextBtn/IconAndTextBtn";
import NavbarApp from "../../components/navbar-app/NavbarApp";
import PanelBox from "../../components/panelBox/PanelBox";
import "./employees.scss";
import WhatsAppBtn from "../../components/whatsAppBtn/WhatsAppBtn";
import DataTable from "../../components/dataTable/DataTable";
import DataTableTitles from "../../components/dataTable/DataTableTitles";
import { CgDetailsMore } from "react-icons/cg";
import { FaRegPenToSquare } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { SetStateAction, useContext, useState } from "react";
import { Link } from "react-router-dom";
import ToggleBtn from "../../components/toggleBtn/ToggleBtn";
import EmployeeForm, {
  newEmployeeData,
} from "../../components/employeeForm/EmployeeForm";
import { CostumersContext } from "../../context/CostumersProvider";
import * as XLSX from "xlsx";

const Employees = () => {
  const { state: companyData } = useContext(CostumersContext);
  const [showAddEmployeeForm, setShowAddEmployeeForm] = useState(
    Boolean(false)
  );
  const [showUpdateEmployeeForm, setShowUpdateEmployeeForm] = useState(
    Boolean(false)
  );

  const [EmpIdToPass, setEmpIdToPass] = useState({});

  const updateShowAddEmployeeForm = () => {
    setShowAddEmployeeForm(!showAddEmployeeForm);
  };

  const updateShowUpdateEmployeeForm = () => {
    setShowUpdateEmployeeForm(!showUpdateEmployeeForm);
  };

  const handleDeleteEmployee = async (
    employeeId: string,
    companyId: string
  ) => {
    try {
      const response = await fetch(
        `http://localhost:4000/companies/api/delete-employee`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ employeeId, companyId }),
        }
      );
      if (response.ok) {
        alert("deleted");
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleExportToExcel = () => {
    const employeesData = [...companyData.employees];
    console.log(employeesData);

    const censoredEmployeesData = employeesData.map((emp) => {
      return {
        "First name": emp.firstName,
        "Last name": emp.lastName,
        Phone: emp.phone,
        Email: emp.email,
        Position: emp.employeePosition,
        Type: emp.employeeType,
      };
    });

    let workBook = XLSX.utils.book_new(); //creating new excel file
    let workSheet = XLSX.utils.json_to_sheet(censoredEmployeesData); //function that convert json form to excel sheet form
    XLSX.utils.book_append_sheet(workBook, workSheet, "עובדים"); //function that insert the sheet to the excel file and let you choose the sheet name
    XLSX.writeFile(workBook, `${companyData.name}-עובדים.xlsx`);
  };

  return (
    <div className="employeesPage">
      <NavbarApp />
      <div className="employeesPage__container">
        <div className={"add-employee-container-" + showAddEmployeeForm}>
          <button onClick={() => updateShowAddEmployeeForm()}>X</button>
          <EmployeeForm
            title={"יצירת עובד חדש"}
            btnText={"הוסף עובד"}
            handelClick={"addEmployee"}
          />
        </div>
        <div className={"update-employee-container-" + showUpdateEmployeeForm}>
          <button onClick={() => updateShowUpdateEmployeeForm()}>X</button>
          <EmployeeForm
            title={"עריכת פרטי עובד "}
            btnText={"ערוך עובד"}
            handelClick={"updateEmployee"}
            empToUpdate={EmpIdToPass}
          />
        </div>
        <div className="employeesPage__container-right">
          <PanelBox
            headline={"עובדים"}
            btnBox={
              <IconAndTextBtn
                flexDisplay="in_flex_column"
                iconAndTextBtnArr={[
                  {
                    id: `blueBtn`,
                    logoSrc: <IoPersonAdd size="2em" />,
                    text: "הוספת עובד",
                    linkTo: "",
                    onclick: () => {
                      updateShowAddEmployeeForm();
                    },
                  },
                  {
                    id: "orangeBtn",
                    logoSrc: <MdNotificationAdd size="2em" />,
                    text: "הודעה",
                    linkTo: "",
                  },
                  {
                    id: "greenBtn",
                    logoSrc: <FaFileExcel size="2em" />,
                    text: "ייצוא",
                    linkTo: "",
                    onclick: () => {
                      handleExportToExcel();
                    },
                  },
                ]}
              />
            }
          />
        </div>
        <div className="employeesPage__container-left">
          <DataTableTitles
            tableName={"employeesTableTitle"}
            titlesArr={[
              { title: "תמונת עובד" },
              { title: "שם" },
              { title: "טלפון" },
              { title: "תפקיד" },
              // { title: "עוד" },
            ]}
          />

          <DataTable
            tableName={"employeesTable"}
            dataArr={[
              {
                data: companyData.employees.map((e) => {
                  return (
                    <>
                      <div className="dataTable__line" key={e.personalId}>
                        <img
                          src={e.image}
                          alt={`${e.firstName} photo`}
                          height="70px"
                          width="70px"
                        />
                        <p>
                          {e.firstName} {e.lastName}
                        </p>
                        <p>{e.phone}</p>
                        <p>{e.employeePosition}</p>
                        <span id="toggleBtnSpan">
                          <ToggleBtn
                            btnArr={[
                              {
                                id: "employee-settings",
                                text: (
                                  <CgDetailsMore
                                    color="var(--icon-color)"
                                    size="1.5em"
                                  />
                                ),
                                subList: (
                                  <ul id="employee-settings">
                                    <li
                                      onClick={() => {
                                        updateShowUpdateEmployeeForm();
                                        setEmpIdToPass(e);
                                        console.log(e);
                                      }}
                                    >
                                      <Link to="">
                                        <FaRegPenToSquare
                                          color="#58b1dd"
                                          size="1em"
                                        />
                                        ערוך עובד
                                      </Link>
                                    </li>
                                    <li
                                      onClick={() => {
                                        handleDeleteEmployee(
                                          e.employeeId,
                                          companyData.companyId
                                        );
                                      }}
                                    >
                                      <Link to="">
                                        <MdDeleteForever
                                          color="#dd5858"
                                          size="1.3em"
                                        />
                                        מחק עובד
                                      </Link>
                                    </li>
                                  </ul>
                                ),
                              },
                            ]}
                          />
                        </span>
                      </div>
                    </>
                  );
                }),
              },
            ]}
          />
        </div>
      </div>
      <WhatsAppBtn />
    </div>
  );
};

export default Employees;
