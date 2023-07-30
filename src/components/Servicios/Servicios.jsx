import "../../styles/servicios.css"
import Cards from "./Cards"
import Marcas from "../Marcas/Marcas"
import ListaServicios from "./ListaServicios"

export default function Servicios() {
  return (
    <>
      <section className="section__servicios">
        <Cards />
        <h1 className="h1">
          TALLER M<span className="span_rojo">K</span> - MECÁNICA AVANZADA
        </h1>
        <h2 className="h2 span_rojo">El mejor taller mecánico multimarca en Panamá. </h2>
        <p className="p__servicios" id="nuestros-servicios">
          Nuestro taller abarca una amplia gama de servicios, desde <b>mantenimiento
          preventivo</b>, <b>cambios de aceite</b>, <b>inspección y reemplazo de filtros</b>,
          <b> revisión del sistema de frenos y suspensión</b>, <b>electromecánica</b>, <b>diagnotico avanzado</b>,
          <b> servicios de reparación</b> tanto para averías menores como para
          problemas más complejos y <a className="span_rojo" href="">más</a>.
        </p>
        <hr className="hr" />

        <p className="p__servicios">
          Trabajamos con <span className="span_rojo">todas las marcas de vehículos en Panamá</span>, como Toyota,
          Nissan, BMW, Hyundai, Kia, Audi, Porsche, Mercedez Benz y más...
        </p>
      </section>

      <Marcas />
      <ListaServicios />
    </>
  )
}
