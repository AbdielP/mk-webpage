import React from 'react'
import '../../styles/cardservicios.css'
import engine from '../../assets/images/n55.jpg'
import mantainance from '../../assets/images/mantainance.jpeg'
import avanzada from '../../assets/images/avanzada.jpg'

export default function CardServicios() {
  return (
    <>
        <div className='card__services'>
            <h4 className='card__services__h4'>MANTENIMIENTO COMPLETO</h4>
            <img className='img__card_services' src={mantainance} alt="mantenimiento_completo" />
            <p className='card__services__p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit nostrum at reprehenderit neque fugit cum?</p>
        </div>

        <div className='card__services'>
            <h4 className='card__services__h4'>MECÁNICA GENERAL</h4>
            <img className='img__card_services' src={engine} alt="mecanica_general" />
            <p className='card__services__p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus perspiciatis tenetur commodi, aliquid laudantium consequuntur ab similique assumenda sunt nulla.</p>
        </div>

        <div className='card__services'>
            <h4 className='card__services__h4'>MECÁNICA AVANZADA</h4>
            <img className='img__card_services' src={avanzada} alt="mecanica_avanzada" />
            <p className='card__services__p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero debitis consequatur, dolore enim quis maxime blanditiis natus ullam cupiditate fugit, illum placeat doloribus aut magnam, perferendis sunt optio ut. Expedita..</p>
        </div>

        <div className='card__services'>
            <h4 className='card__services__h4'>SERVICIO DE RECOGIDA DE VEHÍCULO</h4>
            <img className='img__card_services' src={engine} alt="mecanica_avanzada" />
            <p className='card__services__p'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, vel. Unde vero labore, temporibus esse magnam perferendis molestias!</p>
        </div>
    </>
  )
}
