import { FaRegStar, FaRegSave } from "react-icons/fa";
import IconAndTextBtn from "../../components/iconAndTextBtn/IconAndTextBtn";
import NavbarApp from "../../components/navbar-app/NavbarApp";
import PanelBox from "../../components/panelBox/PanelBox";
import WhatsAppBtn from "../../components/whatsAppBtn/WhatsAppBtn";
import "./availability.scss";
import DataTableTitles from "../../components/dataTable/DataTableTitles";
import { FcCancel } from "react-icons/fc";
import { IoMdCheckmark } from "react-icons/io";
import { useContext, useState } from "react";
import { CostumersContext } from "../../context/CostumersProvider";

const getSundayDate = (date: Date): any => {
  let sunday = new Date(date);
  sunday.setDate(date.getDate() - date.getDay());
  return sunday;
};

type shiftRequestType = {
  date: string;
  shift: string;
  request: Boolean | null;
};

const Availability = () => {
  const { state: companyData } = useContext(CostumersContext);
  const [shiftReq, setShiftReq] = useState<shiftRequestType[]>([]);
  const [startDate, setStartDate] = useState(getSundayDate(new Date()));

  const toggleShiftReq = (date: string, shift: string) => {
    const newShiftReq = [...shiftReq];
    console.log("newShiftReq", newShiftReq);

    const index = newShiftReq.findIndex(
      (req) => req.date === date && req.shift === shift
    );

    if (index == -1) {
      newShiftReq.push({ date: date, shift: shift, request: true });
      setShiftReq(newShiftReq);
      console.log("shiftReq after -1: ", shiftReq);
    } else {
      console.log("index:", index);

      newShiftReq[index].request = !newShiftReq[index].request;
      setShiftReq(newShiftReq);
      console.log("shiftReq after index non -1: ", shiftReq);
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

  const handleSaveRequests = async (
    companyId: string,
    employeeId: string,
    shiftRequest: object[]
  ) => {
    const updateShiftReq = shiftRequest.reduce((shiftReq, req) => {
      shiftReq[req.date + req.shift] = req;
      return shiftReq;
    }, {});

    console.log("updateShiftReq after reduce", updateShiftReq);

    try {
      fetch("http://localhost:4000/companies/api/shift-requests", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyId,
          employeeId,
          updateShiftReq,
        }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="availabilityPage">
      <NavbarApp />
      <div className="availabilityPage__container">
        <div className="availabilityPage__container-right">
          <PanelBox
            headline={"זמינות"}
            startDate={startDate}
            setStartDate={handleDateChange}
            textBox={
              <>
                <form className="availability-comments-form">
                  <textarea
                    name="availability-comments"
                    cols="20"
                    rows="2"
                    placeholder="...הערות"
                  ></textarea>
                </form>
              </>
            }
            btnBox={
              <IconAndTextBtn
                flexDisplay="in_flex_column"
                iconAndTextBtnArr={[
                  {
                    id: `blueBtn`,
                    logoSrc: <FaRegStar size="2em" />,
                    text: "שמור כברירת מחדל",
                    linkTo: "",
                    onclick: () => {},
                  },
                  {
                    id: "redBtn",
                    logoSrc: <FaRegStar size="2em" />,
                    text: "מחיקת ברירת מחדל",
                    linkTo: "",
                    onclick: () => {},
                  },
                  {
                    id: "greenBtn",
                    logoSrc: <FaRegSave size="2em" />,
                    text: "שמור",
                    linkTo: "",
                    onclick: () => {
                      handleSaveRequests(
                        companyData.companyId,
                        companyData.employeeData.employeeId,
                        shiftReq
                      );
                    },
                  },
                ]}
              />
            }
          />
        </div>
        <div className="availabilityPage__container-left">
          <DataTableTitles
            tableName={"availabilityTableTitle"}
            titlesArr={[
              { title: <h4>משמרות</h4> },
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
          <DataTableTitles
            tableName={"availabilityTableTitle"}
            titlesArr={[
              { title: <h4>בוקר</h4> },
              {
                title: (
                  <div className="shiftBox">
                    <button
                      onClick={() => {
                        toggleShiftReq(weeklyDates[0], "morning");
                      }}
                    >
                      {shiftReq.find(
                        (req) =>
                          req.date === weeklyDates[0] &&
                          req.shift === "morning" &&
                          req.request
                      ) ? (
                        <IoMdCheckmark size="2em" color="green" />
                      ) : (
                        <FcCancel size="2em" />
                      )}
                    </button>
                  </div>
                ),
              },
              {
                title: (
                  <div className="shiftBox">
                    <button
                      onClick={() => {
                        toggleShiftReq(weeklyDates[1], "morning");
                      }}
                    >
                      {shiftReq.find(
                        (req) =>
                          req.date === weeklyDates[1] &&
                          req.shift === "morning" &&
                          req.request
                      ) ? (
                        <IoMdCheckmark size="2em" color="green" />
                      ) : (
                        <FcCancel size="2em" />
                      )}
                    </button>
                  </div>
                ),
              },
              {
                title: (
                  <div className="shiftBox">
                    <button
                      onClick={() => {
                        toggleShiftReq(weeklyDates[2], "morning");
                      }}
                    >
                      {shiftReq.find(
                        (req) =>
                          req.date === weeklyDates[2] &&
                          req.shift === "morning" &&
                          req.request
                      ) ? (
                        <IoMdCheckmark size="2em" color="green" />
                      ) : (
                        <FcCancel size="2em" />
                      )}
                    </button>
                  </div>
                ),
              },
              {
                title: (
                  <div className="shiftBox">
                    <button
                      onClick={() => {
                        toggleShiftReq(weeklyDates[3], "morning");
                      }}
                    >
                      {shiftReq.find(
                        (req) =>
                          req.date === weeklyDates[3] &&
                          req.shift === "morning" &&
                          req.request
                      ) ? (
                        <IoMdCheckmark size="2em" color="green" />
                      ) : (
                        <FcCancel size="2em" />
                      )}
                    </button>
                  </div>
                ),
              },
              {
                title: (
                  <div className="shiftBox">
                    <button
                      onClick={() => {
                        toggleShiftReq(weeklyDates[4], "morning");
                      }}
                    >
                      {shiftReq.find(
                        (req) =>
                          req.date === weeklyDates[4] &&
                          req.shift === "morning" &&
                          req.request
                      ) ? (
                        <IoMdCheckmark size="2em" color="green" />
                      ) : (
                        <FcCancel size="2em" />
                      )}
                    </button>
                  </div>
                ),
              },
              {
                title: (
                  <div className="shiftBox">
                    <button
                      onClick={() => {
                        toggleShiftReq(weeklyDates[5], "morning");
                      }}
                    >
                      {shiftReq.find(
                        (req) =>
                          req.date === weeklyDates[5] &&
                          req.shift === "morning" &&
                          req.request
                      ) ? (
                        <IoMdCheckmark size="2em" color="green" />
                      ) : (
                        <FcCancel size="2em" />
                      )}
                    </button>
                  </div>
                ),
              },
              {
                title: (
                  <div className="shiftBox">
                    <button
                      onClick={() => {
                        toggleShiftReq(weeklyDates[6], "morning");
                      }}
                    >
                      {shiftReq.find(
                        (req) =>
                          req.date === weeklyDates[6] &&
                          req.shift === "morning" &&
                          req.request
                      ) ? (
                        <IoMdCheckmark size="2em" color="green" />
                      ) : (
                        <FcCancel size="2em" />
                      )}
                    </button>
                  </div>
                ),
              },
            ]}
          />
          <hr />
          <DataTableTitles
            tableName={"availabilityTableTitle"}
            titlesArr={[
              { title: <h4>ערב</h4> },
              {
                title: (
                  <div className="shiftBox">
                    <button
                      onClick={() => {
                        toggleShiftReq(weeklyDates[0], "evening");
                      }}
                    >
                      {shiftReq.find(
                        (req) =>
                          req.date === weeklyDates[0] &&
                          req.shift === "evening" &&
                          req.request
                      ) ? (
                        <IoMdCheckmark size="2em" color="green" />
                      ) : (
                        <FcCancel size="2em" />
                      )}
                    </button>
                  </div>
                ),
              },
              {
                title: (
                  <div className="shiftBox">
                    <button
                      onClick={() => {
                        toggleShiftReq(weeklyDates[1], "evening");
                      }}
                    >
                      {shiftReq.find(
                        (req) =>
                          req.date === weeklyDates[1] &&
                          req.shift === "evening" &&
                          req.request
                      ) ? (
                        <IoMdCheckmark size="2em" color="green" />
                      ) : (
                        <FcCancel size="2em" />
                      )}
                    </button>
                  </div>
                ),
              },
              {
                title: (
                  <div className="shiftBox">
                    <button
                      onClick={() => {
                        toggleShiftReq(weeklyDates[2], "evening");
                      }}
                    >
                      {shiftReq.find(
                        (req) =>
                          req.date === weeklyDates[2] &&
                          req.shift === "evening" &&
                          req.request
                      ) ? (
                        <IoMdCheckmark size="2em" color="green" />
                      ) : (
                        <FcCancel size="2em" />
                      )}
                    </button>
                  </div>
                ),
              },
              {
                title: (
                  <div className="shiftBox">
                    <button
                      onClick={() => {
                        toggleShiftReq(weeklyDates[3], "evening");
                      }}
                    >
                      {shiftReq.find(
                        (req) =>
                          req.date === weeklyDates[3] &&
                          req.shift === "evening" &&
                          req.request
                      ) ? (
                        <IoMdCheckmark size="2em" color="green" />
                      ) : (
                        <FcCancel size="2em" />
                      )}
                    </button>
                  </div>
                ),
              },
              {
                title: (
                  <div className="shiftBox">
                    <button
                      onClick={() => {
                        toggleShiftReq(weeklyDates[4], "evening");
                      }}
                    >
                      {shiftReq.find(
                        (req) =>
                          req.date === weeklyDates[4] &&
                          req.shift === "evening" &&
                          req.request
                      ) ? (
                        <IoMdCheckmark size="2em" color="green" />
                      ) : (
                        <FcCancel size="2em" />
                      )}
                    </button>
                  </div>
                ),
              },
              {
                title: (
                  <div className="shiftBox">
                    <button
                      onClick={() => {
                        toggleShiftReq(weeklyDates[5], "evening");
                      }}
                    >
                      {shiftReq.find(
                        (req) =>
                          req.date === weeklyDates[5] &&
                          req.shift === "evening" &&
                          req.request
                      ) ? (
                        <IoMdCheckmark size="2em" color="green" />
                      ) : (
                        <FcCancel size="2em" />
                      )}
                    </button>
                  </div>
                ),
              },
              {
                title: (
                  <div className="shiftBox">
                    <button
                      onClick={() => {
                        toggleShiftReq(weeklyDates[6], "evening");
                      }}
                    >
                      {shiftReq.find(
                        (req) =>
                          req.date === weeklyDates[6] &&
                          req.shift === "evening" &&
                          req.request
                      ) ? (
                        <IoMdCheckmark size="2em" color="green" />
                      ) : (
                        <FcCancel size="2em" />
                      )}
                    </button>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </div>
      <WhatsAppBtn />
    </div>
  );
};

export default Availability;
