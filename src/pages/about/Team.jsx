import React from 'react'
import Image from '../../utilities/Image'
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6'

const Team = ({ source, memberName, description, title }) => {
    return (
        <div className='font-primary flex flex-col items-center gap-2'>
            <Image className="h-96 w-full bg-cover object-cover bg-top" source={source} />
            <h3 className='text-3xl pt-4'>{memberName}</h3>
            <h6 className="text-gray-400">{title}</h6>
            <p className='text-center px-20 text-gray-400 py-3'>{description}</p>
            <div className='flex gap-4'>
                <div className='p-2 sm:p-3 rounded-full border-gray-300 border transition-all hover:animate-bounce cursor-pointer'>
                    <FaFacebookF />
                </div>
                <div className='p-2 sm:p-3 rounded-full border-gray-300 border transition-all hover:animate-bounce cursor-pointer'>
                    <FaXTwitter />
                </div>
                <div className='p-2 sm:p-3 rounded-full border-gray-300 border transition-all hover:animate-bounce cursor-pointer'>
                    <FaInstagram />
                </div>
            </div>
        </div>
    )
}

export default Team