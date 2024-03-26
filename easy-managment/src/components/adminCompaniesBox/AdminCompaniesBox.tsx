import axios from "axios";
import "./adminCompaniesBox.scss";
import { useEffect, useState } from "react";
import DataTable from "../dataTable/DataTable";
import ToggleBtn from "../toggleBtn/ToggleBtn";
import { CgDetailsMore } from "react-icons/cg";
import { Link } from "react-router-dom";
import { FaRegPenToSquare } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import DataTableTitles from "../dataTable/DataTableTitles";

const AdminCompaniesBox = () => {
  const [companies, setCompanies] = useState<Array<any>>([]);

  useEffect(() => {
    getCompaniesData(), console.log(companies);
  }, []);

  const getCompaniesData = async () => {
    try {
      const res = await axios.get("http://localhost:4000/admin/get-companies");
      setCompanies(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateCompany = async (companyId: string) => {
    alert("not available yet");
  };

  const handleDeleteCompany = async (companyId: string) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/admin/delete-company`,
        { data: { companyId: companyId } }
      );
      if (response.status == 200) {
        alert("company as been deleted");
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="adminCompaniesBox">
      <DataTableTitles
        tableName={"companiesTableTitle"}
        titlesArr={[
          { title: "לוגו" },
          { title: " שם חברה", id: "com_name" },
          { title: "מספר חברה" },
          { title: "id" },
        ]}
      />
      <DataTable
        tableName={"companiesTable"}
        dataArr={[
          {
            data: companies.map((com) => {
              return (
                <div className="dataTable__line">
                  <img
                    src={com.logo}
                    alt={com.name}
                    width="60px"
                    height="60px"
                  />

                  <p>{com.name}</p>
                  <p>{com.companyNumber}</p>
                  <p>{com.id}</p>
                  <ToggleBtn
                    btnArr={[
                      {
                        id: "employee-settings",
                        text: <CgDetailsMore color="" size="1.5em" />,
                        subList: (
                          <ul id="employee-settings">
                            <li
                              onClick={() => {
                                handleUpdateCompany(com.id);
                              }}
                            >
                              <Link to="">
                                <FaRegPenToSquare color="#58b1dd" size="1em" />
                                ערוך
                              </Link>
                            </li>
                            <li
                              onClick={() => {
                                handleDeleteCompany(com.id);
                              }}
                            >
                              <Link to="">
                                <MdDeleteForever color="#dd5858" size="1.3em" />
                                מחק
                              </Link>
                            </li>
                          </ul>
                        ),
                      },
                    ]}
                  />
                </div>
              );
            }),
          },
        ]}
      />
    </div>
  );
};

export default AdminCompaniesBox;
