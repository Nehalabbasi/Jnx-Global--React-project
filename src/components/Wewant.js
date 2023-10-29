import React from "react";
import CountUp from "react-countup";

export default function Wewant() {
  return (
    <>
      <section className='we-want'>
        <div className='container'>
          <div className='we-want-head'>
            <h4>we want to</h4>
            <h2>empower you to create products your customers love.</h2>
            <ul>
              <li>
                <CountUp delay={5} end={50} />
                {/* <h3></h3> */}
                <p>Year's of Industry Expertise</p>
              </li>
              <li>
                <CountUp delay={5} end={1000} />
                {/* <h3>+</h3> */}
                <p>Happy Clients and Counting</p>
              </li>
              <li>
                <CountUp delay={5} end={200} />
                {/* <h3>200+</h3> */}
                <p>Reliable Factories Globally</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
