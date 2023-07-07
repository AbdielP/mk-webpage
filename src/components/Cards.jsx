import '../styles/cards.css'
import BuildCircleTwoToneIcon from '@mui/icons-material/BuildCircleTwoTone';

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
            <li>Mantenimiento de vehiculos de cualquier marca</li>
            <li>Mecánica general</li>
            <li>Mecánica avanzada</li>
            <li>Servicio de grúa</li>
          </ol>
          {/* Botón */}
        </div>
      </div>
    </div>
  )
}
