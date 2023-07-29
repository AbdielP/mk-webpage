import '../../styles/cards.css'
import BuildCircleTwoToneIcon from '@mui/icons-material/BuildCircleTwoTone'
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp'
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg'
import RoomTwoToneIcon from '@mui/icons-material/RoomTwoTone'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import ScheduleIcon from '@mui/icons-material/Schedule'
import Button from '@mui/material/Button'

export default function Cards() {
  return (
    <div className='container__cards animate__animated animate__fadeInUp'>

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
            <li>Electromecánica</li>
            {/* <li>Asistencia a domicilio y recogida de vehículo</li> */}
          </ol>
          <Button className='btn_leer' href='#nuestros-servicios' endIcon={<ArrowForwardSharpIcon />} sx={{ color: '#FA5858' }}>
            Leer más
          </Button>
        </div>
      </div>

      <div className='card'>
        <div className="card__header">
          <ScheduleIcon fontSize="large" sx={{ color: 'white'}} />
          <p className='card__p'>HORARIO</p>
        </div>
        <div className='card__container text-center'>
          <p className='text-center'>Lunes a Viernes: <span className='span__horario'>08:00 a.m - 5:00 p.m</span></p>
          <p className='text-center'>Sábados: <b>8:00 a.m - 1:00 p.m</b></p>
          <p className='text-center'>Domingos: <b>Cerrado</b></p>
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
            <Button variant='outlined' color='success' size='small' href='https://goo.gl/maps/mBhxZVQfEYKh2CVQ7' target="_blank" endIcon={<ArrowForwardSharpIcon />}>
              Obtener ubicación
            </Button>
          </div>
        </div>
      </div>

      <div className='card'>
        <div className="card__header">
          <PermPhoneMsgIcon fontSize="large" sx={{ color: 'white'}} />
          <p className='card__p'>CONTACTO</p>
        </div>
        <div className='card__container text-center'>
          {/* <a href='tel:+5076490-0247' className='p__card_phone'>+507 6490-0247</a> */}
          <a href='https://wa.me/50764900247' target='_blank' className='p__card_phone'>+507 6490-0247</a>
          <div className='div__contact'>
            <div className='div__contact_icons'>
              <WhatsAppIcon fontSize="inherit"/>
              <a className='a__contacto' href='https://wa.me/50764900247' target='_blank'>Whatsapp</a>
            </div>
            <div className='div__contact_icons'>
              <LocalPhoneIcon fontSize="inherit"/>
              <a className='a__contacto' href='tel:+5076490-0247'>Teléfono</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
