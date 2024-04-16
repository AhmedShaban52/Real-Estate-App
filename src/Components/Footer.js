import React from "react";

import '../index.css'
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container d-flex gap-5 mt-5 p-5">
        <div>
          <img src="/images/Logo-3682d112.svg" alt=""></img>
        
        <div className=" text-center ms-4">
        <h1 className="fs-5 fw-bold mt-4 mb-3 text-capitalize">contact us</h1>
        <p className="main-color">call: +123 400 123</p>
        <p className="main-color p">Praesent nulla massa, hendrerit <span> vestibulum gravida in, feugiat auctor felis.</span> </p>
        <p >Email: realstate@mail.com </p>
        </div>

        <div className="social  d-flex justify-content-center gap-2">
        <img src="/images/Social Media card1-b3a356b3.svg" alt=""></img>
        <img src="/images/Social Media card2-fb2460a2.svg" alt=""></img>
        <img src="/images/Social Media card3-2712eeba.svg" alt=""></img>
        <img src="/images/Social Media card4-8986bec0.svg" alt=""></img>
        <img src="/images/Social Media card5-e59cb578.svg" alt=""></img>
        </div>
        </div>

    
        <div className="d-flex flex-column gap-4">
        <h1 className="fs-5 fw-bold text-capitalize">features</h1>
        <ul className="links">
        <li>Home</li>
        <li>Become a Host</li>
        <li>Pricing</li>
        <li>Blog</li>
        <li>Contact</li>
        </ul>
        </div>

        <div className="d-flex flex-column gap-4">
        <h1 className="fs-5 fw-bold text-capitalize">Compoany</h1>
        <ul className="links">
        <li>About us</li>
        <li>Press</li>
        <li>Contact</li>
        <li>Carees</li>
        <li>Blog</li>
        </ul>
        </div>

        <div className="d-flex flex-column gap-4">
        <h1 className="fs-5 fw-bold text-capitalize">team and policies</h1>
        <ul className="links">
        <li>Terms of service</li>
        <li>Privacy and policy</li>
        <li>Security</li>
        </ul>
        </div>
        </div>


        <div className="copyright text-center mb-3">
        <span className="border-top pt-2">Copyright  <span className="span">© 2023 REIS.</span>  All Rights Reserved,</span>
        <span className="border-top pt-2">Developed By <span className="span">Mohamed Adham</span>  </span>
        </div>
      </div>
      
    </>
  );
}

export default Footer;
