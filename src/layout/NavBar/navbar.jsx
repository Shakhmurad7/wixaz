
import style  from './index.module.css'
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";

function Navbar({open , tabs , menu , setmenu}) {



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
                    <div onClick={()=>tabs(1)} className={style['ul-icon']}>
                        <li className={style[`${open ===1? 'ul-icon-active' : ''}`]}>Product</li>
                        <div className={style['icon']}>
                            {
                                open===1? <GoChevronUp /> :<GoChevronDown />
                            }
                        </div>
                    </div>


                    <div onClick={()=>tabs(2)} className={style['ul-icon']}>
                        <li className={style[`${open ===2? 'ul-icon-active' : ''}`]} >Solutions</li>
                        <div className={style['icon']}>
                            {
                                open===2? <GoChevronUp /> :<GoChevronDown />
                            }
                        </div>
                    </div>
                    <div  onClick={()=>tabs(3)} className={style['ul-icon']}>
                        <li className={style[`${open ===3? 'ul-icon-active' : ''}`]}  >Resources</li>
                        <div className={style['icon']}>
                            {
                                open===3? <GoChevronUp /> :<GoChevronDown />
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
                </ul>
            </div>
        </div>

      
        </>
  )
}

export default Navbar