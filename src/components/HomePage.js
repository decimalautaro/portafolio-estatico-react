import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <div>
      <h1>
        Hola soy Lautaro Decima, soy desarrollador full stack y ofrezco mis servicios de programación
         y desarrollo en todo tipo de proyectos web, ya sea back end o front end.
      </h1>
      <h2>
        Alguna de las skills que manejo son: HTML, CSS, Javascript, Typescript, NodeJS, Express, React, NestJs, SQL, MongoDB, ORMs y Métodologias Agiles (Scrum).
        <Link to="contact">Contacta conmigo.</Link>
      </h2>

      <section className='lastWorks'>
        <h2>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis proyectos en desarrollo web</p>
        <div className='works'>

        </div>
      </section>
    </div>
  )
}
