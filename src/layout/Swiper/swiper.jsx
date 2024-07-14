import React from 'react'
import style from './index.module.css'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Swipers() {
  return (
    <>
    <div className={style['swiper-container']}>
    <div className={style['swiper-column']}>
        <div className={style['swiper-top-text']}>
            <h2>Website templates that set you up for success</h2>
            <p>Get a headstart on your journey with 900+ free, customizable <span className={style['span-swiper-text']} >website templates</span>, strategically researched and tailored for every industry — or start from a blank canvas on our website builder.</p>
            <Link to={'/login'} >
            <button>Get Started</button>
            </Link>
        </div>
        <div className="swiper-class">

            <div className={style['my-swiper-app']}>
                <ul className={style['my-swiper-list']}>
                    <li>
                        <Link to={'/login'} >
                        <img src="./imgs/Screenshot_1.png"/>
                        <div className={style['swiper-icon']}>
                            <p>Store</p>
                                <FaArrowRightLong />
                        </div>
                        </Link>
                    </li>
                    <li>
                    <Link to={'/login'} >
                        <img src="./imgs/Screenshot_2.png"/>
                        <div className={style['swiper-icon']}>
                            <p>Technology</p>                           
                            <FaArrowRightLong />                            
                        </div>
                    </Link>
                        </li>
                    <li>
                        <Link to={'/login'} >
                        <img src="./imgs/Screenshot_3.png"/>
                        <div className={style['swiper-icon']}>
                            <p>Blog</p>                         
                            <FaArrowRightLong />        
                        </div>
                        </Link>
                        </li>
                    <li>
                        <Link to={'/login'} >
                        <img src="./imgs/Screenshot_4.png"/>
                        <div className={style['swiper-icon']}>
                            <p>Restaurant</p>                         
                            <FaArrowRightLong />                      
                        </div>
                        </Link>
                        </li>
                    <li>
                        <Link to={'/login'} >
                        <img src="./imgs/Screenshot_5.png"/>
                        <div className={style['swiper-icon']}>
                            <p>Fashion</p>                       
                            <FaArrowRightLong />                        
                        </div>
                        </Link>
                        </li>
                    <li>
                        <Link to={'/login'} >
                        <img src="./imgs/Screenshot_6.png"/>
                        <div className={style['swiper-icon']}>
                            <p>Business</p>                          
                            <FaArrowRightLong />
                        </div>
                        </Link>
                        </li>
                    <li>
                        <Link to={'/login'} >
                        <img src="./imgs/Screenshot_7.png"/>
                        <div className={style['swiper-icon']}>
                            <p>Fitness</p>
                             <FaArrowRightLong />                         
                        </div>
                        </Link>
                        </li>
                    <li>
                        <Link to={'/login'} >
                        <img src="./imgs/Screenshot_8.png"/>
                        <div className={style['swiper-icon']}>
                            <p>Store</p>                          
                            <FaArrowRightLong />
                        </div>
                        </Link>
                        </li>
                </ul>
            </div>

        </div>
    </div>
    </div>
    </>
  )
}

export default Swipers