import React from 'react'
import graph from "../images/Graph.png";


export default function banner() {;
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div className='banner-main col-lg-8'>
            <h4>END TO END SOURCING</h4>
            <h2>
              SOLUTIONS TO <span>GROW</span>YOUR BRAND
            </h2>
            <p>
              Our mission is to empower brands, wholesale vendors and retailers
              to create products that their customers love.
            </p>
          </div>
        </div>
        <img src={graph} alt='' className='banner-img' />
      </section>
    </>
  );
}
