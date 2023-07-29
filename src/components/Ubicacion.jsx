import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import FacebookIcon from '@mui/icons-material/Facebook'
import Link from '@mui/material/Link'

import '../styles/ubicacion.css'

export default function Ubicacion() {
  return (
    <div className='container__ubicacion'>
      <div className='div__info'>
        <h4 className='subtitulo'>UBICACIÓN</h4>
        <p className='p__ubicacion' id='ubicacion'>Estamos ubicados en la Avenida Ernesto T. Lefevre, Al frente de la estación Delta.</p>

        <div className='div__informacion'>
            <h4 className='subtitulo' id='contacto'>CONTACTANOS</h4>
            {/* <p className='p__telefono'>+507 6490-0247</p> */}
            <p className='p__telefono'>+507 6490-0247<span className='info_telefono'> Teléfono y Whatsapp</span></p>
            <div className='div__sociales'>
               <Link href='https://wa.me/50764900247' target='_blank' sx={{color: '#25D366'}}><WhatsAppIcon sx={{fontSize: '3em'}}/></Link>
               <Link href="https://www.instagram.com/tallermkpty/?hl=en" target='_blank' sx={{color: '#d6249f'}}><InstagramIcon sx={{fontSize: '3em'}}/></Link>
               <Link href="https://www.facebook.com/tallermkpty" target='_blank' sx={{color: '#3b5998'}}><FacebookIcon sx={{fontSize: '3em'}}/></Link>
              <p>Nuestras redes sociales.</p>
            </div>
        </div>
        
        <div className='div__informacion'>
            <h4 className='subtitulo' id='horario'>HORARIO</h4>
            <p className='p__info'>Lunes a Viernes: <span className='span__horario'>08:00 a.m - 5:00 p.m</span></p>
            <p className='p__info'>Sábados: <span className='span__horario'>8:00 a.m - 1:00 p.m</span></p>
            <p className='p__info'>Domingo: <span className='span__horario'>Cerrado</span></p>
        </div>
        
      </div>
      <div className='div__mapa'>
        <iframe className='iframe' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d246.28905363191808!2d-79.50177523619372!3d9.006623436314488!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca9bad08722df%3A0x9aa591b4d518ae74!2sFan&#39;s%20Car!5e0!3m2!1sen!2spa!4v1689374193566!5m2!1sen!2spa" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}
