import React from 'react';
import BlogImg from '../images/blog01.jpg';
import BlogImg2 from '../images/blog02.jpg';
import BlogImg3 from '../images/blog03.jpg';
import {FiChevronRight} from "react-icons/fi";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
export default function Blogs() {
  return (
    <>
      <section className="blog">
        <div className="container">
          <h2 className="blog-title">Latest blog</h2>
            <Carousel responsive={responsive}
                  showDots={false}
                  arrows={true}
                  infinite={true}
                  autoPlaySpeed={1000}>
                    <div className="blog-detail">
                      <a href="#">
                        <img src={BlogImg} className='img-fluid' />
                        <div className="blog-date">16 aug 2022</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elitnulla eu libero enim.</p>
                        <FiChevronRight />
                       </a>
                    </div>
                    <div className="blog-detail">
                      <a href="#">
                        <img src={BlogImg2} className='img-fluid' />
                        <div className="blog-date">16 aug 2022</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elitnulla eu libero enim.</p>
                        <FiChevronRight />
                       </a>
                    </div>
                    <div className="blog-detail">
                      <a href="#">
                        <img src={BlogImg3} className='img-fluid' />
                        <div className="blog-date">16 aug 2022</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elitnulla eu libero enim.</p>
                        <FiChevronRight />
                       </a>
                    </div>
                    <div className="blog-detail">
                      <a href="#">
                        <img src={BlogImg2} className='img-fluid' />
                        <div className="blog-date">16 aug 2022</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elitnulla eu libero enim.</p>
                        <FiChevronRight />
                       </a>
                    </div>
           </Carousel>
         </div>
      </section>
    </>
  )
}
