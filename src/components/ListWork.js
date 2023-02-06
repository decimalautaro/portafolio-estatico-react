import React from 'react'
import { Link } from 'react-router-dom'
import { works } from '../data/works'

export const ListWork = () => {
  return (
    <section className='works'>
    {
      works.map(work =>{
        return(
          <article key={work.id} className="workItem">
            <div className='mask'>
                <img src= {require(`./../img/${work.id}.png`)} alt={work.id}/>
            </div>
            <h2> <Link to={'/project/'+work.id}>{work.nombre}</Link> </h2>
            <p>{work.description}</p>
            <h3>{work.tecnologias}</h3>
            <span>{work.categories}</span>
        </article>
        )
      })
    }
    </section>
  )
}
