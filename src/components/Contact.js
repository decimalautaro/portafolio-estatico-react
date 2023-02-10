import React, { useState } from 'react'

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
          await fetch(`http://nodemailer-send-email-production.up.railway.app/send-email`, 
      {
        method: "POST", 
        body:JSON.stringify(formData),   
        headers: {"Content-type": "application/json; charset=UTF-8"} 
       });
      
    } catch (error) {
      console.log(error)
      
    }
 
      
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };
  
  return (
    <div className='page'>
      <h1 className='heading'>Contacto</h1>

      <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder='Nombre' value={formData.name} onChange={handleChange} />
      <input type="text" name="lastname" placeholder='Apellido' value={formData.lastname} onChange={handleChange} />
      <input type="number" name="phone" placeholder='Telefono' value={formData.phone} onChange={handleChange} />
      <input type="email" name="email" placeholder='Email'value={formData.email} onChange={handleChange} />
      <textarea name="message" placeholder='Ingrese el mensaje' value={formData.message} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
    </div>
  )}

