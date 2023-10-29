import React from 'react'
import why from "../images/why-chose-img.jpg";
import{HiArrowRight} from 'react-icons/hi2'

export default function choseus() {
  return (
    <>
    <section className="why-chose-us">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="why-chose-txt">
                    <h5>Why Choose</h5>
                    <h2>JNX Global</h2>
                    <a href='#'>learn more< HiArrowRight /></a>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="why-chose-para">
                    <p>JNX GLOBAL (HK) TRADING LIMITED was established in Hong Kong, in 2007, covering design, manufacturing,sales & marketing, service and development.</p>
                    <p>JNX provides quality products, competitive prices and excellent service in the fields of medical supplies, tea, household items, garments, home textile and beyond, with dynamic team members worldwide serving...</p>
                </div>
            </div>
            <div className="col-lg-12">
              <img src={why} alt=""  className='img-fluid'/>
            </div>
          </div>
       </div>
     </section>
    </>
  )
}
