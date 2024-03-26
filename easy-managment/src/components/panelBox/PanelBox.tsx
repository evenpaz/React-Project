import { ReactNode } from "react";
import "./panelBox.scss";
import { RxTrackNext, RxTrackPrevious } from "react-icons/rx";
import { FcCalendar } from "react-icons/fc";

type PanelBoxProps = {
  headline: string;
  textBox?: ReactNode;
  btnBox?: ReactNode;
  listBox?: ReactNode;
  startDate?: Date;
  setStartDate?: (date: Date) => Date;
};

let date: Date = new Date();

const PanelBox = ({
  headline,
  textBox,
  btnBox,
  listBox,
  startDate,
  setStartDate,
}: PanelBoxProps) => {
  const handleGetCurrentWeek = () => {
    const currentDate = new Date();
    const currentWeekStartDate = new Date(currentDate);
    currentWeekStartDate.setDate(currentDate.getDate() - currentDate.getDay());
    setStartDate(currentWeekStartDate);
  };

  const handleGetPreviousWeek = () => {
    let previousWeekStartDate = new Date(startDate);
    previousWeekStartDate.setDate(previousWeekStartDate.getDate() - 7);
    setStartDate(previousWeekStartDate);
  };

  const handleGetNextWeek = () => {
    let previousWeekStartDate = new Date(startDate);
    previousWeekStartDate.setDate(previousWeekStartDate.getDate() + 7);
    setStartDate(previousWeekStartDate);
  };

  return (
    <div className="panelBox">
      <div className="panelBox__header">
        <h3>{headline}</h3>
        <p>
          {new Date(date).toLocaleDateString("he-Il", {
            weekday: "long",
            year: "numeric",
            month: "numeric",
            day: "numeric",
          })}
        </p>
        <hr />
      </div>
      <div className="panelBox__weeksBtn-box">
        <button onClick={handleGetPreviousWeek}>
          <RxTrackPrevious size="3em" color="var(--icon-color)" />
        </button>
        <button onClick={handleGetCurrentWeek}>
          <FcCalendar size="3em" />
        </button>
        <button onClick={handleGetNextWeek}>
          <RxTrackNext size="3em" color="var(--icon-color)" />
        </button>
      </div>
      <div className="PanelBox_textBox"> {textBox}</div>
      <div className="PanelBox_btnBox">{btnBox}</div>
      <div className="PanelBox_listBox">{listBox}</div>
    </div>
  );
};

export default PanelBox;
