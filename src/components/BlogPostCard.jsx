import React from 'react'
import Div from '../utilities/Div'
import Image from '../utilities/Image'
import Heading from '../utilities/Heading'

const BlogPostCard = ({sorce, spantxt, titletxt, discriptxt}) => {
  return (
    <Div className="w-[365px] overflow-hidden rounded-2xl shadow-2xl">
        <Div className="w-[365px] h-[200px]">
           <Image className="w-full h-full object-cover	" source={sorce}/>
        </Div>
         <Div className="p-6">
            <span className='text-xs'>{spantxt}</span>
            <Heading level="3" className="text-xl font-semibold	font-roboto">{titletxt}</Heading>
            <p className='pt-[8px]'>{discriptxt}</p>
         </Div>
    </Div>
   
  )
}

export default BlogPostCard