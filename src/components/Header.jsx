import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import Clock from "./Clock";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const currentDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('ru-RU', options);
  

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            width="40"
            height="40"
            className="logo-svg"
          >
            <circle cx="50" cy="50" r="40" fill="#009900" />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="24"
              fontFamily="Arial, sans-serif"
              dy=".3em"
            >
              Logo
            </text>
          </svg>
        </Link>
      </div>
      <Clock/>
      
      <div className="clock">
      {formattedDate}
      </div>

      <div className={`burger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div
        className={`overlay ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      ></div>
      <nav className={`navigation ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Главная
            </Link>
          </li>
          <li>
            <Link to="/order" onClick={toggleMenu}>
              Форма заказа
            </Link>
          </li>
        </ul>
        <button className="close-btn" onClick={toggleMenu}>
          <FaTimes />
        </button>
      </nav>
    </header>
  );
};

export default Header;
