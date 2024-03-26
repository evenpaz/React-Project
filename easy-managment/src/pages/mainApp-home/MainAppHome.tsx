import Clock from "../../components/clock/Clock";
import IconAndTextBtn from "../../components/iconAndTextBtn/IconAndTextBtn";
import NavbarApp from "../../components/navbar-app/NavbarApp";
import WhatsAppBtn from "../../components/whatsAppBtn/WhatsAppBtn";
import "./mainAppHome.scss";
import { VscDebugStart } from "react-icons/vsc";

import { GiNightSleep } from "react-icons/gi";
import CurrentRota from "../../components/currentRota/CurrentRota";
// import WeeklyCalendarContext from "../../context/WeeklyCalendarContext";

const MainAppHome = () => {
  let date: Date = new Date();

  const handleClockIn = () => {
    alert("clock in");
  };

  const handleClockOut = () => {
    alert("clock out");
  };

  return (
    <div className="mainAppHomePage">
      <NavbarApp />
      <div className="mainAppHomePage__container">
        <div className="mainAppHomePage__container-right">
          <div className="rotaBox-currentWeek">
            <CurrentRota />
          </div>
          {/* <div className="rotaBox-nextWeek">rota next week</div> */}
          {/* <div className="managerAlertBox">manager alert</div> */}
          <div className="timeClockBox">
            <div className="timeClockBox__date">
              <p>
                {new Date(date).toLocaleDateString("he-Il", {
                  weekday: "long",
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                })}
              </p>
            </div>
            <Clock />
            <div className="clockItBtn">
              <IconAndTextBtn
                flexDisplay="in_flex_row"
                iconAndTextBtnArr={[
                  {
                    id: "greenBtn",
                    logoSrc: <VscDebugStart size="2em" />,
                    text: "החתמת כניסה",
                    linkTo: "",
                    onclick() {
                      handleClockIn();
                    },
                  },
                  {
                    id: `redBtn`,
                    logoSrc: <GiNightSleep size="2em" />,
                    text: " החתמת יציאה",
                    linkTo: "",
                    onclick() {
                      handleClockOut();
                    },
                  },
                ]}
              />
            </div>
          </div>
        </div>
        {/* <div className="mainAppHomePage__container-left">
          <div className="managerMsgBox">manager msg</div>
        </div> */}
      </div>
      <WhatsAppBtn />
    </div>
  );
};

export default MainAppHome;
