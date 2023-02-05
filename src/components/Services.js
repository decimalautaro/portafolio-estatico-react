import React from 'react'

export const Services = () => {
  return (
    <div className='page'>
      <h1>
        Servicios
      </h1>

      <section className='services'>
        <article className='services'>
          <h2>Desarrollo Back end</h2>
          <p>Me encargo de desarrollar todo el back end desde cero para tu modelo de negocio creando una API REST para luego poder consumirla desde un front end.</p>
        </article>
      </section>

      <section className='services'>
        <article className='services'>
          <h2>Desarrollo Front end</h2>
          <p>Me encargo de desarrollar todas las vistas para tu página web consumiendo API REST.</p>
        </article>
      </section>

      <section className='services'>
        <article className='services'>
          <h2>Desarrollo Full Stack</h2>
          <p>Me encargo de modelar, desarrollar el back end, desarrollar el front end e integrar todos los servicios para tu pagina web.</p>
        </article>
      </section>

    </div>
  )
}
