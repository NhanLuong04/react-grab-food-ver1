import React, { useState } from "react";
import "./DateTimeDelivery.css";
export default function DateTimeDelivery() {
  const [date, setDate] = useState("Hôm nay");
  const [time, setTime] = useState("Ngay bây giờ");
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  return (
    <div className="date-time-deliver">
      <div className="date-deliver">
        <img
          src="https://food.grab.com/static/images/icons/icon-calendar.svg"
          alt="logo"
        />
        <select
          onChange={handleDateChange}
          className="date-deliver-today"
          value={date}
        >
          <option>Hôm nay</option>
          <option> Mon, 15 Apr</option>
          <option>Tue, 16 Apr</option>
        </select>
      </div>
      <div className="time-deliver">
        <img
          src="https://food.grab.com/static/images/icons/icon-clock.svg"
          alt="logo"
        />
        <select
          onChange={handleTimeChange}
          className="date-deliver-time"
          value={time}
        >
          <option>Ngay bây giờ</option>
          <option> 17:30 - 17:45</option>
          <option> 17:45 - 18:00</option>
          <option> 18:00 - 18:15</option>
          <option> 18:15 - 18:30</option>
          <option> 18:30 - 18:45</option>
          <option> 18:45 - 19:00</option>
        </select>
      </div>
    </div>
  );
}
