import React from 'react'
import '../../styles/cardservicios.css'
import engine from '../../assets/images/n55.jpg'

export default function CardServicios() {
  return (
    <>
        <div className='card__services'>
            <h4>NOMBRE SERVICIO</h4>
            <img className='img__card_services' src={engine} alt="image" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit nostrum at reprehenderit neque fugit cum?</p>
        </div>

        <div className='card__services'>
            <h4>NOMBRE SERVICIO</h4>
            <img className='img__card_services' src={engine} alt="image" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit nostrum at reprehenderit neque fugit cum?</p>
        </div>

        <div className='card__services'>
            <h4>NOMBRE SERVICIO</h4>
            <img className='img__card_services' src={engine} alt="image" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit nostrum at reprehenderit neque fugit cum?</p>
        </div>
    </>
  )
}
