import React from "react";
import mission from "../images/mission.png";
import { HiArrowRight } from "react-icons/hi2";

export default function Ourmission() {
  return (
    <>
      <section className='our-mission'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='our-mis-img'>
                <img src={mission} className='img-fluid' />
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='our-mission-txt'>
                <h4>Our</h4>
                <h2>Mission</h2>
                <h5>
                  <span>Proven One-Stop Sourcing</span>Solution You Can Trust.
                </h5>
                <p>
                  Our mission is to empower brands, wholesale vendors and
                  retailers to create products that their customers love. As
                  part of the end-to-end service we work closely with you from
                  product development.
                </p>
                <a href='#' className='themeBtn'>
                  learn more
                  <HiArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
