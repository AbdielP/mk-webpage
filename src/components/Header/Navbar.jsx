import React from 'react'
import '../../styles/navbar.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <a href="">Contacto</a>
      <div class="dropdown">
        <button class="dropbtn">Servicios <ArrowDropDownIcon fontSize="medium"></ArrowDropDownIcon></button>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <a href="">Ubicación</a>
    </nav>
  )
}
