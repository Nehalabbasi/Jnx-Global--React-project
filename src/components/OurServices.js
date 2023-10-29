import React from "react";
import Ourserbanner from "../images/contact.bg.jpg";
import iconimg from "../images/ser-icon01.png";
import medical from "../images/insutry-box01.jpg";
import organic from "../images/insutry-box02.jpg";
import daily from "../images/insutry-box03.jpg";
import food from "../images/insutry-box04.png";
import { HiArrowRight } from "react-icons/hi2";
import { FiChevronRight } from "react-icons/fi";

export default function OurServices() {
  return (
    <>
      <section className='main-banner contct-ban'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='banner-txt'>
                <h1>
                  OUR <span>SERVICE</span>
                </h1>
                <p>
                  Ut sed quam et urna fringilla fermentum vitae ex.fames ac ante
                  no et ipsum primis in faucibus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src={Ourserbanner} className='baner-img' />
      </section>
      <section className='all-ser'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='slide-main'>
                <a href='/'>
                  <img src={iconimg} />
                  <h4>Product Development</h4>
                  <p>
                    Etiam convallis mauris turpis poritor jaculis. Morbi ut
                    ligula erat.{" "}
                  </p>
                  <FiChevronRight />
                </a>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='slide-main'>
                <a href='#'>
                  <img src={iconimg} />
                  <h4>Product Development</h4>
                  <p>
                    Etiam convallis mauris turpis poritor jaculis. Morbi ut
                    ligula erat.{" "}
                  </p>
                  <FiChevronRight />
                </a>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='slide-main'>
                <a href='#'>
                  <img src={iconimg} />
                  <h4>Product Development</h4>
                  <p>
                    Etiam convallis mauris turpis poritor jaculis. Morbi ut
                    ligula erat.{" "}
                  </p>
                  <FiChevronRight />
                </a>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='slide-main'>
                <a href='#'>
                  <img src={iconimg} />
                  <h4>Product Development</h4>
                  <p>
                    Etiam convallis mauris turpis poritor jaculis. Morbi ut
                    ligula erat.{" "}
                  </p>
                  <FiChevronRight />
                </a>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='slide-main'>
                <a href='#'>
                  <img src={iconimg} />
                  <h4>Product Development</h4>
                  <p>
                    Etiam convallis mauris turpis poritor jaculis. Morbi ut
                    ligula erat.{" "}
                  </p>
                  <FiChevronRight />
                </a>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='slide-main'>
                <a href='#'>
                  <img src={iconimg} />
                  <h4>Product Development</h4>
                  <p>
                    Etiam convallis mauris turpis poritor jaculis. Morbi ut
                    ligula erat.{" "}
                  </p>
                  <FiChevronRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='industry contct-industry'>
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
                    Organic <br></br>Tea
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
            <div className='col-lg-3'>
              <a href='#'>
                <div className='medical-suplies on-box'>
                  <img src={organic} />
                  <h4>Medical Supplies</h4>
                </div>
              </a>
            </div>
            <div className='col-lg-3'>
              <a href='#'>
                <div className='medical-suplies'>
                  <img src={medical} />
                  <h4>
                    Organic <br></br>Tea
                  </h4>
                </div>
              </a>
            </div>
            <div className='col-lg-3'>
              <a href='#'>
                <div className='medical-suplies on-box'>
                  <img src={food} />
                  <h4>Daily Necessities</h4>
                </div>
              </a>
            </div>
            <div className='col-lg-3'>
              <a href='#'>
                <div className='medical-suplies'>
                  <img src={daily} />
                  <h4>
                    Organic<br></br> Food
                  </h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
