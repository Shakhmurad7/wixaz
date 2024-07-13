
import style  from './index.module.css'
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";


function Navbar({open , tabs}) {



  return (
        <>
        <div className={style['navbar-container']}>
            <div className={style['navbar-block']}>
                <ul className={style['ul']}  >
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