import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <span>LD</span>
        <h3>Lautaro Decima</h3>
      </div>
        <nav>
          <ul>
            <li>
                <NavLink to="home" className={({isActive})=> isActive ? "active" : ""}>Inicio</NavLink>
            </li>
            <li>
                <NavLink to="portafolio" className={({isActive})=> isActive ? "active" : ""}>Portfolio</NavLink>
            </li>
            <li>
                <NavLink to="services" className={({isActive})=> isActive ? "active" : ""}>Servicios</NavLink>
            </li>
            <li>
                <NavLink to="curriculum" className={({isActive})=> isActive ? "active" : ""}>Curriculum</NavLink>
            </li>
            <li>
                <NavLink to="contact" className={({isActive})=> isActive ? "active" : ""}>Contacto</NavLink>
            </li>
          </ul>
        </nav>
    </header>
  )
}
