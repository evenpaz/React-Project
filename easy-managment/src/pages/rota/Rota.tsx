import { useContext, useState } from "react";
import DataTableTitles from "../../components/dataTable/DataTableTitles";
import NavbarApp from "../../components/navbar-app/NavbarApp";
import PanelBox from "../../components/panelBox/PanelBox";
import RotaDataTable from "../../components/rotaDataTable/RotaDataTable";
import WhatsAppBtn from "../../components/whatsAppBtn/WhatsAppBtn";
import "./rota.scss";
import {
  CostumersContext,
  EmployeesProps,
} from "../../context/CostumersProvider";
import EmptyShiftBox from "../../components/rotaShiftBox/EmptyShiftBox";
import ToggleBtn from "../../components/toggleBtn/ToggleBtn";
import { Link } from "react-router-dom";
import { FaRegPenToSquare } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import EmployeesCard from "../../components/employeesCard/EmployeesCard";
import IconAndTextBtn from "../../components/iconAndTextBtn/IconAndTextBtn";
import { FaRegSave } from "react-icons/fa";

const getSundayDate = (date: Date): any => {
  let sunday = new Date(date);
  sunday.setDate(date.getDate() - date.getDay());
  return sunday;
};

// type rotaType = {
//   date: string;
//   shift: string;
//   employees: object;
// };

