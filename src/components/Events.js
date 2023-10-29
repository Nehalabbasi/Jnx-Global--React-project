import React from "react";
import Welfare1 from "../images/welfare-event01.jpg";
import Welfare2 from "../images/welfare-event02.jpg";
import Welfare3 from "../images/welfare-event03.jpg";
import Welfare4 from "../images/welfare-event04.jpg";
import { HiArrowRight } from "react-icons/hi2";

export default function Events() {
  return (
    <>
      <section className='public-welfare'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-5'>
              <h2 className='welfare-title'>public welfare</h2>
              <a href='#'>
                <div className='welfare-event'>
                  <img src={Welfare1} className='img-fluid' />
                  <h4>lorem ipsum</h4>
                  <p>etiam convallis mauris turpis poritor jaculis.</p>
                  <span>
                    < HiArrowRight />
                  </span>
                </div>
              </a>
            </div>
            <div className='col-lg-5'>
              <a href='#'>
                <div className='welfare-event'>
                  <img src={Welfare2} className='img-fluid' />
                  <h4>lorem ipsum</h4>
                  <p>etiam convallis mauris turpis poritor jaculis.</p>
                  <span>
                    < HiArrowRight />
                  </span>
                </div>
              </a>
            </div>
            <div className='col-lg-5'>
              <a href='#'>
                <div className='welfare-event'>
                  <img src={Welfare3} className='img-fluid' />
                  <h4>lorem ipsum</h4>
                  <p>etiam convallis mauris turpis poritor jaculis.</p>
                  <span>
                    < HiArrowRight />
                  </span>
                </div>
              </a>
            </div>
            <div className='col-lg-5'>
              <a href='#'>
                <div className='welfare-event event-last'>
                  <img src={Welfare4} className='img-fluid' />
                  <h4>lorem ipsum</h4>
                  <p>etiam convallis mauris turpis poritor jaculis.</p>
                  <span>
                    < HiArrowRight />
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
