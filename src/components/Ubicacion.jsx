import Button from '@mui/material/Button'
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp'
import '../styles/ubicacion.css'

export default function Ubicacion() {
  return (
    <div className='div__ubicacion'>
        <div className='div__ubicacion_info'>
          <div className='div__imgagen_local' />
          <div className='div__info_ubicacion'>
            <p>Av. Ernesto T. Lefevre</p>
            <p>Al frente de la estación Delta</p>
            <Button color='secondary' size='small' href='#' endIcon={<ArrowForwardSharpIcon /> } sx={{ color: '#FA5858',marginLeft: -.7 }}>
            Ver ubicación
            </Button>
          </div>
        </div>
    </div>
  )
}
