import React from 'react'

import '../index.css'
function Gallary() {
  return (
    <div className='gallary bg-white p-5'>
    <h1 className='text-center text-capitalize '>Gallary</h1>
    <p className='text-center mt-2 mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae placeat possimus minus maxime ullam distinctio optio totam nemo rem accusantium.</p>
    <div className='d-flex flex-wrap justify-content-center gap-4 '>
    <div className='img-holder '>
    <img src='/images/Gallary.jpg' alt=''></img>
    </div>
    <div className='img-holder '>
    <img src='/images/Gallary-2.jpg' alt=''></img>
    </div>
    <div className='img-holder '>
    <img src='/images/Gallary-3.jpg' alt=''></img>
    </div>
    <div className='img-holder '>
    <img src='/images/Gallary-4.jpg' alt=''></img>
    </div>
    <div className='img-holder '>
    <img src='/images/Gallary-5.jpg' alt=''></img>
    </div>
    </div>
    <div className='d-flex justify-content-center'>
    <button  id='button' className=' text-capitalize text-center text-light mt-5'>load more!..</button>
    </div>
    </div>
  )
}

export default Gallary