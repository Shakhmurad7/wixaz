
import style  from './index.module.css'
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { IoIosGlobe } from "react-icons/io";

function Navbar({open , tabs , menu , setmenu , setworld , world}) {



  return (
        <>
        <div className={`${style[menu? 'navbar-container-menu' : 'navbar-container']}`}>
            <div className={style['img-media']}>
                <Link to={"/"} >
                    <img src='./imgs/Cobify 3.jpg' />
                </Link>
                <div onClick={()=>setmenu(!menu)} className={style['icon-close']}>
                    <IoMdClose />
                </div>
            </div>

            <div className={style['navbar-block']}>
                <ul className={`${style[menu? 'ul-menu' : 'ul']}`}  >
{/* ----Tab-1----- */}
                    <div onClick={()=>tabs(1)} className={style['ul-icon']}>
                        <div className={style['ul-row']}>
                            <li className={style[`${open ===1? 'ul-icon-active' : ''}`]}> Product</li>
                                <div className={style['icon']}>
                                    {   
                                        open===1? <GoChevronUp /> :<GoChevronDown />
                                    }
                                </div>
                        </div>
                        <div className={style['open-display-none']}>
                            {
                                open===1? <div className={style['']}>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi blanditiis optio temporibus nostrum, libero, sed corrupti id possimus doloremque quos, labore totam reiciendis! Necessitatibus illo reiciendis quaerat repellendus recusandae!</p>
                                </div> : ''
                            }
                        </div>
                    </div>
{/* ----Tab-2----- */}
                    <div onClick={()=>tabs(2)} className={style['ul-icon']}>
                        <div className={style['ul-row']}>
                            <li className={style[`${open ===2? 'ul-icon-active' : ''}`]}>Solutions</li>
                                <div className={style['icon']}>
                                    {   
                                        open===2? <GoChevronUp /> :<GoChevronDown />
                                    }
                                </div>
                        </div>
                        <div className={style['open-display-none']}>
                            {
                                open===2? <div className={style['']}>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi blanditiis optio temporibus nostrum, libero, sed corrupti id possimus doloremque quos, labore totam reiciendis! Necessitatibus illo reiciendis quaerat repellendus recusandae!</p>
                                </div> : ''
                            }
                        </div>
                    </div>
{/* ----Tab-3----- */}
                    <div onClick={()=>tabs(3)} className={style['ul-icon']}>
                        <div className={style['ul-row']}>
                            <li className={style[`${open ===3? 'ul-icon-active' : ''}`]}>Resources</li>
                                <div className={style['icon']}>
                                    {   
                                        open===3? <GoChevronUp /> :<GoChevronDown />
                                    }
                                </div>
                        </div>
                        <div className={style['open-display-none']}>
                            {
                                open===3? <div className={style['']}>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi blanditiis optio temporibus nostrum, libero, sed corrupti id possimus doloremque quos, labore totam reiciendis! Necessitatibus illo reiciendis quaerat repellendus recusandae!</p>
                                </div> : ''
                            }
                        </div>
                    </div>
                    <li>Pricing</li>
                </ul>
            </div>

            <div className={style['navbar-block']}  >
                <ul className={`${style[menu? 'ul-menu' : 'ul-class']}`} >
                    <li className={style['li-after']} >Wix Studio</li>
                    <li>Enterprise</li>

                <div  onClick={()=>tabs(4)} className="IoIosGlobes">

                    <div className="world-top-text">

                    <div className="icon-world-row">
                        <IoIosGlobe />
                        <h3>English</h3>
                    </div>
                    <div className="icon-up-world">
                                     {   
                                        open===4? <GoChevronUp /> :<GoChevronDown />
                                    }   
                    </div>
                    
                    </div>
            {
              open===4?
               <div className='world-media-container'>
                  <div className="world-block">
                      <ul>
                        <div className="world-block">
                        <li>English</li>
                        <li>Bahasa Indonesia</li>
                        <li>Tiếng Việt</li>
                        <li>繁體中文</li>
                        <li>Українська</li>
                        <li>ไทย</li>
                        <li>Čeština</li>
                        <li>हिन्दी</li>
                        </div>
                        <div className="world-block">
                        <li>ČešDansktina</li>
                        <li>Türkçe</li>
                        <li>한국어</li>
                        <li>日本語</li>
                        <li>Svenska</li>
                        <li>Русский</li>
                        <li>Português</li>
                        </div>
                        <div className="world-block">
                        <li>Polski</li>
                        <li>Nederlands</li>
                        <li>Français</li>
                        <li>Español</li>
                        <li>Deutsch</li>
                        </div>
                      </ul>
                  </div>
              </div> 
              :
              ''
            } 
          </div>
                </ul>
            </div>
        </div>

      
        </>
  )
}

export default Navbar