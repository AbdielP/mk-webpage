import "../../styles/servicios.css";
import Cards from "./Cards";
import Marcas from "../Marcas/Marcas";
import Servicio from "./Servicio";
import BuildCircleOutlinedIcon from "@mui/icons-material/BuildCircleOutlined";

import mantainance from "../../assets/images/mantainance.jpeg";
// import transmision from "../../assets/images/transmision.png"
import avanzada from "../../assets/images/avanzada.jpg";
import engine from "../../assets/images/n55.jpg";

export default function Servicios() {
  return (
    <>
      <section className="section__servicios">
        <Cards />
        <h3 className="h3">
          <BuildCircleOutlinedIcon
            fontSize="inherit"
            sx={{ marginRight: ".3em" }}
          />{" "}
          NUESTROS SERVICIOS
        </h3>
        <p className="p__servicios">
          Somos un <span className="span_rojo">taller de mecánica multimarca en Panamá</span>. Nuestro
          taller abarca una amplia gama de servicios, desde <b>mantenimiento
          preventivo</b>, <b>cambios de aceite</b>, <b>inspección y reemplazo de filtros</b>,
          <b> revisión del sistema de frenos y suspensión</b>, <b>diagnotico avanzado</b>,
          <b> servicios de reparación</b> tanto para averías menores como para
          problemas más complejos y <a className="span_rojo" href="">más servicios</a>.
        </p>
        <hr className="hr" />

        <p className="p__servicios">
          Trabajamos con <span className="span_rojo">todas las marcas de vehiculos en Panamá</span>, como Toyota,
          Nissan, BMW, Hyundai, Kia, Audi, Porsche, Mercedez Benz y más...
        </p>
      </section>

      <Marcas />

      <Servicio
        title={"MANTENIMIENTO COMPLETO"}
        img={mantainance}
        description={
          "El mantenimiento completo para tu carro es un servicio integral y detallado que abarca todas las áreas vitales de tu vehículo para garantizar su óptimo rendimiento, seguridad y durabilidad. Nuestro equipo de mecánicos se encargará de llevar a cabo una revisión exhaustiva de todos los componentes y sistemas para identificar posibles problemas y realizar las correcciones necesarias."
        }
        bg={"bg_white"}
        imgpadding={"white_padding"}
      />

      <Servicio
        title={"MECÁNICA GENERAL"}
        img={engine}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus perspiciatis tenetur commodi, aliquid laudantium consequuntur ab similique assumenda sunt nulla"
        }
        bg={"bg_grey"}
        fondo={"bg_test"}
        imgpadding={"grey_padding"}
      />

      <Servicio
        title={"MECÁNICA AVANZADA"}
        img={avanzada}
        description={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores molestias eligendi et, assumenda ex voluptate nesciunt aspernatur voluptas doloribus labore iste totam nostrum consectetur harum quas maiores ipsam dolorem corrupti?"
        }
        bg={"bg_white"}
        imgpadding={"white_padding"}
      />
    </>
  );
}
