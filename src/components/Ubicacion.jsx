import Button from '@mui/material/Button'
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp'
import '../styles/ubicacion.css'

export default function Ubicacion() {
  return (
    // <>
    //   <iframe className='iframe' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d246.28905363191808!2d-79.50177523619372!3d9.006623436314488!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca9bad08722df%3A0x9aa591b4d518ae74!2sFan&#39;s%20Car!5e0!3m2!1sen!2spa!4v1689374193566!5m2!1sen!2spa" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    // </>
    <div className='div__ubicacion'>
        <div className='div__ubicacion_info'>
          <div className='div__imgagen_local' />
          <div className='div__info_ubicacion'>
            <p>Av. Ernesto T. Lefevre</p>
            <p>Al frente de la estación Delta</p>
            <Button color='secondary' size='small' href='https://goo.gl/maps/mBhxZVQfEYKh2CVQ7' target="_blank" endIcon={<ArrowForwardSharpIcon /> } sx={{ color: '#FA5858', margin: 0, padding: 0 }}>
            Ver ubicación
            </Button>
          </div>
        </div>
    </div>
  )
}