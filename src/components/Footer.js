import React from "react";
import logo from "../images/logo.png";
import { FiFacebook } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 ftr-txt'>
              <a href='/'>
                <img src={logo} alt='image' />
              </a>
              <h4>Subscribe to our newsletter</h4>
              <input placeholder='email'></input>
              <span>
                <AiOutlineArrowRight />
              </span>
            </div>
            <div className='col-lg-8'>
              <div className='row'>
                <div className='col-lg-4'>
                  <ul className='pags-links'>
                    <li>
                      <h3>Navigation</h3>
                    </li>
                    <li>
                      <Link to='/home'>
                        <h4>Home</h4>
                      </Link>
                    </li>
                    <li>
                      <Link to='/OurMission'>
                        <h4>Our Mission</h4>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/services"}>
                        <h4>Our Service</h4>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/Whyus"}>
                        <h4>Why Us</h4>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/standard"}>
                        <h4>Our Standards</h4>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/contact"}>
                        <h4>Contact Us</h4>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='col-lg-4'>
                  <ul className='lets-connect'>
                    <li>
                      <h4>let's connect</h4>
                    </li>
                    <li>
                      <h4>Zhejiang China TX USA</h4>
                    </li>
                    <li>
                      <span>phone</span>
                      <a href='tel:+86-133 0585 1199'>+86-133 0585 1199</a>
                    </li>
                    <li>
                      <span>email</span>
                      <a href='mailto:jane@jnxglobalhk.com;'>
                        jane@jnxglobalhk.com
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='col-lg-4'>
                  <ul className='socail-links'>
                    <li>
                      <h4>socail-media</h4>
                    </li>
                    <li>
                      <span>
                        <a href='#'>
                          <FiFacebook />
                        </a>
                      </span>
                      <span>
                        <a href='#'>
                          <FaLinkedinIn />
                        </a>
                      </span>
                    </li>
                    <li>
                      <span>
                        <a href='#'>
                          <AiOutlineTwitter />
                        </a>
                      </span>
                      <span>
                        <a href='#'>
                          <AiFillYoutube />
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='copyrights'>
              <ul>
                <li>
                  © 2023 <span>Jnx global group</span> . All rights reserved.
                </li>
                <li>
                  <a href='#'>Privacy Policy</a>
                </li>
                <li>
                  <a href='#'>Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
