import React from "react";
import iconimg from "../images/ser-icon01.png";
import { FiChevronRight } from "react-icons/fi";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Whatwedo() {
  return (
    <>
      <section className='we-work'>
        <div className='container'>
          <div className='title-work'>
            <h2>WHAT WE DO</h2>
          </div>
          <div className='row'>
            <Carousel
              responsive={responsive}
              showDots={true}
              arrows={true}
              infinite={true}
              autoPlaySpeed={1000}>
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
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
}
