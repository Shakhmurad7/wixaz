import React from 'react'
import style  from './index.module.css'

function Navbar() {
  return (
        <>
        <div className={style['navbar-container']}>
            <div className={style['navbar-block']}>
                <ul>
                    <li>Product</li>
                    <li>Solutions</li>
                    <li>Resources</li>
                    <li>Pricing</li>
                </ul>
            </div>

            <div className={style['navbar-block']}>
                <ul>
                    <li className={style['li-after']} >Wix Studio</li>
                    <li>Enterprise</li>
                </ul>
            </div>
        </div>

        </>
  )
}

export default Navbar