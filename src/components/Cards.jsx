import '../styles/cards.css'
import BuildCircleTwoToneIcon from '@mui/icons-material/BuildCircleTwoTone'
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp'
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone'
import Button from '@mui/material/Button'

export default function Cards() {
  return (
    <div className='container__cards'>

      <div className='card'>
        <div className="card__header">
          <BuildCircleTwoToneIcon fontSize="large" sx={{ color: 'white'}} />
          <p className='card__p'>SERVICIOS</p>
        </div>
        <div className='card__container'>
          <ol className='ol__servicios'>
            <li>Mantenimiento completo</li>
            <li>Mecánica general</li>
            <li>Mecánica avanzada</li>
            <li>Servicio de recogida de vehículo</li>
          </ol>
          <Button href='#' endIcon={<ArrowForwardSharpIcon />} sx={{ color: '#FA5858' }}>
            Leer más
          </Button>
        </div>
      </div>

      <div className='card'>
        <div className="card__header">
          <AccessTimeTwoToneIcon fontSize="large" sx={{ color: 'white'}} />
          <p className='card__p'>HORARIO</p>
        </div>
        <div className='card__container'>
          <p>Lunes a Sábado: <span className='span__horario'>08:00 a.m - 5:00 p.m</span></p>
          <p>Domingos: <b>Cerrado</b></p>
          <p>Emergencias: <span>24 Horas / 7 Días</span></p>
        </div>
      </div>

    </div>
  )
}
