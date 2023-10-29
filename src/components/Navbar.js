import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className='header'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='logo-div'>
              <Link to='/home'>
                <img src={logo} alt='' />
              </Link>
            </div>
          </div>
          <div className='col-lg-8'>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
              <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
              </button>
              <div
                className='collapse navbar-collapse'
                id='navbarSupportedContent'>
                <ul className='navbar-nav mr-auto'>
                  <li className='nav-item active'>
                    <Link to={"/home"}>Home</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to={"/OurMission"}>Our mission</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to={"/services"}>Our Services</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to={"/Whyus"}>Why Us</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to={"/standard"}>Our Standard</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to={"/contact"}>Contact Us</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
