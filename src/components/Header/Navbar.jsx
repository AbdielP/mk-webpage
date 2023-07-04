import React from 'react'
import '../../styles/navbar.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div class="dropdown">
        <button class="dropbtn"><ArrowDropDownIcon fontSize="medium"></ArrowDropDownIcon>Servicios</button>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <a href="">Contacto</a>
      <a href="">Ubicación</a>
    </nav>
  )
}
