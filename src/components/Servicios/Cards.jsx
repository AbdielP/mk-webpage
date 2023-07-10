import '../../styles/cards.css'
import BuildCircleTwoToneIcon from '@mui/icons-material/BuildCircleTwoTone'
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp'
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone'
import RoomTwoToneIcon from '@mui/icons-material/RoomTwoTone'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
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
          <Button className='btn_leer' href='#' endIcon={<ArrowForwardSharpIcon />} sx={{ color: '#FA5858' }}>
            Leer más
          </Button>
        </div>
      </div>

      <div className='card'>
        <div className="card__header">
          <AccessTimeTwoToneIcon fontSize="large" sx={{ color: 'white'}} />
          <p className='card__p'>HORARIO</p>
        </div>
        <div className='card__container text-center'>
          <p className='text-center'>Lunes a Sábado: <span className='span__horario'>08:00 a.m - 5:00 p.m</span></p>
          <p className='text-center'>Domingos: <b>Cerrado</b></p>
          <p className='text-center'>Emergencias: <span>24 Horas / 7 Días</span></p>
        </div>
      </div>

      <div className='card'>
        <div className="card__header">
          <RoomTwoToneIcon fontSize="large" sx={{ color: 'white'}} />
          <p className='card__p'>UBICACIÓN</p>
        </div>
        <div className='card__container text-center'>
          <p className='p__card_map text-center'>Av. Ernesto T. Lefevre</p>
          <p className='p__card_map text-center'>Al frente de la estación Delta</p>
          <div className='card_map'>
            <Button variant='outlined' color='success' size='small' href='#' endIcon={<ArrowForwardSharpIcon />}>
              Obtener ubicación
            </Button>
          </div>
        </div>
      </div>

      <div className='card'>
        <div className="card__header">
          <RoomTwoToneIcon fontSize="large" sx={{ color: 'white'}} />
          <p className='card__p'>CONTACTO</p>
        </div>
        <div className='card__container text-center'>
          <p className='p__card_phone'>+507 6490-0247</p>
          <div className='div__contact'>
            <div className='div__contact_icons'>
              <WhatsAppIcon fontSize="inherit"/>
              <p>Whatsapp</p>
            </div>
            <div className='div__contact_icons'>
              <LocalPhoneIcon fontSize="inherit"/>
              <p>Teléfono</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
