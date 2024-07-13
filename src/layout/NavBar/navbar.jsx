import React from 'react'
import style  from './index.module.css'
import { GoChevronDown } from "react-icons/go";


function Navbar() {
  return (
        <>
        <div className={style['navbar-container']}>
            <div className={style['navbar-block']}>
                <ul>
                    <div className={style['ul-icon']}>
                        <li>Product</li>
                        <div className={style['icon']}>
                        <GoChevronDown />
                        </div>
                        </div>
                    <div className={style['ul-icon']}>
                        <li>Solutions</li>
                        <div className={style['icon']}>
                        <GoChevronDown />
                        </div>
                    </div>
                    <div className={style['ul-icon']}>
                        <li>Resources</li>
                        <div className={style['icon']}>
                        <GoChevronDown />
                        </div>
                    </div>
                    <li>Pricing</li>
                </ul>
            </div>

            <div className={style['navbar-block']}>
                <ul className={style['ul-class']} >
                    <li className={style['li-after']} >Wix Studio</li>
                    <li>Enterprise</li>
                </ul>
            </div>
        </div>

        </>
  )
}

export default Navbar