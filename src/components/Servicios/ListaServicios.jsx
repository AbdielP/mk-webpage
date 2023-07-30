import "../../styles/servicios/servicio.css"
import mantainance from "../../assets/images/mantainance.jpeg"
import recogida from "../../assets/images/recogida.jpg"
import avanzada from "../../assets/images/avanzada.jpg"
import scanner from "../../assets/images/scanner.jpg"
import engine from "../../assets/images/n55.jpg"

export default function ListaServicios() {
  return (
    <section>
      <div className="div__servicio bg_white">
        <img
          className="img__servicio"
          src={mantainance}
          alt="mantenimiento completo"
        />
        <div className="div__servicio_descripcion">
          <h4 className="subtitulo span_rojo" id="mantenimiento-completo">MANTENIMIENTO COMPLETO</h4>
          <p className="descripcion_servicio">
            El mantenimiento completo para tu carro es un servicio integral y
            detallado que abarca todas las áreas vitales de tu vehículo para
            garantizar su óptimo rendimiento, seguridad y durabilidad. Nuestro
            equipo de mecánicos se encargará de llevar a cabo una revisión
            exhaustiva de todos los componentes y sistemas para identificar
            posibles problemas y realizar las correcciones necesarias.
          </p>
          <ol className="ol__servicios">
            <li>Cambio de aceite y fluidos de motor</li>
            <li>Cambio de bujías</li>
            <li>Cambio de aceite de transmisión</li>
            <li>Filtro de aire y combustible</li>
          </ol>
        </div>
      </div>

      <div className="div__servicio bg_grey bg_img_fondo bg_transmision">
        <img
          className="img__servicio"
          src={engine}
          alt="mecánica general"
        />
        <div className="div__servicio_descripcion" id="mecanica-general">
          <h4 className="subtitulo span_rojo">MECÁNICA GENERAL</h4>
          <p className="descripcion_servicio">
            Nuestro servicio de mecánica general está diseñado para mantener tu
            vehículo en su mejor estado, prevenir problemas futuros y garantizar
            una conducción segura y confiable. Nos enorgullecemos de ofrecer un
            servicio al cliente excepcional, transparencia en los trabajos
            realizados y tarifas competitivas. Confía en nosotros para cuidar de
            tu vehículo como si fuera nuestro propio automóvil.
          </p>
          <ol className="ol__servicios">
            <li>Sistema de frenos</li>
            <li>Suspensión y dirección</li>
            <li>Suspensión de escape</li>
            <li>Sistema eléctrico</li>
            <li>Sistema de enfriamiento</li>
            <li>Sistema de aire acondicionado</li>
            <li>Sistema de transmisión</li>
            <li>Diagnostico básico y avanzado</li>
          </ol>
        </div>
      </div>

      <div className="div__servicio bg_white">
        <img
          className="img__servicio"
          src={avanzada}
          alt="mecánica avanzada"
        />
        <div className="div__servicio_descripcion">
          <h4 className="subtitulo span_rojo" id="mecanica-avanzada">MECÁNICA AVANZADA</h4>
          <p className="descripcion_servicio">
          Ofrecemos un servicio de mecánica avanzada enfocado en resolver problemas complejos en cuaquier vehículo, asegurando que tu automóvil esté en las mejores condiciones posibles. Confía en nosotros para mantener y reparar tu vehículo con precisión y eficiencia utilizando técnicas y herramientas de vanguardia en la industria automotriz. Nuestra meta es proporcionar soluciones confiables y satisfacer las necesidades de nuestros clientes más exigentes.
          </p>
        </div>
      </div>

      <div className="div__servicio bg_grey bg_toolbox bg_img_fondo">
        <img
          className="img__servicio"
          src={scanner}
          alt="recogida de vehiculo"
        />
        <div className="div__servicio_descripcion">
          <h4 className="subtitulo span_rojo" id="electromecanica">ELECTROMECÁNICA</h4>
          <p className="descripcion_servicio">
          Contamos con un equipo de electromecánicos capacitados que cuentan con la habilidad de diagnosticar y resolver una amplia variedad de fallas mecánicas y electrónicas en tu vehículo. Nuestro servicio de electromecánica está diseñado para brindarte soluciones completas y especializadas en vehículos modernos, donde la mecánica y la electrónica se entrelazan.
          </p>
        </div>
      </div>

      <div className="div__servicio bg_white">
        <img
          className="img__servicio"
          src={recogida}
          alt="recogida de vehículo"
        />
        <div className="div__servicio_descripcion">
          <h4 className="subtitulo span_rojo" id="asistencia-remota">ASISTENCIA A DOMICILIO Y RECOGIDA DE VEHICULO</h4>
          <p className="descripcion_servicio">
          Nuestro servicio de recogida de vehículo es una conveniente y eficiente solución para nuestros clientes que requieren llevar su automóvil a nuestro taller para realizar servicios de mantenimiento, reparaciones u otras necesidades relacionadas con su vehículo. Con este servicio, nos encargamos de recoger tu automóvil en la ubicación que nos indiques y llevarlo a nuestro taller, evitándote la molestia de trasladarlo tú mismo.
          </p>
        </div>
      </div>
    </section>
  )
}
