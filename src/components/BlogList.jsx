import React from 'react'
import Image from '../utilities/Image'
import { FaRegComment } from "react-icons/fa";
import Div from '../utilities/Div';


const BlogList = ({ source, title, className }) => {
    return (
        <Div className={className}>
            <Div className='font-primary flex gap-6 items-center group'>
                <Div>
                    <Div className="h-20 w-20 rounded-full overflow-hidden">
                        <Image className="w-full h-full object-cover bg-cover rounded-full group-hover:scale-125 transition-all duration-300" source={source} />
                    </Div>
                </Div>
                <Div>
                    <h4 className="font-medium text-lg xl:text-xl capitalize after:transition-all after:duration-300 relative after:absolute after:w-0 after:h-1 after:top-14 sm:after:top-6 after:left-0 after:content-[''] after:bg-slate-500 group-hover:after:w-full text-nowrap">{title}</h4>
                    <h6 className='flex gap-3 uppercase font-thin text-gray-500'>27 mar 2027 <span className='flex gap-1 justify-center items-center'><FaRegComment /> o </span> </h6>
                </Div>
            </Div>
        </Div>
    )
}

export default BlogList