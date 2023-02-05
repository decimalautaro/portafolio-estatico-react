import React from 'react'
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom"
import {HomePage} from "../components/HomePage"
import {Portafolio} from "../components/Portafolio"
import {Services} from "../components/Services"
import {Curriculum} from "../components/Curriculum"
import {Contact} from "../components/Contact"
import { HeaderNav } from '../components/layout/HeaderNav'
import { Footer } from '../components/layout/Footer'

export const MyRoutes = () => {
  return (
    <BrowserRouter>
    {/* HEADER Y NAVEGACION */}
      <HeaderNav/>

    {/* CONTENIDO CENTRAL */}
    <section className='content'>
    <Routes>
        <Route path='/' element= {<Navigate to= "/home"/>}>Inicio</Route>
        <Route path='/home' element= {<HomePage/>}>Inicio</Route>
        <Route path='/portafolio' element= {<Portafolio/>}>Portafolio</Route>
        <Route path='/services' element= {<Services/>}>Servicio</Route>
        <Route path='/curriculum' element= {<Curriculum/>}>Curriculum</Route>
        <Route path='/contact' element= {<Contact/>}>Contacto</Route>
  
    </Routes>

    </section>

    {/* FOOTER */}
      <Footer/>
   
    
    </BrowserRouter>
  )
}
