import React from 'react'

import '../index.css'
function About() {
  return (
    <>
    <div className='about position-relative'>
    <div className='img-holder position-relative '>
    <img className='w-100' src='/images/Hero.jpg' alt='' />
   
    <div className='text-holder  '>
    <h1 className=' text-capitalize text-light mb-1'>About us</h1>
    <p className='text-light m-auto '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae placeat possimus minus maxime ullam distinctio optio totam nemo rem accusantium.</p>
    </div>
    </div>
    </div>

    <div className='text-center  story'>
    <h2 className='fw-bold'>Our Story</h2>
    <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi incidunt alias aliquid recusandae commodi impedit ut repudiandae. Nulla facilis ratione numquam architecto sed molestias repellendus, fugit cumque temporibus incidunt nobis, laboriosam quasi enim dicta eveniet vitae nam veritatis quae! Natus maiores impedit repellendus incidunt nihil, esse quae quas vitae mollitia.</p>
    </div>

    <div className='about-section d-flex justify-content-between  align-items-center text-center '>
    <div className='p-1'>
    <img src='/images/about.jpg' alt=''/>
    </div>

    <div className='heading'>
    <h3 className=' fs-2 text-capitalize mb-4'>Our Founding</h3>
    <p className='m-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolor possimus consequuntur dignissimos aliquam? Ducimus illo deleniti commodi. Necessitatibus, labore?</p>
    </div>
    </div>

    <div className='about-section2 d-flex justify-content-between  align-items-center text-center '>
    <div className='heading'>
    <h3 className=' fs-2 text-capitalize mb-4'>Early Grouth & Funding</h3>
    <p className='m-auto' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolor possimus consequuntur dignissimos aliquam? Ducimus illo deleniti commodi. Necessitatibus, labore?</p>
    </div>

    <div className='p-1'>
    <img src='/images/about2.jpg' alt=''/>
    </div>

    </div>
   
    <div className='about-section d-flex justify-content-between  align-items-center text-center '>
    <div className='p-1'>
    <img src='/images/about3.jpg' alt=''/>
    </div>

    <div className='heading'>
    <h3 className=' fs-2 text-capitalize mb-4'>Series B Funding</h3>
    <p className='m-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolor possimus consequuntur dignissimos aliquam? Ducimus illo deleniti commodi. Necessitatibus, labore?</p>
    </div>
    </div>

    <div className='about-section2 d-flex justify-content-between  align-items-center text-center '>
    <div className='heading'>
    <h3 className=' fs-2 text-capitalize mb-4'>A New Life!</h3>
    <p className='m-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolor possimus consequuntur dignissimos aliquam? Ducimus illo deleniti commodi. Necessitatibus, labore?</p>
    </div>
    
    <div className='p-1'>
    <img src='/images/about4.jpg' alt=''/>
    </div>
    </div>

    <div className='about-section d-flex justify-content-between  align-items-center text-center '>
    <div className='p-1'>
    <img src='/images/about5.jpg' alt=''/>
    </div>

    <div className='heading'>
    <h3 className=' fs-2 text-capitalize mb-4'>To Infinity and Beyond!</h3>
    <p className='m-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolor possimus consequuntur dignissimos aliquam? Ducimus illo deleniti commodi. Necessitatibus, labore?</p>
    </div>
    </div>
    </>
  
  )
}

export default About