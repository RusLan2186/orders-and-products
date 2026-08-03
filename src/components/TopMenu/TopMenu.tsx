import { useEffect, useState } from "react";
import "./TopMenu.scss";
import logo from "../../assets/logo.png";

const WEEKDAYS = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
const MONTHS = [
  "Янв",
  "Фев",
  "Мар",
  "Апр",
  "Май",
  "Июн",
  "Июл",
  "Авг",
  "Сен",
  "Окт",
  "Ноя",
  "Дек",
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

export const TopMenu = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
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
          <input className="top-menu__search" type="text" placeholder="Поиск" />
        </div>
        <div className="top-menu__info">
          <div className="top-menu__date">
            <span className="top-menu__weekday">{weekday}</span>
            <span className="top-menu__day">{dateStr}</span>
          </div>
          <span className="top-menu__time">{time}</span>
        </div>
      </div>
    </div>
  );
};
