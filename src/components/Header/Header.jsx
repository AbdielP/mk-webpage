import React from "react";
import HeaderBackground from "./HeaderBackground";
import "../../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__div">
        <h1 className="h1">Taller MK</h1>
        <h2>Mecánica general avanzada </h2>
        <h3>Taller en Panamá</h3>
      </div>
      
      {/* <HeaderBackground /> */}
    </header>
  );
}
