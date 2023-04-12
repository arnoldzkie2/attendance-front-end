import React, { useState, useEffect } from "react";
import "./home.css";

const Home = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <div className="container">
      <div className="date">
        <div className="day"> {formattedDate} </div>
        <div className="time"> {formattedTime} </div>
      </div>
      <div className="main-msg">
        You have checked in. <span>Arnold Nillas</span>
      </div>
      <button style={{ backgroundColor: "var(--failed)" }}>
        Out <i className="fa-solid fa-arrow-right-from-bracket"></i>
      </button>
    </div>
  );
};

export default Home;
