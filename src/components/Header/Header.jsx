import React from "react";
import HeaderBackground from "./HeaderBackground";
import "../../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <HeaderBackground />
      <div className="header__div">
        <h1 className="h1">Taller <span className="span__m">M</span><span className="span__k">K</span></h1>
        <h2 className="h2">Mecánica general <span>avanzada</span></h2>
      </div>
      
    </header>
  );
}
