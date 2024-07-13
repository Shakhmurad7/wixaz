import React, { useState } from 'react'
import Navbar from '../NavBar/navbar'
import { IoIosGlobe } from "react-icons/io";
import style from '../NavBar/index.module.css'

function Header() {
  const [open , setopen] = useState(null)
  const tabs =(i)=>{
      if(open === i){
          setopen(null)
      }
      else{
          setopen(i)
      }

  }
  return (
    <>
    <div className="hader-container">
      <div className="header-left">
        <img src='./imgs/Cobify 3.jpg' />
        <Navbar open={open} setopen={setopen} tabs={tabs} />
      </div>

      <div className="header-right">
        <div className="header-left-row">
          <div className="IoIosGlobe ">
            <IoIosGlobe />
          </div>
            <p className='li-after' >log ln</p>
        </div>
          <p className='p-element'> Get Started</p>
      </div>

    </div>




{/* -----Open1---- */}
    <div className={`${style['active-container']} ${open===1? style['active'] : ''}`}>
            <div className={style['active-left']}>
              <div className={style['active-left-top']}>
                <div className={style['active-left-top-block']}>
                  <h3>CREATION</h3>
                  <h3>BUSINESS</h3>
                </div>
              </div>
                <div className={style['active-left-container']}>
                    <div className={style['active-container-left-1']}>
                    <div className={style['active-container-left-box']}>

                     <div className={style['active-container-left-box-block']} >
                          <h2>Website design</h2>
                          <p>Create your site with intuitive design features</p>
                      </div>
                      <div className={style['active-container-left-box-block']} >
                          <h2>Website design</h2>
                          <p>Create your site with intuitive design features</p>
                    </div>

                        <div className={style['active-container-left-box-block']} >
                            <h2>Website design</h2>
                            <p>Create your site with intuitive design features</p>
                        </div>

                    </div>  
                                             
                  <div className={style['active-container-left-box']}>
                        <div className={style['active-container-left-box-block']} >
                            <h2>Website design</h2>
                            <p>Create your site with intuitive design features</p>
                        </div>

                        <div className={style['active-container-left-box-block']} >
                            <h2>Website design</h2>
                            <p>Create your site with intuitive design features</p>
                        </div>
                        <div className={style['active-container-left-box-block']} >
                            <h2>Website design</h2>
                            <p>Create your site with intuitive design features</p>
                        </div>
                    </div>  
                                             
            </div>

            <div className={style['active-container-left-2']}>
                          <div className={style['active-container-left-box-block']} >
                            <h2>Website design</h2>
                            <p>Create your site with intuitive design features</p>
                        </div>

                        <div className={style['active-container-left-box-block']} >
                            <h2>Website design</h2>
                            <p>Create your site with intuitive design features</p>
                        </div>
            </div>

        </div>
      </div>
        <div className={style['active-right']}>
                <div className={style['active-right-container']}>
                    <div className={style['active-right-top-text']}>
                      <h3>ESSENTIALS</h3>
                    </div>

                    <div className={style['active-right-box']}>
                      <div className={style['active-right-block']}>
                          <h2>Domain names</h2>
                          <p>Buy & register a domain for your website.</p>
                      </div>

                      <div className={style['active-right-block']}>
                          <h2>Domain names</h2>
                          <p>Buy & register a domain for your website.</p>
                      </div>

                      <div className={style['active-right-block']}>
                          <h2>Domain names</h2>
                          <p>Buy & register a domain for your website.</p>
                      </div>
                    </div>
                </div>
        </div>
      </div>




{/* -----Open2------ */}
<div className={`${style['active-container']} ${open===2? style['active'] : ''}`}>
            <div className={style['active-left']}>
              <div className={style['active-left-top']}>
                <div className={style['active-left-top-block']}>
                  <h3>CREATION</h3>
                  <h3>BUSINESS</h3>
                </div>
              </div>
                <div className={style['active-left-container']}>
                    <div className={style['active-container-left-1']}>
                    <div className={style['active-container-left-box']}>

                     <div className={style['active-container-left-box-block']} >
                          <h2>Website design</h2>
                          <p>Create your site with intuitive design features</p>
                      </div>
                      <div className={style['active-container-left-box-block']} >
                          <h2>Website design</h2>
                          <p>Create your site with intuitive design features</p>
                    </div>

                        <div className={style['active-container-left-box-block']} >
                            <h2>Website design</h2>
                            <p>Create your site with intuitive design features</p>
                        </div>

                    </div>  
                                             
                  <div className={style['active-container-left-box']}>
                        <div className={style['active-container-left-box-block']} >
                            <h2>Website design</h2>
                            <p>Create your site with intuitive design features</p>
                        </div>

                        <div className={style['active-container-left-box-block']} >
                            <h2>Website design</h2>
                            <p>Create your site with intuitive design features</p>
                        </div>
                        <div className={style['active-container-left-box-block']} >
                            <h2>Website design</h2>
                            <p>Create your site with intuitive design features</p>
                        </div>
                    </div>  
                                             
            </div>

            <div className={style['active-container-left-2']}>
                          <div className={style['active-container-left-box-block']} >
                            <h2>Website design</h2>
                            <p>Create your site with intuitive design features</p>
                        </div>

                        <div className={style['active-container-left-box-block']} >
                            <h2>Website design</h2>
                            <p>Create your site with intuitive design features</p>
                        </div>
            </div>

        </div>
      </div>
        <div className={style['active-right']}>
                <div className={style['active-right-container']}>
                    <div className={style['active-right-top-text']}>
                      <h3>ESSENTIALS</h3>
                    </div>

                    <div className={style['active-right-box']}>
                      <div className={style['active-right-block']}>
                          <h2>Domain names</h2>
                          <p>Buy & register a domain for your website.</p>
                      </div>

                      <div className={style['active-right-block']}>
                          <h2>Domain names</h2>
                          <p>Buy & register a domain for your website.</p>
                      </div>

                      <div className={style['active-right-block']}>
                          <h2>Domain names</h2>
                          <p>Buy & register a domain for your website.</p>
                      </div>
                    </div>
                </div>
        </div>
      </div>



{/* -----Open3----- */}
<div className={`${style['active-container']} ${open===3? style['active'] : ''}`}>
            <div className={style['active-left']}>
              <div className={style['active-left-top']}>
                <div className={style['active-left-top-block']}>
                  <h3>CREATION</h3>
                  <h3>BUSINESS</h3>
                </div>
              </div>
                <div className={style['active-left-container']}>
                    <div className={style['active-container-left-1']}>
                    <div className={style['active-container-left-box']}>

                     <div className={style['active-container-left-box-block']} >
                          <h2>Website design</h2>
                          <p>Create your site with intuitive design features</p>
                      </div>
                      <div className={style['active-container-left-box-block']} >
                          <h2>Website design</h2>
                          <p>Create your site with intuitive design features</p>
                    </div>

                        <div className={style['active-container-left-box-block']} >
                            <h2>Website design</h2>
                            <p>Create your site with intuitive design features</p>
                        </div>

                    </div>  
                                             
                  <div className={style['active-container-left-box']}>
                        <div className={style['active-container-left-box-block']} >
                            <h2>Website design</h2>
                            <p>Create your site with intuitive design features</p>
                        </div>

                        <div className={style['active-container-left-box-block']} >
                            <h2>Website design</h2>
                            <p>Create your site with intuitive design features</p>
                        </div>
                        <div className={style['active-container-left-box-block']} >
                            <h2>Website design</h2>
                            <p>Create your site with intuitive design features</p>
                        </div>
                    </div>  
                                             
            </div>

            <div className={style['active-container-left-2']}>
                          <div className={style['active-container-left-box-block']} >
                            <h2>Website design</h2>
                            <p>Create your site with intuitive design features</p>
                        </div>

                        <div className={style['active-container-left-box-block']} >
                            <h2>Website design</h2>
                            <p>Create your site with intuitive design features</p>
                        </div>
            </div>

        </div>
      </div>
        <div className={style['active-right']}>
                <div className={style['active-right-container']}>
                    <div className={style['active-right-top-text']}>
                      <h3>ESSENTIALS</h3>
                    </div>

                    <div className={style['active-right-box']}>
                      <div className={style['active-right-block']}>
                          <h2>Domain names</h2>
                          <p>Buy & register a domain for your website.</p>
                      </div>

                      <div className={style['active-right-block']}>
                          <h2>Domain names</h2>
                          <p>Buy & register a domain for your website.</p>
                      </div>

                      <div className={style['active-right-block']}>
                          <h2>Domain names</h2>
                          <p>Buy & register a domain for your website.</p>
                      </div>
                    </div>
                </div>
        </div>
      </div>
    </>
  )
}

export default Header