import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datePickerBox.scss";

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  return (
    <div className="datePicker">
      <ReactDatePicker
        selected={selectedDate}
        onChange={(date: Date | null) => setSelectedDate(date)}
        dateFormat={"dd/MM/yyyy"}
      />
    </div>
  );
};

export default DatePicker;
