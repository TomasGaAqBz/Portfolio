import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef(null)
  const[form,setForm]= useState({name:"",email:"",message:""})
  const[isLoading,setIsloding] = useState(false)
  const handleChange = (e) =>{
    setForm({...form, [e.target.name] : e.target.value})
  }
  const handleFocus = (e) =>{
  }
  const handleBlur = () =>{

  }
  const handleSubmit = () => {

    e.preventDefault()
    setIsloding(true)

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Tomas",
        from_email: form.email,
        to_email: 'tomasaquinogabi@gmail.com',
        message: form.message

      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    )
    .then(() =>{
      setIsloding(false)
      // Show Succes Message
      //hide an Alert
    }).catch((error) =>{
      setIsloding(false)
      console.log(error)
      //show error mesagge
    })


  }


  return (
    <section className=' relative flex lg:flex-row flex-col max-container'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Pongamonos en contacto</h1>
        
        <form
        className=' w-full flex flex-col gap-7 mt-14'
        onSubmit={handleSubmit}
        >
          {/* name*/ }
          <label className='text-black font-semibold' >
            Name:
            <input
            type="text" 
            name="name" 
            className='input' 
            placeholder='John Doe'
            required
            value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
            </label>
            {/* Email*/ }
            <label className='text-black font-semibold' >
            Email:
            <input
            type="text" 
            name="email" 
            className='input' 
            placeholder='John.doe@mail.com'
            required
            value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
            </label>
            {/* message */ }
            <label className='text-black font-semibold' >
            Tu Mensaje:
            <textarea
            name="message"
            rows={4}
            className='textarea' 
            placeholder='Dime como puedo ayudarte?'
            required
            value={form.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
            </label>
            <button 
            type='submit'
            className='btn'
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
            >
              {isLoading? 'Enviando...': "Enviar"}
            </button>

        </form>
      </div>
      
    </section>
  )
}

export default Contact
