import React from "react";
import Navbar from "./Navbar";
import "../../styles/header.css";
import logomk from '../../assets/images/logo_mk.png'

export default function Header() {
  return (
    <header className="header">
      <Navbar />
      <div className="header__div animate__animated animate__fadeIn animate__delay-1s">
        <img className="img__logo" src={logomk} alt="logo taller mk" />
      </div>
    </header>
  );
}
