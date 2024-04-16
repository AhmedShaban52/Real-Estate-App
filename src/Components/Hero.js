import React from "react";

function Hero() {
  return (
    <div className="hero">
      <div className="box position-relative ">
        <div className="overlay position-absolute w-100 h-100"></div>
        <div className="text text-center position-absolute w-100">
          <h1 className=" p-3  text-white ">Find Your Dream Home</h1>
          <p className="text-white mb-4 m-auto  ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
            placeat possimus minus maxime ullam distinctio optio totam nemo rem
            accusantium.
          </p>
          <button className="me-4 text-light rent mt-4 ">Rent</button>
          <button className=" rounded-md sale mt-4  ">Sale</button>
        </div>
        <div className="text-2 d-flex justify-content-center  flex-wrap flex-row position-absolute bg-light ">
          <div className="item w-100 d-flex mb-2 ">
            <div className="title w-50" >
              <h1 className="fw-bold text-capitalize mb-3 fs-5" >purpose</h1>
            </div>
            <div className="section w-100 d-flex justify-content-end" >
              <label className="text-secondary">property type</label>
              <select className="border-0  mb-2 bg-light ">
                <option>For Rent</option>
                <option>For Sale</option>
              </select>
            </div>
          </div>
          <div className="item  w-100 d-flex  mb-2  ">
          <div className="title w-50" >
            <h1 className="fw-bold text-capitalize mb-3 fs-5">Frequence</h1>
            </div>
            <div className="section w-100 d-flex justify-content-end" >
            <label className="text-secondary" >Rent Frequence</label>
            <select className="border-0  mb-2 bg-light ">
              <option>Monthly</option>
              <option>Yearly</option>
              <option>Weekly</option>
              <option>Daily</option>
            </select>
            </div>
          </div>
          <div className="item  w-100 d-flex  mb-2  ">
          <div className="title w-50" >
            <h1  className="fw-bold text-capitalize mb-3 fs-5">Language</h1>
            </div>
            <div className="section w-100 d-flex justify-content-end " >
            <label className="text-secondary">Set Language</label>
            <select className="border-0  mb-2 bg-light" >
              <option>English</option>
              <option>Arabic</option>
            </select>
            </div>

          </div>
          <div className="item  w-100 d-flex ">
            <button className="w-100 text-light border-0 mt-3 p-3 " >Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
