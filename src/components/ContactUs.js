import React from "react";
import contactBg from "../images/contact-banner.jpg";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";

export default function ContactUs() {
  return (
    <>
      <section className='main-banner contct-ban'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='banner-txt'>
                <h1>
                  <span>contact</span> us
                </h1>
                <p>
                  Ut sed quam et urna fringilla fermentum vitae ex.fames ac ante
                  no et ipsum primis in faucibus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src={contactBg} className='baner-img' />
      </section>

      <section className='lets-connect'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5'>
              <div className='connects-details'>
                <h4>lets's connect</h4>
                <ul>
                  <li>
                    <span>
                      <FaMapMarkerAlt />
                    </span>
                    <label>address:</label>
                    <h5>texas,tx usa</h5>
                  </li>
                  <li>
                    <span>
                      <BsFillTelephoneFill />
                    </span>
                    <label>phone:</label>
                    <a href='tel:+1-6262137634;'>+1-6262137634</a>
                  </li>
                  <li>
                    <span>
                      <BsFillTelephoneFill />
                    </span>
                    <label>phone:</label>
                    <a href='tel:+86-13305851199;'>+86-13305851199</a>
                  </li>
                  <li>
                    <span>
                      <BsEnvelope />
                    </span>
                    <label>email:</label>
                    <a href='mailto:jane@jnxglobalhk.com;'>
                      jane@jnxglobalhk.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-7'>
              <div className='map'>
                <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6996662.784745957!2d-104.57047689624284!3d31.100301671489174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864070360b823249%3A0x16eb1c8f1808de3c!2sTexas%2C%20USA!5e0!3m2!1sen!2s!4v1671219795025!5m2!1sen!2s' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
