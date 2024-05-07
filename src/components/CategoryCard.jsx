import React from 'react'
import { Link } from 'react-router-dom'
import Div from '../utilities/Div'
import Image from '../utilities/Image'


const CategoryCard = ({ link, source, text }) => {
  return (
 <Div>
      <Link to={link}>
        <Div className='h-[150px] w-[230px] overflow-hidden relative group'>
        <Image className="h-full w-full object-cover group-hover:scale-125 duration-300" source={source} alt="not found"/>
        <span className='absolute inset-0 flex justify-center items-center text-white hover:font-bold transition-all bg-slate-950/50'>{text}</span>
    </Div>
</Link>
 </Div>
  )
}

export default CategoryCard