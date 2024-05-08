import React, { useState } from 'react'
import Div from '../utilities/Div'
import Image from '../utilities/Image'
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { LuArrowRightCircle } from "react-icons/lu";
import { FaRegComment } from 'react-icons/fa6';

const HomeBlogCard = ({ sorce, stitle, title, content }) => {

    let [card, setCard] = useState(false)


    
        // card hover and leave hover
        let handleCardOver = () => {
            setCard(true)
        }
        let handleCardLeave = () => {
            setCard(false)
        }


  return (
    <Div onMouseOver={handleCardOver} onMouseLeave={handleCardLeave} className=" flex flex-row justify-between gap-8 my-12 group cursor-pointer">
        <Div className="w-fulll h-72 overflow-hidden relative">
            <Image className={`w-full h-full object-cover transition ease-in-out duration-500 ${card && "scale-125"}`} source={sorce}/>
            <Div className="w-[100%] h-[100%] bg-[rgba(14,13,13,0.5)] top-0 left-0 absolute "></Div>
        </Div>
        <Div className="flex flex-col gap-3 justify-center w-full">
                <h6 className='font-primary uppercase text-slate-500'>{stitle}</h6>
                  <Div>
                     <h3 className={`inline text-slate-800 text-2xl sm:text-3xl font-medium transition-all after:transition-all after:duration-500 relative after:absolute after:w-0 after:h-1 after:top-7 sm:after:top-9 after:left-0 after:content-[''] after:bg-slate-500 ${card && "after:w-full"}`}>{title}</h3>
                  </Div>
                   <h6 className='flex gap-5 uppercase text-sm font-thin text-gray-500'>
                      <b>By sandra jones</b> 27 mar 2027 <span className='flex gap-1 justify-center items-center'><FaRegComment /> o </span> </h6>
                 <p className='font-primary text-gray-400 pr-[147px]'>{content}</p>
                 <Div className="cursor-pointer contents transition ease-in-out delay-150" onMouseOver={handleCardOver} onMouseLeave={handleCardLeave}>
                        {
                            card == false
                                ?
                                <MdOutlineArrowRightAlt className='transition ease-in-out delay-150' />
                                :
                                <LuArrowRightCircle className='transition ease-in-out delay-150' />
                        }
                    </Div>
        </Div>
    </Div>
  )
}

export default HomeBlogCard