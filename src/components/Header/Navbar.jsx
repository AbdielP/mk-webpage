import React from 'react'
import '../../styles/navbar.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='div__whatsapp'>
        <WhatsAppIcon fontSize="inherit" sx={{color: '#25D366'}}></WhatsAppIcon>
        <a className='a__whatsapp' href='https://wa.me/50764900247' target='_blank'>6490-0247</a>
      </div>
      <div className='div__menu'>

        <div class="dropdown">
          <button class="dropbtn"><ArrowDropDownIcon fontSize="medium"></ArrowDropDownIcon>Servicios</button>
          <div class="dropdown-content">
            <a href="#mantenimiento-completo">Mantenimiento completo</a>
            <a href="#mecanica-general">Mecánica general</a>
            <a href="#mecanica-avanzada">Mecánica avanzada</a>
            <a href="#electromecanica">Electromecánica</a>
            <a href="#asistencia-remota">Asistencia remota</a>
          </div>
        </div>
        <a className="a__menu" href="#horario">Horario</a>
        <a className="a__menu" href="#ubicacion">Ubicación</a>
        <a className="a__menu" href="#contacto">Contacto</a>
      </div>
    </nav>
  )
}
