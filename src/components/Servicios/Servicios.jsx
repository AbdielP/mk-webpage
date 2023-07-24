import "../../styles/servicios.css";
import Cards from "./Cards";
import Servicio from "./Servicio";

import mantainance from "../../assets/images/mantainance.jpeg";
import engine from "../../assets/images/n55.jpg";

export default function Servicios() {
  return (
    <>
      <section className="section__servicios">
        <Cards />
        <h3 className="h3">NUESTROS SERVICIOS</h3>
        <div className="div__info">
          <p className="p__servicios">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum vel
            sint necessitatibus esse tempora velit provident corporis,
            asperiores laborum earum.
          </p>
          <hr className="hr" />
          <p className="p__info">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt,
            magni?
          </p>
        </div>
      </section>

      <Servicio
        title={"MANTENIMIENTO COMPLETO"}
        img={mantainance}
        description={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit nostrum at reprehenderit neque fugit cum?"
        }
        bg={"bg_white"}
        rowdirection={""}
      />

      <Servicio
        title={"MECÁNICA GENERAL"}
        img={engine}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus perspiciatis tenetur commodi, aliquid laudantium consequuntur ab similique assumenda sunt nulla"
        }
        bg={"bg_grey"}
        rowdirection={"reverse"}
      />

      <Servicio
        title={"MECÁNICA AVANZADA"}
        img={engine}
        description={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores molestias eligendi et, assumenda ex voluptate nesciunt aspernatur voluptas doloribus labore iste totam nostrum consectetur harum quas maiores ipsam dolorem corrupti?"
        }
        bg={"bg_white"}
        rowdirection={""}
      />
    </>
  );
}
