import { ReactNode, useContext, useState } from "react";
import "./rotaDataTable.scss";
import { CgDetailsMore } from "react-icons/cg";
import { CiCirclePlus } from "react-icons/ci";

import ToggleBtn from "../toggleBtn/ToggleBtn";
import { CostumersContext } from "../../context/CostumersProvider";

type RotaDataTableProps = {
  dataArr: { data: any; msg?: ReactNode }[];
  tableName: string;
  text?: string;
};

const RotaDataTable = ({ dataArr, tableName, text, index, onclick }) => {
  const { state: companyData } = useContext(CostumersContext);
  const [isShowMsg, setIsShowMsg] = useState(false);

  // const employeeWhoWantShiftArr = companyData.employees.filter((e) => {
  //   e.shiftRequests[0] = true;
  // });

  const handleClick = (index: number) => {
    onclick(index);
  };

  const handleAddMsg = () => {
    setIsShowMsg(!isShowMsg);
  };

  return (
    <div className="dataTable">
      <div className="dataTable__top">
        <h1>{text}</h1>
        <span>
          <ToggleBtn
            btnArr={[
              {
                id: "settings-btn",
                text: (
                  <div className="settings-details-btn">
                    <CgDetailsMore size="1.5em" />
                  </div>
                ),
                subList: (
                  <ul id="settings-details">
                    <li>
                      <button onClick={() => handleAddMsg()}>
                        הוספת\הסרת הערה
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleClick(index)}>
                        הוספת עובד
                      </button>
                    </li>
                  </ul>
                ),
              },
            ]}
          />
        </span>
      </div>
      <div className={tableName}>
        {dataArr.length > 0 ? (
          dataArr.map((d) => {
            return (
              <>
                <ul>
                  <li className={"rota-morning-msg-" + isShowMsg}>{d.msg}</li>
                  <li>
                    <div className="shiftContainer">{d.data}</div>
                  </li>
                </ul>
              </>
            );
          })
        ) : (
          <div>
            <p>not working</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RotaDataTable;
