import React, { useEffect, useState } from "react";

export default function Clock() {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [session, setSession] = useState("AM");

  const setClock = () => {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let newSession = "AM";

    if (hour > 12) {
      hour -= 12;
      hour = `0${hour}`;
      newSession = "PM";
    }

    if (minute < 10) {
      minute = `0${minute}`;
    }

    if (second < 10) {
      second = `0${second}`;
    }

    setHours(hour);
    setMinutes(minute);
    setSeconds(second);
    setSession(newSession);
  };

  useEffect(() => {
    setClock();
    let interval = setInterval(() => {
      setClock();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div>
      <h1>Clock</h1>
      {`${hours}:${minutes}:${seconds} ${session}`}
    </div>
  );
}
