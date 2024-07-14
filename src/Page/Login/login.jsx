import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import style from './index.module.css'
import { FaApple } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Login() {
  return (
        <>
            <div className={style['login']}>
                <div className={style['login-logo']}>
                    <Link to={'/'} >
                    <img src="./imgs/Cobify 3.jpg" />
                    </Link>
                </div>
                <div className={style['login-container']}>
                    <div className={style['login-top-text']}>
                        <h2>To come in</h2>
                        <p>Don't have an account yet?<span className={style['span']} >Register</span> </p>
                    </div>
                        <div className={style['login-box']}>
                            <div className={style['login-left']}>
                                <input placeholder='email' type="email"/>
                                <p>Lorem ipsum dolor, sit amet</p>
                                <button>Lorem ipsum dolor</button>
                            </div>
                            <div className={style['login-right']}>
                                <div className={style['login-block-1']}>
                                    <div className={style['icon']}>
                                    <FcGoogle />
                                    </div>
                                    <p>Lorem ipsum dolor sit</p>
                                </div>
                                <div className={style['login-block-2']}>
                                <div className={style['icon']}>
                                    <FaFacebookF />
                                </div>
                                    <p>Lorem ipsum dolor sit</p>
                                </div>
                                <div className={style['login-block-3']}>
                                <div className={style['icon']}>
                                    <FaApple />
                                </div>
                                    <p>Lorem ipsum dolor sit</p>
                                </div>

                                    <p className={style['p-elenent']}  >Lorem ipsum, dolor sit </p>
                            </div>
                        </div>
                        <div className={style['login-end-block']}>
                            <div className={style['login-end-p-block']}>
                                <p>Terms of Use</p>
                                <p>Privacy Policy</p>
                            </div>
                            <p>This site is protected by reCAPTCHA Enterprise and the Google Privacy Policy and Terms of Service apply .</p>
                        </div>
                </div>
            </div>
        </>
  )
}

export default Login