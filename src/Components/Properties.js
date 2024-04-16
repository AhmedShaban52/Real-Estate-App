
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Products from './Products'
import PropertiesArea from './PropertiesArea'
import PropertiesLocation from './PropertiesLocation'
function Properties() {
  const [products,setProducts] =useState([])

useEffect(() =>{
  
  const fetchData = async () => {
    try {
      const response = await axios.get("/houseproduct.json");
      setProducts(response.data);
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  fetchData();

  },[])
  return (
   <>
    <div className="properties">
        <PropertiesArea/>
      </div>
      <div className="section" >
      <div className='container text-center' >
      <div className='text-center mt-5 ' >
      <h1 className='pt-5 fw-bold  text-capitalize font-family rang' >Properties by Rent Range</h1>
      <p className=' text-center mb-5 m-auto  description '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae placeat possimus minus maxime ullam distinctio optio totam nemo rem accusantium.</p>
      </div>
      <div className='products d-flex flex-wrap justify-content-center gap-2' >
      {
          products.map((product) =>{

            return (
            <div key={product.id} className='box p-3 ms-3 mb-3 overflow-hidden '>
            <Products product={product} />
            </div>
            )
          })
        }
        
        </div>
        <div className='text-center mt-4'>
        <button id='button'className='text-light text-capitalize text-center' >load more Listing</button>
        </div>
        <div className='location'>
        <PropertiesLocation/>
        </div>
      </div>
      </div>

      </>
  );
}

export default Properties;
