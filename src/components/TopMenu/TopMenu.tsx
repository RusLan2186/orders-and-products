import { useEffect, useState } from "react";
import "./TopMenu.scss";
import logo from "../../assets/logo.png";
import { io } from "socket.io-client";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setSearchQuery } from "../../store/searchSlice";

const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const formatDate = (date: Date) => {
  const weekday = WEEKDAYS[date.getDay()];
  const day = String(date.getDate()).padStart(2, "0");
  const month = MONTHS[date.getMonth()];
  const year = date.getFullYear();
  const time = date.toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return { weekday, dateStr: `${day} ${month}, ${year}`, time };
};
const SOCKET_URL = "http://localhost:4000";

export const TopMenu = () => {
  const [now, setNow] = useState(new Date());
  const [activeSessions, setActiveSessions] = useState(0);
  const dispatch = useAppDispatch();
  const query = useAppSelector((state) => state.search.query);

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const socket = io(SOCKET_URL);

    socket.on("sessions:count", (count: number) => {
      setActiveSessions(count);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const { weekday, dateStr, time } = formatDate(now);

  return (
    <div className="top-menu">
      <div className="top-menu__container">
        <div className="top-menu__start">
          <a className="top-menu__logo" href="/">
            <img src={logo} alt="Logo" className="top-menu__logo-icon" />
            <span className="top-menu__logo-text">INVENTORY</span>
          </a>
          <input
            className="top-menu__search"
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          />
        </div>
        <div className="top-menu__end">
          <div className="top-menu__info">
            <div className="top-menu__date">
              <span className="top-menu__weekday">{weekday}</span>
              <span className="top-menu__day">{dateStr}</span>
            </div>
            <span className="top-menu__time">{time}</span>
          </div>
          <div className="top-menu__sessions" title="Активные вкладки">
            <span>Active Sessions:</span>
            <span>{activeSessions}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
