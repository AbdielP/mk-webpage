import '../styles/horario.css'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined'
import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import FacebookIcon from '@mui/icons-material/Facebook'

export default function Horario() {
  return (
    <div className='div__main_informacion'>
        <div className='div__informacion'>
            <h4 className='info_titulo'>CONTACTANOS</h4>
            <h5 className='info_telefono'>Teléfono y Whatsapp</h5>
            <p>+507 6490-0247</p>
            <p>Nuestras redes sociales</p>
            <div className='div__sociales'>
               <WhatsAppIcon  sx={{fontSize: '3em', color: '#25D366'}}/>
               <InstagramIcon  sx={{fontSize: '3em', color: '#d6249f'}}/>
               <FacebookIcon  sx={{fontSize: '3em', color: '#3b5998'}}/>
            </div>
        </div>
        <div className='div__informacion'>
            <h4>HORARIO</h4>
        </div>
    </div>
  )
}
