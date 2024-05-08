import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import Div from '../utilities/Div';



const Follow = () => {
    return (
        <Div className="font-primary">
            <h2 className='text-center font-bold text-l uppercase'>Follow us</h2>
            <h6 className="text-center text-red-800 text-sm font-bold mt-2">
                X X X
            </h6>
            <Div className="icon flex gap-[30px] py-14 border-b border-gray-300 ">
                <Div className='flex flex-col justify-center items-center group'>
                    <div className='p-6 rounded-full border-gray-300 border transition-all group-hover:animate-bounce text-blue-600'> <FaFacebookF /> </div>
                    <span className='pt-5 text-slate-800 font-medium'>3K</span>
                    <h5 className='font-thin text-gray-500'>Likes</h5>
                </Div>
                <Div className='flex flex-col justify-center items-center group'>
                    <div className='p-6 rounded-full border-gray-300 border transition-all group-hover:animate-bounce'> <FaXTwitter /> </div>
                    <span className='pt-5 text-slate-800 font-medium'>3K</span>
                    <h5 className='font-thin text-gray-500'>Followers</h5>
                </Div>
                <Div className='flex flex-col justify-center items-center group'>
                    <div className='p-6 rounded-full border-gray-300 border transition-all group-hover:animate-bounce text-red-700'> <FaYoutube /> </div>
                    <span className='pt-5 text-slate-800 font-medium'>3K</span>
                    <h5 className='font-thin text-gray-500'>Likes</h5>
                </Div>
                <Div className='flex flex-col justify-center items-center group'>
                    <div className='p-6 rounded-full border-gray-300 border transition-all group-hover:animate-bounce text-red-700'> <FaInstagram /> </div>
                    <span className='pt-5 text-slate-800 font-medium'>3K</span>
                    <h5 className='font-thin text-gray-500'>Likes</h5>
                </Div>
            </Div>
        </Div>
    )
}

export default Follow