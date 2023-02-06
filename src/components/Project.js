import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { works } from '../data/works.js'


export const Project = () => {
    
    const [project, setProject] = useState({})
    const params = useParams()

    useEffect(()=>{
        let project = works.filter(work => work.id === params.id)
        console.log(project)
        return setProject(project[0])
    },[])

  return (
    <div className='page page-work'>

        <h1 className='heading'>{project.nombre}</h1>
        <div className='mask'>
            <img src={require(`./../img/${params.id}.png`)} alt={params.id} />
        </div>
        <p>{project.description}</p>
        <p>{project.tecnologias}</p>
        <a href={project.url} target='blank'>Ir al proyecto</a>

    </div>
  )
}
