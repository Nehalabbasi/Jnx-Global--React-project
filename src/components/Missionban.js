import React from "react";
import graph from "../images/Graph.png";
import Ourmission from "./Ourmission";
import WeWork from "./WeWork";

export default function Missionban() {
  return (
    <>
      <section class='banner miss-ban'>
        <div class='container'>
          <div class='row'>
            <div class='banner-main col-lg-8'>
              {/* <h4>Our</h4> */}
              <h2>
                Our<br></br>
                <span>Mission</span>
              </h2>
              <p>
                Our mission is to empower brands, wholesale vendors and
                retailers to create products that their customers love.
              </p>
            </div>
          </div>
        </div>
        <img src={graph} alt='' className='banner-img' />
      </section>
      <Ourmission />
      <section className='we-want'>
        <div className='container'>
          <div className='we-want-head'>
            <ul>
              <li>
                <h3>50+</h3>
                <p>Year's of Industry Expertise</p>
              </li>
              <li>
                <h3>1000+</h3>
                <p>Happy Clients and Counting</p>
              </li>
              <li>
                <h3>200+</h3>
                <p>Reliable Factories Globally</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <WeWork />
    </>
  );
}
