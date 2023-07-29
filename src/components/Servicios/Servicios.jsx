import "../../styles/servicios.css"
import Cards from "./Cards"
import Marcas from "../Marcas/Marcas"
import ListaServicios from "./ListaServicios"
import BuildCircleOutlinedIcon from "@mui/icons-material/BuildCircleOutlined"

export default function Servicios() {
  return (
    <>
      <section className="section__servicios">
        <Cards />
        <h3 className="h3">
          <BuildCircleOutlinedIcon
            fontSize="inherit"
            sx={{ marginRight: ".3em" }}
          />
          NUESTROS SERVICIOS
        </h3>
        <p className="p__servicios" id="nuestros-servicios">
          Somos un <span className="span_rojo">taller de mecánica multimarca en Panamá</span>. Nuestro
          taller abarca una amplia gama de servicios, desde <b>mantenimiento
          preventivo</b>, <b>cambios de aceite</b>, <b>inspección y reemplazo de filtros</b>,
          <b> revisión del sistema de frenos y suspensión</b>, <b>electromecánica</b>, <b>diagnotico avanzado</b>,
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
      <ListaServicios />
    </>
  )
}
