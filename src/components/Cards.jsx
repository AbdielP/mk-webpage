import '../styles/cards.css'
import BuildCircleTwoToneIcon from '@mui/icons-material/BuildCircleTwoTone'
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp'
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
          <p>Mantenimiento completo</p>
          <p>Mecánica general</p>
          <p>Mecánica avanzada</p>
          <p>Servicio de recogida de vehículo</p>
          {/* <ol>
            <li>Mantenimiento completo</li>
            <li>Mecánica general</li>
            <li>Mecánica avanzada</li>
            <li>Servicio de recogida de vehículo</li>
          </ol> */}
          <Button variant="outlined" color='info' endIcon={<ArrowForwardSharpIcon />} sx={{marginTop: '1em'}}>
            Leer más
          </Button>
        </div>
      </div>

      <div className='card'>
        <div className="card__header">
          <BuildCircleTwoToneIcon fontSize="large" sx={{ color: 'white'}} />
          <p className='card__p'>SERVICIOS</p>
        </div>
        <div className='card__container'>
          <p>Mantenimientos</p>
          <p>Mecánica general</p>
          <p>Mecánica avanzada</p>
          <p>Servicio de grúa</p>
          <Button variant="outlined" color='info' endIcon={<ArrowForwardSharpIcon color='secondary' />}>
            Leer más
          </Button>
        </div>
      </div>
    </div>
  )
}
