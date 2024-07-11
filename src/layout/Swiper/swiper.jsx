import React from 'react'
import style from './index.module.css'
import { FaArrowRightLong } from "react-icons/fa6";

function Swipers() {
  return (
    <>
    <div className={style['swiper-container']}>
    <div className={style['swiper-column']}>
        <div className={style['swiper-top-text']}>
            <h2>Website templates that set you up for success</h2>
            <p>Get a headstart on your journey with 900+ free, customizable <span className={style['span-swiper-text']} >website templates</span>, strategically researched and tailored for every industry — or start from a blank canvas on our website builder.</p>
            <button>Get Started</button>
        </div>
        <div className="swiper-class">

            <div className={style['my-swiper-app']}>
                <ul className={style['my-swiper-list']}>
                    <li>
                        <img src="./imgs/Screenshot_1.png"/>
                        <div className={style['swiper-icon']}>
                            <p>Store</p>
                            <div className="">
                            <FaArrowRightLong />
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="./imgs/Screenshot_2.png"/>
                        <div className={style['swiper-icon']}>
                            <p>Technology</p>
                            <div className="">
                            <FaArrowRightLong />
                            </div>
                        </div></li>
                    <li>
                        <img src="./imgs/Screenshot_3.png"/>
                        <div className={style['swiper-icon']}>
                            <p>Blog</p>
                            <div className="">
                            <FaArrowRightLong />
                            </div>
                        </div>
                        </li>
                    <li>
                        <img src="./imgs/Screenshot_4.png"/>
                        <div className={style['swiper-icon']}>
                            <p>Restaurant</p>
                            <div className="">
                            <FaArrowRightLong />
                            </div>
                        </div>
                        </li>
                    <li>
                        <img src="./imgs/Screenshot_5.png"/>
                        <div className={style['swiper-icon']}>
                            <p>Fashion</p>
                            <div className="">
                            <FaArrowRightLong />
                            </div>
                        </div>
                        </li>
                    <li>
                        <img src="./imgs/Screenshot_6.png"/>
                        <div className={style['swiper-icon']}>
                            <p>Business</p>
                            <div className="">
                            <FaArrowRightLong />
                            </div>
                        </div>
                        </li>
                    <li>
                        <img src="./imgs/Screenshot_7.png"/>
                        <div className={style['swiper-icon']}>
                            <p>Fitness</p>
                            <div className="">
                            <FaArrowRightLong />
                            </div>
                        </div>
                        </li>
                    <li>
                        <img src="./imgs/Screenshot_8.png"/>
                        <div className={style['swiper-icon']}>
                            <p>Store</p>
                            <div className="">
                            <FaArrowRightLong />
                            </div>
                        </div>
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