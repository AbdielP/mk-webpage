import "../../styles/servicios.css"
import Cards from "./Cards"
import CardServicios from "./CardServicios"

export default function Servicios() {
  return (
    <section className="section__servicios">
      <Cards />
      <h3 className="h3">NUESTROS SERVICIOS</h3>
      <div className="div__info">
        <p className="p__servicios">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum vel
          sint necessitatibus esse tempora velit provident corporis, asperiores
          laborum earum.
        </p>
        <hr className="hr" />
        <p className="p__info">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt,
          magni?
        </p>
      </div>
      <div className="div__servicios">
        <CardServicios></CardServicios>
      </div>
    </section>
  )
}