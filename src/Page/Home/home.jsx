import React from 'react'
import PageContainer from '../../PageContainer/PageContainer'
import Swipers from '../../layout/Swiper/swiper'
import { FaArrowRightLong } from "react-icons/fa6";
import Accardion from '../../layout/accardion/accardion';
import { GoArrowRight } from "react-icons/go";


function Home() {
  return (
    <>
    <PageContainer>
      {/* ----Nav---- */}
        <div className="nav-container">
          <div className="nav-text">
            <h2>Create a website without limits</h2>
            <h3>Build and scale with confidence. From a powerful website builder to advanced business solutions—we’ve got you covered</h3>
            <div className="nav-block">
              <div className="button-incon">
                <button>Get Started</button>
                <div className="icon-right">
                  <GoArrowRight />
                </div>
              </div>
                <p>Start for free. No credit card required.</p>
            </div>
          </div>
          <div className="nav-img">
            <img src="./Screenshot_1.png" />
          </div>
        </div>


        {/* ----Box-text---- */}
        <div className="box-center">
        <div className="box-container">
            <h2>One platform, infinite possibilities</h2>
            <div className="box-container-block">
              <div className="box-block">
                  <h3>Build a website</h3>
                  <p>Design with a full suite of intuitive tools and powerful AI to create the site you want.</p>
              </div>
              <div className="box-block">
                  <h3>Manage your business
                  </h3>
                  <p>Design with a full suite of intuitive tools and powerful AI to create the site you want.</p>
              </div>
              <div className="box-block">
                  <h3>Grow online</h3>
                  <p>Design with a full suite of intuitive tools and powerful AI to create the site you want.</p>
              </div>
            </div>
            <div className="box-button">
                <button>Get Started</button>
            </div>
        </div>
        </div>


        {/* ----Swiper---- */}
            <Swipers/>

        {/* ---content-text---- */}
          <div className="content">
            <div className="content-container">
              <div className="content-left">
                <h2>Build more than a website</h2>
              </div>
              <div className="content-right">
                <p>Get secure web hosting, a custom domain and a full business solution tailored to your needs. So whether you’re selling online, starting a blog, building a community or anything else—your site will do more than just look good, it will be the core of your business.</p>
                <div className="content-icon">
                  <h3>Get Started</h3>
                  <FaArrowRightLong />
                </div>
              </div>
            </div>
          </div>


        {/* ---Section--- */}
          <div className="section">
            <div className="section-container">
                <div className="section-left">
                  <div className="section-left-box">
                  <h2>Customize it your way</h2>
                  <ul>
                    <li>Intuitive drag and drop website editor</li>
                    <li>1000’s of advanced web design capabilities</li>
                    <li>Powerful AI features for smart customization</li>
                    <li>Full-stack web dev tools for custom functionality</li>
                  </ul>
                  <p>Get Started</p>
                  </div>
                </div>
                <div className="section-right">

                  <div className="video">
                      <video autoplay="true" muted="true" loop="true">
                          <source src="./video/Purple Red Course Accounting Intro Outro Youtube Video.mp4" />
                      </video>
                  </div>
                </div>
            </div>
          </div>



        {/* ----Box-text-2---- */}
        <div className="box-cente-two">
        <div className="box-container">
            <h2>We’re here for you</h2>
            <div className="box-container-block">
              <div className="box-block">
                  <h3>Build a website</h3>
                  <p>Design with a full suite of intuitive tools and powerful AI to create the site you want.</p>
                  <div className="box-icon-right">
                    <p>Go to Help Center</p>
                    <FaArrowRightLong />
                  </div>
              </div>
              <div className="box-block">
                  <h3>Manage your business
                  </h3>
                  <p>Design with a full suite of intuitive tools and powerful AI to create the site you want.</p>
                  <div className="box-icon-right">
                    <p>Go to Help Center</p>
                    <FaArrowRightLong />
                  </div>
              </div>
              <div className="box-block">
                  <h3>Grow online</h3>
                  <p>Design with a full suite of intuitive tools and powerful AI to create the site you want.</p>
                  <div className="box-icon-right">
                    <p>Go to Help Center</p>
                    <FaArrowRightLong />
                  </div>
              </div>
            </div>
        </div>
        </div>



          {/* ----Accardion---- */}
              <Accardion/>



          {/* ---page-box--- */}
              <div className="page-container">
                  <div className="page-box"> 
                    <h2>Tomorrow’s success starts today.</h2>
                    <p>Get Started</p>
                  </div>
              </div>


    </PageContainer>
    </>
  )
}

export default Home