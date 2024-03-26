import { useState } from "react";

type WeeklyCalendarContextProps = {
  date: Date;
  shift: string;
  shiftReq: { date: Date; shift: string; request: boolean }[];
  setShiftReq: (shiftReq: any) => void;
};

const WeeklyCalendarContext = ({
  date,
  shift,
  shiftReq,
  setShiftReq,
}: WeeklyCalendarContextProps) => {
  const index = shiftReq.findIndex((req) => {
    req.date === date && req.shift === shift;
  });
  const handleClick = () => {
    const updateShiftRequest = [...shiftReq];
    updateShiftRequest[index] = {
      date: date,
      shift: shift,
      request: !shiftReq[index].request || true,
    };
    setShiftReq(updateShiftRequest);
  };

  return (
    <button onClick={handleClick}>
      {date.toLocaleDateString(`en-GB`)}-{shift}
      {shiftReq[index].request ? "{requested" : ""}
    </button>
  );
};

export default WeeklyCalendarContext;
