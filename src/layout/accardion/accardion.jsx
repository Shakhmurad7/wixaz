import React, { useState } from 'react'
import style from './index.module.css'
import { FaPlus } from "react-icons/fa6";

function Accardion() {

    const [open , setopen] = useState(null)
    const tab =(i)=>{
        if(open ===  i){
            return setopen(null)
        }
        setopen(i)
    }


    const AccardionData = [
        {
            id:1,
            title:'Yes. Wix offers a few different ways to create your own website, so you can choose the creation process that works best for you. Pick from 900+ designer-made templates, or use our AI website builder to create a business-ready site in no time using a conversational interface. You can also start from scratch using Wix’s drag-and-drop website builder. Whichever way you choose, you can always continue customizing in the Editor for total website design freedom.',
            item:'Is it easy to build a website?'
        },
        {
            id:2,
            title:'Yes. Wix offers a few different ways to create your own website, so you can choose the creation process that works best for you. Pick from 900+ designer-made templates, or use our AI website builder to create a business-ready site in no time using a conversational interface. You can also start from scratch using Wix’s drag-and-drop website builder. Whichever way you choose, you can always continue customizing in the Editor for total website design freedom.',
            item:'Is it easy to build a website?'
        },
        {
            id:3,
            title:'Yes. Wix offers a few different ways to create your own website, so you can choose the creation process that works best for you. Pick from 900+ designer-made templates, or use our AI website builder to create a business-ready site in no time using a conversational interface. You can also start from scratch using Wix’s drag-and-drop website builder. Whichever way you choose, you can always continue customizing in the Editor for total website design freedom.',
            item:'Is it easy to build a website?'
        },
        {
            id:4,
            title:'Yes. Wix offers a few different ways to create your own website, so you can choose the creation process that works best for you. Pick from 900+ designer-made templates, or use our AI website builder to create a business-ready site in no time using a conversational interface. You can also start from scratch using Wix’s drag-and-drop website builder. Whichever way you choose, you can always continue customizing in the Editor for total website design freedom.',
            item:'Is it easy to build a website?'
        },
        {
            id:5,
            title:'Yes. Wix offers a few different ways to create your own website, so you can choose the creation process that works best for you. Pick from 900+ designer-made templates, or use our AI website builder to create a business-ready site in no time using a conversational interface. You can also start from scratch using Wix’s drag-and-drop website builder. Whichever way you choose, you can always continue customizing in the Editor for total website design freedom.',
            item:'Is it easy to build a website?'
        },
        {
            id:6,
            title:'Yes. Wix offers a few different ways to create your own website, so you can choose the creation process that works best for you. Pick from 900+ designer-made templates, or use our AI website builder to create a business-ready site in no time using a conversational interface. You can also start from scratch using Wix’s drag-and-drop website builder. Whichever way you choose, you can always continue customizing in the Editor for total website design freedom.',
            item:'Is it easy to build a website?'
        },
        {
            id:7,
            title:'Yes. Wix offers a few different ways to create your own website, so you can choose the creation process that works best for you. Pick from 900+ designer-made templates, or use our AI website builder to create a business-ready site in no time using a conversational interface. You can also start from scratch using Wix’s drag-and-drop website builder. Whichever way you choose, you can always continue customizing in the Editor for total website design freedom.',
            item:'Is it easy to build a website?'
        },
    ]

  return (
        <>
        <div className={style['accardion-div']}>
            <div className={style['accardion-container']}>
                <h2>FAQs</h2>
                <div className={style['accardion-box']}>
                    {
                        AccardionData.map(({item , title , id } , i)=>(
                        <div onClick={()=>tab(i)} key={id} className={style['accardion-block']}>
                          <div  className={style['accardion-row']}>
                            <h3>{item}</h3>
                            <div  className={`${style['icon-plus']} ${open === i ? style['active'] : ''}`}>
                                <FaPlus  />
                            </div>
                        </div>
                        <p className={`${style['accardion-p']} ${open === i ? style['active'] : ''}`} >{title}</p>
                    </div>

                        ))

                    }

                </div>
            </div>
        </div>
        </>
  )
}

export default Accardion