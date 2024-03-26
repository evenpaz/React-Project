import { useContext } from "react";
import "./employeesCard.scss";
import {
  CostumersContext,
  EmployeesProps,
} from "../../context/CostumersProvider";

const EmployeesCard = ({ onclick }) => {
  const { state: companyData } = useContext(CostumersContext);

  const handleClick = (e: EmployeesProps) => {
    onclick(e);
  };

  return (
    <div className="employeesCard">
      <h3>רשימת עובדים</h3>
      {companyData.employees.map((e) => {
        return (
          <div
            className="employeesCard-employee"
            onClick={() => handleClick(e)}
          >
            <p>{`${e.firstName} ${e.lastName}`}</p>
          </div>
        );
      })}
    </div>
  );
};

export default EmployeesCard;
