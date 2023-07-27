import React from "react";
import "../../styles/servicios/servicio.css";

export default function Servicio({ title, img, description, bg, imgpadding }) {
  return (
    <div className={`div__servicio ${bg}`}>
      <img className={`img__servicio ${imgpadding}`} src={img} alt="auto servicio" />
      <div className="div__servicio_descripcion">
        <h4 className="subtitulo">{title}</h4>
        <p className="descripcion_servicio">{description}</p>
      </div>
    </div>
  );
}
// MATAR CardServicios y su CSS
