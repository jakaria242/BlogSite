import React, { useState } from 'react'
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { GrSend } from "react-icons/gr";
import { Link } from 'react-router-dom';
import Div from '../../utilities/Div';

const Footer = () => {

  let [subscribe, setSubscribe] = useState("")

  let handlesubscribe = (e) => {
    setSubscribe(e.target.value);
      
   }
   let handleSubscribe = () => {
     setSubscribe(" ")
     console.log(subscribe);
   }

  return (
    <Div>
           <Div className="font-primary flex flex-col items-center bg-gray-950/90 text-white py-28 space-y-9 mt-3">
                <Div className='animate-bounce'><GrSend /></Div>
                <h3 className='text-center text-2xl md:text-4xl'>Get the best blog stories<br /> into your inbox!</h3>

                <Div className='flex'>
                    <input onChange={(e) => handlesubscribe(e)} id="inputField" className='p-4 text-white rounded-l-2xl w-44 md:w-80 bg-slate-800 outline-none' type="email" placeholder='Enter Your Email' value={subscribe} />
                    
                    <p className="rounded-r-2xl bg-slate-800 px-4 flex justify-center items-center gap-4 border-l-[.3px] border-white">
                        <Link onClick={handleSubscribe} className='flex gap-3 justify-center items-center'> <GrSend /> subscribe</Link>
                    </p>
                </Div>
                <Div className="flex items-center">
                <input onChange={(e) => handlesubscribe(e)} checked id="checked-checkbox" type="checkbox" value={subscribe} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
  

                    <label htmlFor="checked-checkbox" className="ms-2 hidden sm:block font-medium  dark:text-gray-300">I agree that my submitted data is being collected and stored.</label>
                </Div>
            </Div>
               <Div className='bg-gray-950/90'>
                <Div className='flex place-content-between container mx-auto py-5 text-white border-t-[0.5px] border-white/75'>
                    <Div><p className='font-primary text-xs md:text-lg'>&copy; 2024 <Link className='text-[red]' to="https://github.com/jakaria242">Jakaria.com</Link>  All rights reserved.</p>
                    </Div>

                    <Div className='flex sm:gap-4'>
                        <Div className='p-2 sm:p-3 rounded-full border-gray-300 border transition-all hover:animate-bounce cursor-pointer'>
                            <FaFacebookF />
                        </Div>
                        <Div className='p-2 sm:p-3 rounded-full border-gray-300 border transition-all hover:animate-bounce cursor-pointer'>
                            <FaXTwitter />
                        </Div>
                        <Div className='p-2 sm:p-3 rounded-full border-gray-300 border transition-all hover:animate-bounce cursor-pointer'>
                            <FaYoutube />
                        </Div>
                        <Div className='p-2 sm:p-3 rounded-full border-gray-300 border transition-all hover:animate-bounce cursor-pointer'>
                            <FaInstagram />
                        </Div>
                    </Div>
                </Div>
            </Div>
    </Div>
  )
}

export default Footer