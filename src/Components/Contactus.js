import React from 'react'
import '../index.css'
function Contactus() {
  return (
    <>
    <div className='contact text-center'>
    <h1 className='fw-bold' >Contact Us</h1>
    <p className='mb-5  m-auto p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae placeat possimus minus maxime ullam distinctio optio totam nemo rem accusantium.</p>

    <div className='form mb-5 p-4 bg-white m-auto'>
    <div className='container'>
    <h1 className='d-flex fs-4 fw-bold'>Enquiry Form</h1>
    <p className='d-flex mb-2 '>Are you looking for details about a certain property? Ask us a question using the form below.</p>
    <form className='p-1'>
    <div className='d-flex gap-4 name' >
    <input className='d-flex w-50 p-3' type='text' placeholder='FirstName' />
    <input  className='d-flex w-50 p-3'type='text' placeholder='LastName' />
    </div>

    <div className='email'>
    <input className='p-3 w-100 mt-3 ' type='email' placeholder='email id' />
    </div>

    <div>
    <textarea className='w-100 mt-3 p-2 ' type='email' placeholder='Comment or quesitions' />
    </div>

    </form>
    <button id='button ' className='text-white text-capitalize text-center mt-2 p-3 border-0 '>Submit</button>
    </div>
    </div>
    </div>

   
    </>
  )
}

export default Contactus