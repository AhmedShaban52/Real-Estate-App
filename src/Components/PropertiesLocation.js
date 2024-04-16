import React from 'react'

import '../index.css'
function PropertiesLocation() {
  return (
    <>
    <div className='location text-center '>
    <h1 className='text-capitalize fw-bold mb-4'>Properties by Location</h1>
    <p className='m-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae placeat possimus minus maxime ullam distinctio optio totam nemo rem accusantium.</p>
  </div>
  <div className='location-items mt-5  d-flex flex-wrap justify-content-center gap-4' >
  <div className='box position-relative'>
  <img  src='/images/LocationCard 1.jpg' alt=''></img>
  <div className='icons  position-absolute text-white d-flex gap-5 ms-5 '>
  
  <div className='d-flex gap-2'>
  <img src='/images/Location.png' alt=''></img>
  <span>Washington</span>
  </div>

  <div className='d-flex gap-2'>
  <img src='/images/share.png' alt=''></img>
  <span>12000 ft</span>
  </div>
  </div>
  </div>
  <div className='box position-relative'>
  <img src='/images/LocationCard 2.jpg' alt=''></img>
  <div className='icons position-absolute text-white d-flex gap-5 ms-5'>
  
  <div className='d-flex gap-2'>
  <img src='/images/Location.png' alt=''></img>
  <span>Washington</span>
  </div>

  <div className='d-flex gap-2'>
  <img src='/images/share.png' alt=''></img>
  <span>12000 ft</span>
  </div>
  </div>
  </div>
  <div className='box position-relative'>
  <img src='/images/LocationCard 3.jpg' alt=''></img>
  <div className='icons position-absolute text-white d-flex gap-5 ms-5'>
  
  <div className='d-flex gap-2'>
  <img src='/images/Location.png' alt=''></img>
  <span>Washington</span>
  </div>

  <div className='d-flex gap-2'>
  <img src='/images/share.png' alt=''></img>
  <span>12000 ft</span>
  </div>
  </div>
  </div>
  <div className='box position-relative'>
  <img src='/images/LocationCard 4.jpg' alt=''></img>
  <div className='icons position-absolute text-white d-flex gap-5 ms-5'>
  
  <div className='d-flex gap-2'>
  <img src='/images/Location.png' alt=''></img>
  <span>Washington</span>
  </div>

  <div className='d-flex gap-2'>
  <img src='/images/share.png' alt=''></img>
  <span>12000 ft</span>
  </div>
  </div>
  </div>

  </div>
  <button  id='button' className='text-light text-capitalize text-center mt-5'>load more Listing</button>
    </>
  )
}

export default PropertiesLocation