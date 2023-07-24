import React from "react";
import "../../styles/servicios/servicio.css";

export default function Servicio({ title, img, description, bg, rowdirection }) {
  return (
    <div className={`div__servicio ${bg} ${rowdirection}`}>
      <img className="img__servicio" src={img} alt=" completo" />
      <div className="div__servicio_descripcion">
        <h4 className="title_servicio">{title}</h4>
        <p className="descripcion_servicio">{description}</p>
      </div>
    </div>
  );
}
// MATAR CardServicios y su CSS
