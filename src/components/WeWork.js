import React from 'react'
import wework from '../images/we-work-bg.jpg'

export default function WeWork() {
  return (
    <>
    <section class="we-work-bg">
        <div class="container">
            <div class="we-work-detail">
                <h4>As part of the end-to-end</h4>
                <h2>service we work<br></br> closely</h2>
                <a href="#">get a solution</a>
            </div>
        </div>
     <img src={wework}  className='img-fluid we-work-bg-img' />
    </section>
    </>
  )
}
