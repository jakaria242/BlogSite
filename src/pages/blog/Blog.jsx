import React from 'react'
import Div from '../../utilities/Div'
import { TypeAnimation } from 'react-type-animation';
import BlogPostCard from '../../components/BlogPostCard';
import tec1 from '../../assets/images/tec1.jpg'
import tec2 from '../../assets/images/tec2.jpg'
import tec3 from '../../assets/images/tec3.jpg'
import Button from '../../utilities/Button';



const Blog = () => {
  return (
 <>
  <Div className="h-[600px]  bg-no-repeat bg-cover bg-center group" style={{ backgroundImage: `url(https://img.freepik.com/premium-photo/wooden-mahogany-blog-concept-creative-art-poster_107173-66982.jpg?w=826)` }}>
    <Div className='bg-slate-950/50 h-full text-white flex justify-center items-center flex-col'>
           <TypeAnimation
           sequence={['Read Our Blog', 500, 'Read Our Content', 500, 'Read Our Story', 500]}
       style={{ fontSize: '60px' }}
       className='font-medium'
        repeat={Infinity}
     />
     <h6 className="uppercase rounded-full bg-slate-900 text-white px-4 py-1 text-sm transition-all duration-500 group-hover:bg-red-600 mt-4 cursor-pointer">Read Me</h6>
     </Div>
   </Div>
   <Div className="py-8">
    <Div className="container mx-auto flex justify-around gap-[35px]">
      <BlogPostCard sorce={tec1} spantxt="13 May 2024" titletxt="React Introduction" discriptxt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est blanditiis, nihil..."/>
      <BlogPostCard sorce={tec2} spantxt="13 May 2024" titletxt="React Introduction" discriptxt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est blanditiis, nihil..."/>
      <BlogPostCard sorce={tec3} spantxt="13 May 2024" titletxt="React Introduction" discriptxt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est blanditiis, nihil..."/>
    </Div>
   </Div>
   <Div className="flex justify-center mt-6 mb-[80px]">
       <Button className=" py-3 px-6 bg-[black] text-white text-base	font-normal rounded-2xl	" text="See More"/>
   </Div>
 </>
  )
}

export default Blog