const Rota = () => {
  const { state: companyData } = useContext(CostumersContext);
  const [startDate, setStartDate] = useState(getSundayDate(new Date()));
  // const [rota, setRota] = useState<rotaType[]>([]);

  const currentRota: string[][] = Array.from({ length: 14 }, () => [""]);
  const [msg, setMsg] = useState({});
  // const [emp, setEmp] = useState<string[][]>(
  //   companyData.rota ? companyData.rota : currentRota
  // );
  const [emp, setEmp] = useState<string[][]>(currentRota);
  const [isShowEmpCard, SetIsShowEmpCard] = useState(false);
  const [cellValue, setCellValue] = useState("");

  const handleGetEmp = (e: EmployeesProps) => {
    setCellValue(`${e.firstName} ${e.lastName}`);
  };

  const handleAddEmployeeToShift = (arrNum: number, index: number) => {
    SetIsShowEmpCard(true);
    const updateEmp = [...emp];
    updateEmp[arrNum][index] = cellValue;
    setEmp(updateEmp);
  };

  const handleSaveRota = async (companyId: string, emp: any) => {
    console.log(emp);

    try {
      fetch("http://localhost:4000/companies/api/current-rota", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyId,
          emp,
        }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateCell = (arrNum: number, index: number) => {
    SetIsShowEmpCard(true);
    const updateEmp = [...emp];
    updateEmp[arrNum][index] = cellValue;
    setEmp(updateEmp);
  };

  const handleDeleteCell = (arrNum: number, index: number) => {
    const updateEmp = [...emp];
    updateEmp[arrNum][index] = updateEmp[arrNum][index].slice(0, -1);
    setEmp(updateEmp);
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setMsg({
      ...msg,
      [name]: value,
    });
  };

  const handleAddEmp = (index: number) => {
    const updateEmp = [...emp];
    if (index == 0) {
      updateEmp[0] = [...updateEmp[0], ""];
      updateEmp[2] = [...updateEmp[2], ""];
      updateEmp[4] = [...updateEmp[4], ""];
      updateEmp[6] = [...updateEmp[6], ""];
      updateEmp[8] = [...updateEmp[8], ""];
      updateEmp[10] = [...updateEmp[10], ""];
      updateEmp[12] = [...updateEmp[12], ""];
      setEmp(updateEmp);
    }
    if (index == 1) {
      updateEmp[1] = [...updateEmp[1], ""];
      updateEmp[3] = [...updateEmp[3], ""];
      updateEmp[5] = [...updateEmp[5], ""];
      updateEmp[7] = [...updateEmp[7], ""];
      updateEmp[9] = [...updateEmp[9], ""];
      updateEmp[11] = [...updateEmp[11], ""];
      updateEmp[13] = [...updateEmp[13], ""];
      setEmp(updateEmp);
    }
  };

  const handleDateChange = (newDate: Date) => {
    setStartDate(newDate);
  };

  const calculateWeeklyDates = (startDate: Date) => {
    let dates: string[] = [];
    let currentDate = new Date(startDate);
    for (let i = 1; i <= 7; i++) {
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();

      const dateWithoutTime = `${day}-${month}-${year}`;

      dates.push(dateWithoutTime);

      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  };

  const weeklyDates = calculateWeeklyDates(startDate);

  return (
    <>
      <div className="rotaPage">
        <NavbarApp />
        <div className="rotaPage__container">
          <div className="rotaPage__container-right">
            <PanelBox
              headline={"סידור עבודה"}
              startDate={startDate}
              setStartDate={handleDateChange}
              btnBox={
                <IconAndTextBtn
                  flexDisplay="in_flex_column"
                  iconAndTextBtnArr={[
                    {
                      id: "greenBtn",
                      logoSrc: <FaRegSave size="2em" />,
                      text: "שמור סידור",
                      linkTo: "",
                      onclick: () => {
                        handleSaveRota(companyData.companyId, emp);
                      },
                    },
                  ]}
                />
              }
            />
            <div
              className={
                "rotaPage__container-right__employeesCard-" + isShowEmpCard
              }
            >
              <EmployeesCard onclick={handleGetEmp} />
            </div>
          </div>
          <div className="rotaPage__container-left">
            <DataTableTitles
              tableName={"rotaTableTitle"}
              titlesArr={[
                {
                  title: (
                    <div className="dayBox">
                      <h4>'א</h4>
                      <h5>{weeklyDates[0]}</h5>
                    </div>
                  ),
                },
                {
                  title: (
                    <div className="dayBox">
                      <h4>'ב</h4>
                      <h5>{weeklyDates[1]}</h5>
                    </div>
                  ),
                },
                {
                  title: (
                    <div className="dayBox">
                      <h4>'ג</h4>
                      <h5>{weeklyDates[2]}</h5>
                    </div>
                  ),
                },
                {
                  title: (
                    <div className="dayBox">
                      <h4>'ד</h4>
                      <h5>{weeklyDates[3]}</h5>
                    </div>
                  ),
                },
                {
                  title: (
                    <div className="dayBox">
                      <h4>'ה</h4>
                      <h5>{weeklyDates[4]}</h5>
                    </div>
                  ),
                },
                {
                  title: (
                    <div className="dayBox">
                      <h4>'ו</h4>
                      <h5>{weeklyDates[5]}</h5>
                    </div>
                  ),
                },
                {
                  title: (
                    <div className="dayBox">
                      <h4>'ש</h4>
                      <h5>{weeklyDates[6]}</h5>
                    </div>
                  ),
                },
              ]}
            />
            <hr />
            <RotaDataTable
              tableName={"rotaTableData-morningShifts"}
              text="משמרת בוקר"
              onclick={handleAddEmp}
              index={0}
              dataArr={[
                {
                  data: emp[0].map((e, index: number) => (
                    <div className="shiftBox">
                      {" "}
                      {e == "" ? (
                        <button
                          onClick={() => handleAddEmployeeToShift(0, index)}
                        >
                          <EmptyShiftBox />
                        </button>
                      ) : (
                        <ToggleBtn
                          btnArr={[
                            {
                              id: "rota-settings",
                              text: (
                                <div className="addEmployeeToShiftBox">
                                  <div>{e}</div>
                                  <button onClick={() => {}}>
                                    <div>שעות</div>
                                  </button>
                                </div>
                              ),
                              subList: (
                                <ul id="rota-settings">
                                  <li
                                    onClick={() => {
                                      handleUpdateCell(0, index);
                                    }}
                                  >
                                    <Link to="">
                                      <FaRegPenToSquare
                                        color="#58b1dd"
                                        size="1em"
                                      />
                                      החלף עובד
                                    </Link>
                                  </li>
                                  <li
                                    onClick={() => {
                                      handleDeleteCell(0, index);
                                    }}
                                  >
                                    <Link to="">
                                      <MdDeleteForever
                                        color="#dd5858"
                                        size="1.3em"
                                      />
                                      מחק תא
                                    </Link>
                                  </li>
                                </ul>
                              ),
                            },
                          ]}
                        />
                      )}
                    </div>
                  )),

                  msg: (
                    <textarea
                      onChange={handleInputChange}
                      cols="10"
                      rows="2"
                      name="msg-shift0"
                      value={""}
                      placeholder="הערה"
                    ></textarea>
                  ),
                },
                {
                  data: emp[2].map((e, index: number) => (
                    <div className="shiftBox">
                      {" "}
                      {e == "" ? (
                        <button
                          onClick={() => handleAddEmployeeToShift(2, index)}
                        >
                          <EmptyShiftBox />
                        </button>
                      ) : (
                        <ToggleBtn
                          btnArr={[
                            {
                              id: "rota-settings",
                              text: (
                                <div className="addEmployeeToShiftBox">
                                  <div>{e}</div>
                                  <button onClick={() => {}}>
                                    <div>שעות</div>
                                  </button>
                                </div>
                              ),
                              subList: (
                                <ul id="rota-settings">
                                  <li
                                    onClick={() => {
                                      handleUpdateCell(2, index);
                                    }}
                                  >
                                    <Link to="">
                                      <FaRegPenToSquare
                                        color="#58b1dd"
                                        size="1em"
                                      />
                                      החלף עובד
                                    </Link>
                                  </li>
                                  <li
                                    onClick={() => {
                                      handleDeleteCell(2, index);
                                    }}
                                  >
                                    <Link to="">
                                      <MdDeleteForever
                                        color="#dd5858"
                                        size="1.3em"
                                      />
                                      מחק תא
                                    </Link>
                                  </li>
                                </ul>
                              ),
                            },
                          ]}
                        />
                      )}
                    </div>
                  )),
                  msg: (
                    <textarea
                      onChange={handleInputChange}
                      cols="10"
                      rows="2"
                      name="msg-shift0"
                      value={""}
                      placeholder="הערה"
                    ></textarea>
                  ),
                },
                {
                  data: emp[4].map((e, index: number) => (
                    <div className="shiftBox">
                      {" "}
                      {e == "" ? (
                        <button
                          onClick={() => handleAddEmployeeToShift(4, index)}
                        >
                          <EmptyShiftBox />
                        </button>
                      ) : (
                        <ToggleBtn
                          btnArr={[
                            {
                              id: "rota-settings",
                              text: (
                                <div className="addEmployeeToShiftBox">
                                  <div>{e}</div>
                                  <button onClick={() => {}}>
                                    <div>שעות</div>
                                  </button>
                                </div>
                              ),
                              subList: (
                                <ul id="rota-settings">
                                  <li
                                    onClick={() => {
                                      handleUpdateCell(4, index);
                                    }}
                                  >
                                    <Link to="">
                                      <FaRegPenToSquare
                                        color="#58b1dd"
                                        size="1em"
                                      />
                                      החלף עובד
                                    </Link>
                                  </li>
                                  <li
                                    onClick={() => {
                                      handleDeleteCell(4, index);
                                    }}
                                  >
                                    <Link to="">
                                      <MdDeleteForever
                                        color="#dd5858"
                                        size="1.3em"
                                      />
                                      מחק תא
                                    </Link>
                                  </li>
                                </ul>
                              ),
                            },
                          ]}
                        />
                      )}
                    </div>
                  )),
                  msg: (
                    <textarea
                      onChange={handleInputChange}
                      cols="10"
                      rows="2"
                      name="msg-shift0"
                      value={""}
                      placeholder="הערה"
                    ></textarea>
                  ),
                },
                {
                  data: emp[6].map((e, index: number) => (
                    <div className="shiftBox">
                      {" "}
                      {e == "" ? (
                        <button
                          onClick={() => handleAddEmployeeToShift(6, index)}
                        >
                          <EmptyShiftBox />
                        </button>
                      ) : (
                        <ToggleBtn
                          btnArr={[
                            {
                              id: "rota-settings",
                              text: (
                                <div className="addEmployeeToShiftBox">
                                  <div>{e}</div>
                                  <button onClick={() => {}}>
                                    <div>שעות</div>
                                  </button>
                                </div>
                              ),
                              subList: (
                                <ul id="rota-settings">
                                  <li
                                    onClick={() => {
                                      handleUpdateCell(6, index);
                                    }}
                                  >
                                    <Link to="">
                                      <FaRegPenToSquare
                                        color="#58b1dd"
                                        size="1em"
                                      />
                                      החלף עובד
                                    </Link>
                                  </li>
                                  <li
                                    onClick={() => {
                                      handleDeleteCell(6, index);
                                    }}
                                  >
                                    <Link to="">
                                      <MdDeleteForever
                                        color="#dd5858"
                                        size="1.3em"
                                      />
                                      מחק תא
                                    </Link>
                                  </li>
                                </ul>
                              ),
                            },
                          ]}
                        />
                      )}
                    </div>
                  )),
                  msg: (
                    <textarea
                      onChange={handleInputChange}
                      cols="10"
                      rows="2"
                      name="msg-shift0"
                      value={""}
                      placeholder="הערה"
                    ></textarea>
                  ),
                },
                {
                  data: emp[8].map((e, index: number) => (
                    <div className="shiftBox">
                      {" "}
                      {e == "" ? (
                        <button
                          onClick={() => handleAddEmployeeToShift(8, index)}
                        >
                          <EmptyShiftBox />
                        </button>
                      ) : (
                        <ToggleBtn
                          btnArr={[
                            {
                              id: "rota-settings",
                              text: (
                                <div className="addEmployeeToShiftBox">
                                  <div>{e}</div>
                                  <button onClick={() => {}}>
                                    <div>שעות</div>
                                  </button>
                                </div>
                              ),
                              subList: (
                                <ul id="rota-settings">
                                  <li
                                    onClick={() => {
                                      handleUpdateCell(8, index);
                                    }}
                                  >
                                    <Link to="">
                                      <FaRegPenToSquare
                                        color="#58b1dd"
                                        size="1em"
                                      />
                                      החלף עובד
                                    </Link>
                                  </li>
                                  <li
                                    onClick={() => {
                                      handleDeleteCell(8, index);
                                    }}
                                  >
                                    <Link to="">
                                      <MdDeleteForever
                                        color="#dd5858"
                                        size="1.3em"
                                      />
                                      מחק תא
                                    </Link>
                                  </li>
                                </ul>
                              ),
                            },
                          ]}
                        />
                      )}
                    </div>
                  )),
                  msg: (
                    <textarea
                      onChange={handleInputChange}
                      cols="10"
                      rows="2"
                      name="msg-shift0"
                      value={""}
                      placeholder="הערה"
                    ></textarea>
                  ),
                },
                {
                  data: emp[10].map((e, index: number) => (
                    <div className="shiftBox">
                      {" "}
                      {e == "" ? (
                        <button
                          onClick={() => handleAddEmployeeToShift(10, index)}
                        >
                          <EmptyShiftBox />
                        </button>
                      ) : (
                        <ToggleBtn
                          btnArr={[
                            {
                              id: "rota-settings",
                              text: (
                                <div className="addEmployeeToShiftBox">
                                  <div>{e}</div>
                                  <button onClick={() => {}}>
                                    <div>שעות</div>
                                  </button>
                                </div>
                              ),
                              subList: (
                                <ul id="rota-settings">
                                  <li
                                    onClick={() => {
                                      handleUpdateCell(10, index);
                                    }}
                                  >
                                    <Link to="">
                                      <FaRegPenToSquare
                                        color="#58b1dd"
                                        size="1em"
                                      />
                                      החלף עובד
                                    </Link>
                                  </li>
                                  <li
                                    onClick={() => {
                                      handleDeleteCell(10, index);
                                    }}
                                  >
                                    <Link to="">
                                      <MdDeleteForever
                                        color="#dd5858"
                                        size="1.3em"
                                      />
                                      מחק תא
                                    </Link>
                                  </li>
                                </ul>
                              ),
                            },
                          ]}
                        />
                      )}
                    </div>
                  )),
                  msg: (
                    <textarea
                      onChange={handleInputChange}
                      cols="10"
                      rows="2"
                      name="msg-shift0"
                      value={""}
                      placeholder="הערה"
                    ></textarea>
                  ),
                },
                {
                  data: emp[12].map((e, index: number) => (
                    <div className="shiftBox">
                      {" "}
                      {e == "" ? (
                        <button
                          onClick={() => handleAddEmployeeToShift(12, index)}
                        >
                          <EmptyShiftBox />
                        </button>
                      ) : (
                        <ToggleBtn
                          btnArr={[
                            {
                              id: "rota-settings",
                              text: (
                                <div className="addEmployeeToShiftBox">
                                  <div>{e}</div>
                                  <button onClick={() => {}}>
                                    <div>שעות</div>
                                  </button>
                                </div>
                              ),
                              subList: (
                                <ul id="rota-settings">
                                  <li
                                    onClick={() => {
                                      handleUpdateCell(12, index);
                                    }}
                                  >
                                    <Link to="">
                                      <FaRegPenToSquare
                                        color="#58b1dd"
                                        size="1em"
                                      />
                                      החלף עובד
                                    </Link>
                                  </li>
                                  <li
                                    onClick={() => {
                                      handleDeleteCell(12, index);
                                    }}
                                  >
                                    <Link to="">
                                      <MdDeleteForever
                                        color="#dd5858"
                                        size="1.3em"
                                      />
                                      מחק תא
                                    </Link>
                                  </li>
                                </ul>
                              ),
                            },
                          ]}
                        />
                      )}
                    </div>
                  )),
                  msg: (
                    <textarea
                      onChange={handleInputChange}
                      cols="10"
                      rows="2"
                      name="msg-shift0"
                      value={""}
                      placeholder="הערה"
                    ></textarea>
                  ),
                },
              ]}
            />
            <RotaDataTable
              tableName={"rotaTableData-morningShifts"}
              text="משמרת ערב"
              onclick={handleAddEmp}
              index={1}
              dataArr={[
                {
                  data: emp[1].map((e, index: number) => (
                    <div className="shiftBox">
                      {" "}
                      {e == "" ? (
                        <button
                          onClick={() => handleAddEmployeeToShift(1, index)}
                        >
                          <EmptyShiftBox />
                        </button>
                      ) : (
                        <ToggleBtn
                          btnArr={[
                            {
                              id: "rota-settings",
                              text: (
                                <div className="addEmployeeToShiftBox">
                                  <div>{e}</div>
                                  <button onClick={() => {}}>
                                    <div>שעות</div>
                                  </button>
                                </div>
                              ),
                              subList: (
                                <ul id="rota-settings">
                                  <li
                                    onClick={() => {
                                      handleUpdateCell(1, index);
                                    }}
                                  >
                                    <Link to="">
                                      <FaRegPenToSquare
                                        color="#58b1dd"
                                        size="1em"
                                      />
                                      החלף עובד
                                    </Link>
                                  </li>
                                  <li
                                    onClick={() => {
                                      handleDeleteCell(1, index);
                                    }}
                                  >
                                    <Link to="">
                                      <MdDeleteForever
                                        color="#dd5858"
                                        size="1.3em"
                                      />
                                      מחק תא
                                    </Link>
                                  </li>
                                </ul>
                              ),
                            },
                          ]}
                        />
                      )}
                    </div>
                  )),
                  msg: (
                    <textarea
                      onChange={handleInputChange}
                      cols="10"
                      rows="2"
                      name="msg-shift0"
                      value={""}
                      placeholder="הערה"
                    ></textarea>
                  ),
                },
                {
                  data: emp[3].map((e, index: number) => (
                    <div className="shiftBox">
                      {" "}
                      {e == "" ? (
                        <button
                          onClick={() => handleAddEmployeeToShift(3, index)}
                        >
                          <EmptyShiftBox />
                        </button>
                      ) : (
                        <ToggleBtn
                          btnArr={[
                            {
                              id: "rota-settings",
                              text: (
                                <div className="addEmployeeToShiftBox">
                                  <div>{e}</div>
                                  <button onClick={() => {}}>
                                    <div>שעות</div>
                                  </button>
                                </div>
                              ),
                              subList: (
                                <ul id="rota-settings">
                                  <li
                                    onClick={() => {
                                      handleUpdateCell(3, index);
                                    }}
                                  >
                                    <Link to="">
                                      <FaRegPenToSquare
                                        color="#58b1dd"
                                        size="1em"
                                      />
                                      החלף עובד
                                    </Link>
                                  </li>
                                  <li
                                    onClick={() => {
                                      handleDeleteCell(3, index);
                                    }}
                                  >
                                    <Link to="">
                                      <MdDeleteForever
                                        color="#dd5858"
                                        size="1.3em"
                                      />
                                      מחק תא
                                    </Link>
                                  </li>
                                </ul>
                              ),
                            },
                          ]}
                        />
                      )}
                    </div>
                  )),
                  msg: (
                    <textarea
                      onChange={handleInputChange}
                      cols="10"
                      rows="2"
                      name="msg-shift0"
                      value={""}
                      placeholder="הערה"
                    ></textarea>
                  ),
                },
                {
                  data: emp[5].map((e, index: number) => (
                    <div className="shiftBox">
                      {" "}
                      {e == "" ? (
                        <button
                          onClick={() => handleAddEmployeeToShift(5, index)}
                        >
                          <EmptyShiftBox />
                        </button>
                      ) : (
                        <ToggleBtn
                          btnArr={[
                            {
                              id: "rota-settings",
                              text: (
                                <div className="addEmployeeToShiftBox">
                                  <div>{e}</div>
                                  <button onClick={() => {}}>
                                    <div>שעות</div>
                                  </button>
                                </div>
                              ),
                              subList: (
                                <ul id="rota-settings">
                                  <li
                                    onClick={() => {
                                      handleUpdateCell(5, index);
                                    }}
                                  >
                                    <Link to="">
                                      <FaRegPenToSquare
                                        color="#58b1dd"
                                        size="1em"
                                      />
                                      החלף עובד
                                    </Link>
                                  </li>
                                  <li
                                    onClick={() => {
                                      handleDeleteCell(5, index);
                                    }}
                                  >
                                    <Link to="">
                                      <MdDeleteForever
                                        color="#dd5858"
                                        size="1.3em"
                                      />
                                      מחק תא
                                    </Link>
                                  </li>
                                </ul>
                              ),
                            },
                          ]}
                        />
                      )}
                    </div>
                  )),
                  msg: (
                    <textarea
                      onChange={handleInputChange}
                      cols="10"
                      rows="2"
                      name="msg-shift0"
                      value={""}
                      placeholder="הערה"
                    ></textarea>
                  ),
                },
                {
                  data: emp[7].map((e, index: number) => (
                    <div className="shiftBox">
                      {" "}
                      {e == "" ? (
                        <button
                          onClick={() => handleAddEmployeeToShift(7, index)}
                        >
                          <EmptyShiftBox />
                        </button>
                      ) : (
                        <ToggleBtn
                          btnArr={[
                            {
                              id: "rota-settings",
                              text: (
                                <div className="addEmployeeToShiftBox">
                                  <div>{e}</div>
                                  <button onClick={() => {}}>
                                    <div>שעות</div>
                                  </button>
                                </div>
                              ),
                              subList: (
                                <ul id="rota-settings">
                                  <li
                                    onClick={() => {
                                      handleUpdateCell(7, index);
                                    }}
                                  >
                                    <Link to="">
                                      <FaRegPenToSquare
                                        color="#58b1dd"
                                        size="1em"
                                      />
                                      החלף עובד
                                    </Link>
                                  </li>
                                  <li
                                    onClick={() => {
                                      handleDeleteCell(7, index);
                                    }}
                                  >
                                    <Link to="">
                                      <MdDeleteForever
                                        color="#dd5858"
                                        size="1.3em"
                                      />
                                      מחק תא
                                    </Link>
                                  </li>
                                </ul>
                              ),
                            },
                          ]}
                        />
                      )}
                    </div>
                  )),
                  msg: (
                    <textarea
                      onChange={handleInputChange}
                      cols="10"
                      rows="2"
                      name="msg-shift0"
                      value={""}
                      placeholder="הערה"
                    ></textarea>
                  ),
                },
                {
                  data: emp[9].map((e, index: number) => (
                    <div className="shiftBox">
                      {" "}
                      {e == "" ? (
                        <button
                          onClick={() => handleAddEmployeeToShift(9, index)}
                        >
                          <EmptyShiftBox />
                        </button>
                      ) : (
                        <ToggleBtn
                          btnArr={[
                            {
                              id: "rota-settings",
                              text: (
                                <div className="addEmployeeToShiftBox">
                                  <div>{e}</div>
                                  <button onClick={() => {}}>
                                    <div>שעות</div>
                                  </button>
                                </div>
                              ),
                              subList: (
                                <ul id="rota-settings">
                                  <li
                                    onClick={() => {
                                      handleUpdateCell(9, index);
                                    }}
                                  >
                                    <Link to="">
                                      <FaRegPenToSquare
                                        color="#58b1dd"
                                        size="1em"
                                      />
                                      החלף עובד
                                    </Link>
                                  </li>
                                  <li
                                    onClick={() => {
                                      handleDeleteCell(9, index);
                                    }}
                                  >
                                    <Link to="">
                                      <MdDeleteForever
                                        color="#dd5858"
                                        size="1.3em"
                                      />
                                      מחק תא
                                    </Link>
                                  </li>
                                </ul>
                              ),
                            },
                          ]}
                        />
                      )}
                    </div>
                  )),
                  msg: (
                    <textarea
                      onChange={handleInputChange}
                      cols="10"
                      rows="2"
                      name="msg-shift0"
                      value={""}
                      placeholder="הערה"
                    ></textarea>
                  ),
                },
                {
                  data: emp[11].map((e, index: number) => (
                    <div className="shiftBox">
                      {" "}
                      {e == "" ? (
                        <button
                          onClick={() => handleAddEmployeeToShift(11, index)}
                        >
                          <EmptyShiftBox />
                        </button>
                      ) : (
                        <ToggleBtn
                          btnArr={[
                            {
                              id: "rota-settings",
                              text: (
                                <div className="addEmployeeToShiftBox">
                                  <div>{e}</div>
                                  <button onClick={() => {}}>
                                    <div>שעות</div>
                                  </button>
                                </div>
                              ),
                              subList: (
                                <ul id="rota-settings">
                                  <li
                                    onClick={() => {
                                      handleUpdateCell(11, index);
                                    }}
                                  >
                                    <Link to="">
                                      <FaRegPenToSquare
                                        color="#58b1dd"
                                        size="1em"
                                      />
                                      החלף עובד
                                    </Link>
                                  </li>
                                  <li
                                    onClick={() => {
                                      handleDeleteCell(11, index);
                                    }}
                                  >
                                    <Link to="">
                                      <MdDeleteForever
                                        color="#dd5858"
                                        size="1.3em"
                                      />
                                      מחק תא
                                    </Link>
                                  </li>
                                </ul>
                              ),
                            },
                          ]}
                        />
                      )}
                    </div>
                  )),
                  msg: (
                    <textarea
                      onChange={handleInputChange}
                      cols="10"
                      rows="2"
                      name="msg-shift0"
                      value={""}
                      placeholder="הערה"
                    ></textarea>
                  ),
                },
                {
                  data: emp[13].map((e, index: number) => (
                    <div className="shiftBox">
                      {" "}
                      {e == "" ? (
                        <button
                          onClick={() => handleAddEmployeeToShift(13, index)}
                        >
                          <EmptyShiftBox />
                        </button>
                      ) : (
                        <ToggleBtn
                          btnArr={[
                            {
                              id: "rota-settings",
                              text: (
                                <div className="addEmployeeToShiftBox">
                                  <div>{e}</div>
                                  <button onClick={() => {}}>
                                    <div>שעות</div>
                                  </button>
                                </div>
                              ),
                              subList: (
                                <ul id="rota-settings">
                                  <li
                                    onClick={() => {
                                      handleUpdateCell(13, index);
                                    }}
                                  >
                                    <Link to="">
                                      <FaRegPenToSquare
                                        color="#58b1dd"
                                        size="1em"
                                      />
                                      החלף עובד
                                    </Link>
                                  </li>
                                  <li
                                    onClick={() => {
                                      handleDeleteCell(13, index);
                                    }}
                                  >
                                    <Link to="">
                                      <MdDeleteForever
                                        color="#dd5858"
                                        size="1.3em"
                                      />
                                      מחק תא
                                    </Link>
                                  </li>
                                </ul>
                              ),
                            },
                          ]}
                        />
                      )}
                    </div>
                  )),
                  msg: (
                    <textarea
                      onChange={handleInputChange}
                      cols="10"
                      rows="2"
                      name="msg-shift0"
                      value={""}
                      placeholder="הערה"
                    ></textarea>
                  ),
                },
              ]}
            />
          </div>
        </div>
        <WhatsAppBtn />
      </div>
    </>
  );
};

export default Rota;
