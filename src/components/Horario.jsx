import '../styles/horario.css'
import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import FacebookIcon from '@mui/icons-material/Facebook'

export default function Horario() {
  return (
    <div className='div__main_informacion'>
        <div className='div__informacion'>
            <h4 className='info_titulo'>CONTACTANOS</h4>
            <p className='p__telefono'>+507 6490-0247</p>
            <h5 className='info_telefono'>Teléfono y Whatsapp</h5>
            <div className='div__sociales'>
               <WhatsAppIcon  sx={{fontSize: '3em', color: '#25D366'}}/>
               <InstagramIcon  sx={{fontSize: '3em', color: '#d6249f'}}/>
               <FacebookIcon  sx={{fontSize: '3em', color: '#3b5998'}}/>
              <p>Nuestras redes sociales.</p>
            </div>
        </div>
        <div className='div__informacion'>
            <h4 className='info_titulo'>HORARIO</h4>
            <p className='p__info'>Lunes a Viernes: <span className='span__horario'>08:00 a.m - 5:00 p.m</span></p>
            <p className='p__info'>Sábados: <span className='span__horario'>8:00 a.m - 1:00 p.m</span></p>
            <p className='p__info'>Domingo: <span className='span__horario'>Cerrado</span></p>
        </div>
    </div>
  )
}
