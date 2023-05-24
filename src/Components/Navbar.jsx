import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import Logo from './Assets/images/logo.png';
import "./Assets/CSS/Navbar.css";
export default function Navbar() {
    let closeHandeler=()=>{
        const UL=document.querySelector(".navbar-collapse");
        if(UL.classList.contains("show")){
            UL.classList.remove("show");
        }
    }
  return (
    <>
        <nav className="navbar navbar-expand-lg ">
  <div className="container">
    <Link className="navbar-brand" to="/"><img src={Logo} alt="logo" className='img-fluid' style={{width:35}} /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i className="fa-solid fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <i className="fa-solid fa-xmark close" onClick={closeHandeler}></i>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item text-capitalize">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item text-capitalize">
          <Link className="nav-link" to="#portfolio">portfolio</Link>
        </li>
        <li className="nav-item text-capitalize">
          <Link className="nav-link" to="#skills">Skills</Link>
        </li>

        <li className="nav-item text-capitalize">
          <Link className="nav-link" to="#contact">let's talk</Link>
        </li>

    
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
