import React from 'react'
import '../index.css'
function PropertiesArea() {
  return (
    <>
    <div className="text  ">
    <h1 className="text-center mt-5 fw-bolder fs-1" >Property By Area</h1>
    <p className='w-100 text-center '>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
      placeat possimus minus maxime ullam distinctio optio totam nemo rem
      accusantium.
    </p>
    <div className='container'>
    <div className="box d-flex flex-wrap  ">
      <div className="parent d-flex ">
        <div className="holder-item position-relative mb-4 me-3">
          <img className='w-100'
            src="https://reisestate.vercel.app/assets/Card%201-9ab8567a.jpg"
            alt=""
          ></img>
          <div className="title position-absolute ">
            <p className="text-light m-0">Centerville</p>
            <p className="text-light m-0">25 listed</p>
          </div>
        </div>

        <div className="holder-item position-relative mb-4 me-3 overflow-hidden">
          <img className='w-100'
            src="https://reisestate.vercel.app/assets/Card%202-016ee4e2.jpg"
            alt=""
          ></img>
          <div className="title position-absolute">
            <p className="text-light m-0">Centerville</p>
            <p className="text-light m-0">25 listed</p>
          </div>
        </div>

        <div className="holder-item position-relative mb-4 me-3 overflow-hidden">
          <img className='w-100'
            src="https://reisestate.vercel.app/assets/Card%203-5bd64a88.jpg"
            alt=""
          ></img>
          <div className="title position-absolute">
            <p className="text-light m-0">Centerville</p>
            <p className="text-light m-0">25 listed</p>
          </div>
        </div>
      </div>

      <div className="section2 d-flex">
        <div className="holder-item position-relative mb-4 me-3 overflow-hidden">
          <img className='w-100'
            src="https://reisestate.vercel.app/assets/Card%204-62ffa48c.jpg"
            alt=""
          ></img>
          <div className="title position-absolute">
            <p className="text-light m-0">Centerville</p>
            <p className="text-light m-0">25 listed</p>
          </div>
        </div>

        <div className="holder-item position-relative mb-4 me-3 overflow-hidden">
          <img className='w-100'
            src="https://reisestate.vercel.app/assets/Card%205-a80561ac.jpg"
            alt=""
          ></img>
          <div className="title position-absolute">
            <p className="text-light m-0">Centerville</p>
            <p className="text-light m-0">25 listed</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> 
    </>
  )
}

export default PropertiesArea