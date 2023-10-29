import React from "react";
import Standardbg from "../images/our-standardbg.jpg";
import Brand1 from "../images/brand01.jpg";
import Brand2 from "../images/brand02.jpg";
import Brand3 from "../images/brand03.jpg";
import Brand4 from "../images/brand04.jpg";
import Events from "./Events";

export default function Standard() {
  return (
    <>
      <section className='main-banner contct-ban'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='banner-txt'>
                <h1>
                  OUR <span>STANDARD</span>
                </h1>
                <p>
                  Ut sed quam et urna fringilla fermentum vitae ex.fames ac ante
                  no et ipsum primis in faucibus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src={Standardbg} className='baner-img' />
      </section>
      <section className='brands'>
        <div className='container'>
          <h2 className='brand-title'>
            we are <span>complaint</span> and <span>sustainable</span>
          </h2>
          <div className='row brand-main'>
            <div className='col-lg-3 pl-0 pr-0'>
              <div className='brand-logo'>
                <img src={Brand1} />
              </div>
            </div>
            <div className='col-lg-3 pl-0 pr-0'>
              <div className='brand-logo'>
                <img src={Brand2} />
              </div>
            </div>
            <div className='col-lg-3 pl-0 pr-0'>
              <div className='brand-logo'>
                <img src={Brand3} />
              </div>
            </div>
            <div className='col-lg-3 pl-0 pr-0'>
              <div className='brand-logo'>
                <img src={Brand1} />
              </div>
            </div>
            <div className='col-lg-3 pl-0 pr-0'>
              <div className='brand-logo'>
                <img src={Brand4} />
              </div>
            </div>
            <div className='col-lg-3 pl-0 pr-0'>
              <div className='brand-logo'>
                <img src={Brand1} />
              </div>
            </div>
            <div className='col-lg-3 pl-0 pr-0'>
              <div className='brand-logo'>
                <img src={Brand2} />
              </div>
            </div>
            <div className='col-lg-3 pl-0 pr-0'>
              <div className='brand-logo'>
                <img src={Brand3} />
              </div>
            </div>
            <div className='col-lg-3 pl-0 pr-0'>
              <div className='brand-logo'>
                <img src={Brand4} />
              </div>
            </div>
            <div className='col-lg-3 pl-0 pr-0'>
              <div className='brand-logo'>
                <img src={Brand1} />
              </div>
            </div>
            <div className='col-lg-3 pl-0 pr-0'>
              <div className='brand-logo'>
                <img src={Brand4} />
              </div>
            </div>
            <div className='col-lg-3 pl-0 pr-0'>
              <div className='brand-logo'>
                <img src={Brand4} />
              </div>
            </div>
            <div className='col-lg-3 pl-0 pr-0'>
              <div className='brand-logo brand-end'>
                <img src={Brand2} />
              </div>
            </div>
            <div className='col-lg-3 pl-0 pr-0'>
              <div className='brand-logo brand-end'>
                <img src={Brand3} />
              </div>
            </div>
            <div className='col-lg-3 pl-0 pr-0'>
              <div className='brand-logo brand-end'>
                <img src={Brand4} />
              </div>
            </div>
            <div className='col-lg-3 pl-0 pr-0'>
              <div className='brand-logo brand-end'>
                <img src={Brand1} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Events />
    </>
  );
}
