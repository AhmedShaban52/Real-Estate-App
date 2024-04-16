import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

function Products(props) {
    const {product} = props
 
    const [products, setProducts] =useState({})
    const params= useParams()
   
    console.log(params)
    const api_url= "/properties/"
  
    useEffect(() =>{
      fetch(`${api_url}/${params.propertiesId}`).then((res) => res.json()).then((product) => setProducts(product))
      
    })
  return (
    <>
    <h1>{params.propertiesId}</h1>
    <img src={product.image} alt=''/>
    <div className='d-flex justify-content-between mt-3'>
    <p className='title second-color fw-bold'>{product.title}</p>
    <p className='text text-light p-1' >{product.text}</p>
    </div>
    <p className='main-color' >{product.description}</p>
    <div className='d-flex justify-content-between'>
    <p className='price second-color fw-bold' >{product.price}</p>
    <p  className='main-color' >{product.monthly}</p>
    </div>

    <div className='d-flex gap-4 mb-3 main-color'>
    <div className='d-flex' >
    <img className='icon' src={product.image2} alt=''/>
    <span>3</span>
    </div>

    <div className='d-flex' >
    <img className='icon' src={product.image3} alt=''/>
    <span>4</span>
    </div>

    <div className='d-flex'>
    <img className='icon' src={product.image4} alt=''/>
    <span>269.5498092864 m</span>
    </div>

    </div>

  <div className='d-flex justify-content-between'>
  <div className='d-flex  gap-3' >
  <img className='icon' src={product.image5} alt=''/>
  <span  className='second-color fw-bold' >Mesrop Vardanyan</span>
  </div>

  <div className='d-flex gap-3' >
  <img className='icon' src={product.image6} alt=''/>
  <img className='icon' src={product.image7} alt=''/>
  <img className='icon' src={product.image8} alt=''/>
  </div>
  </div>
   

    </>
    
  )
}

export default Products