import "../../styles/servicios.css"
import Cards from "./Cards"
import Marcas from "../Marcas/Marcas"
import Servicio from "./Servicio"
import BuildCircleOutlinedIcon from '@mui/icons-material/BuildCircleOutlined'

import mantainance from "../../assets/images/mantainance.jpeg"
import avanzada from "../../assets/images/avanzada.jpg"
import engine from "../../assets/images/n55.jpg"

export default function Servicios() {
  return (
    <>
      <section className="section__servicios">
        <Cards />
        <h3 className="h3"><BuildCircleOutlinedIcon fontSize="inherit" sx={{ marginRight: '.3em' }} /> NUESTROS SERVICIOS</h3>
        <p className="p__servicios">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae temporibus molestiae consectetur delectus quam libero quisquam incidunt tenetur. Sapiente, modi praesentium debitis dolorem qui id? Voluptates quo nulla laudantium harum nihil! At vero, nam minus fugiat illum laborum maiores? Quas omnis fugiat distinctio tempore voluptatibus quibusdam sit, unde veritatis tempora.
        </p>
        {/* <hr className="hr" /> */}
      </section>

      <Marcas />

      <Servicio
        title={"MANTENIMIENTO COMPLETO"}
        img={mantainance}
        description={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit nostrum at reprehenderit neque fugit cum?"
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
  )
}
