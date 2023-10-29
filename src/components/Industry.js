import React from "react";
import medical from "../images/insutry-box01.jpg";
import organic from "../images/insutry-box02.jpg";
import daily from "../images/insutry-box03.jpg";
import food from "../images/insutry-box04.png";
import { HiArrowRight } from "react-icons/hi2";

export default function Industry() {
  return (
    <>
      <section className='industry'>
        <div className='container'>
          <div className='row'>
            <div className='indus-head'>
              <h2>Industries</h2>
              <p>
                Proin neque nibh, varius lacus sed, mollis vestibulum libero.
                Vestibulum scelerisque ipsum metus. Nam lorem luctus sit amet
                vestibulum nec tristique et tellus quis lorem auctor est.
              </p>
            </div>
            <div className='col-lg-3'>
              <a href='#'>
                <div className='medical-suplies on-box'>
                  <img src={medical} />
                  <h4>Medical Supplies</h4>
                </div>
              </a>
            </div>
            <div className='col-lg-3'>
              <a href='#'>
                <div className='medical-suplies'>
                  <img src={organic} />
                  <h4>
                    Organic <br></br>Tea{" "}
                  </h4>
                </div>
              </a>
            </div>
            <div className='col-lg-3'>
              <a href='#'>
                <div className='medical-suplies on-box'>
                  <img src={daily} />
                  <h4>Daily Necessities</h4>
                </div>
              </a>
            </div>
            <div className='col-lg-3'>
              <a href='#'>
                <div className='medical-suplies'>
                  <img src={food} />
                  <h4>
                    Organic<br></br> Food
                  </h4>
                </div>
              </a>
            </div>
            <div className='ct-btn'>
              {" "}
              <a href='#'>
                SEE ALL INDUSTRY
                <HiArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
