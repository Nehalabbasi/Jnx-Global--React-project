import React from "react";
import Whybg from "../images/why-us-bg.jpg";
import Arrowred from "../images/arrow-red.png";
import Arrowgreen from "../images/arrow-green.png";
import Tablelogo from "../images/table-logo.png";
import WeWork from "./WeWork";

export default function Whyus() {
  return (
    <>
      <section className='main-banner contct-ban'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='banner-txt'>
                <h1>
                  why <span>us</span>
                </h1>
                <p>
                  Ut sed quam et urna fringilla fermentum vitae ex.fames ac ante
                  no et ipsum primis in faucibus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src={Whybg} className='baner-img' />
      </section>

      <section className='table__tab__main pt-5 pb-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='we-want-head'>
                <h4>Creating New Products</h4>
                <h2>Can Be Difficult, Working With Us Makes Your Job Easier</h2>
              </div>
            </div>

            <div className='col-sm-10 center-col'>
              <div className='table__sec__main table-responsive'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th scope='col'></th>
                      <th className='active' scope='col'>
                        <img src={Tablelogo} className='ImgFluid' />{" "}
                      </th>
                      <th scope='col'>
                        Traditional <br></br>Factories
                      </th>
                      <th scope='col'>
                        Print On <br></br> Demand Companies
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope='row'>100% Custom Products</th>
                      <td className='active'>
                        <img src={Arrowgreen} className='ImgFluid' alt='' />
                      </td>
                      <td>
                        <img src={Arrowgreen} className='ImgFluid' alt='' />
                      </td>
                      <td>
                        <img src={Arrowred} className='ImgFluid' alt='' />
                      </td>
                    </tr>

                    <tr>
                      <th scope='row'>Wide Range of Products</th>
                      <td className='active'>
                        <img src={Arrowgreen} className='ImgFluid' alt='' />
                      </td>
                      <td>
                        <img src={Arrowred} className='ImgFluid' alt='' />
                      </td>
                      <td>
                        <img src={Arrowred} className='ImgFluid' alt='' />
                      </td>
                    </tr>

                    <tr>
                      <th scope='row'>Dedicated Qualoty Control Tea</th>
                      <td className='active'>
                        <img src={Arrowgreen} className='ImgFluid' alt='' />
                      </td>
                      <td>
                        <img src={Arrowred} className='ImgFluid' alt='' />
                      </td>
                      <td>
                        <img src={Arrowred} className='ImgFluid' alt='' />
                      </td>
                    </tr>

                    <tr>
                      <th scope='row'>Convenient Ordering Process</th>
                      <td className='active'>
                        <img src={Arrowgreen} className='ImgFluid' alt='' />
                      </td>
                      <td>
                        <img src={Arrowred} className='ImgFluid' alt='' />
                      </td>
                      <td>
                        <img src={Arrowgreen} className='ImgFluid' alt='' />
                      </td>
                    </tr>

                    <tr>
                      <th scope='row'>
                        Custom Labels, Tags & Packaging Options
                      </th>
                      <td className='active'>
                        <img src={Arrowgreen} className='ImgFluid' alt='' />
                      </td>
                      <td>
                        <img src={Arrowgreen} className='ImgFluid' alt='' />
                      </td>
                      <td>
                        <img src={Arrowred} className='ImgFluid' alt='' />
                      </td>
                    </tr>

                    <tr>
                      <th scope='row'>Cost Effective Large Orders</th>
                      <td className='active'>
                        <img src={Arrowgreen} className='ImgFluid' alt='' />
                      </td>
                      <td>
                        <img src={Arrowgreen} className='ImgFluid' alt='' />
                      </td>
                      <td>
                        <img src={Arrowred} className='ImgFluid' alt='' />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WeWork />
    </>
  );
}
