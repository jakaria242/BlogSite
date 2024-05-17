import React from 'react'
import Div from '../../utilities/Div'
import Heading from '../../utilities/Heading'
import tec1 from '../../assets/images/tec1.jpg'
import tec2 from '../../assets/images/tec2.jpg'
import tec3 from '../../assets/images/tec3.jpg'
import BlogPostCard from '../../components/BlogPostCard'

const AllBlogs = () => {
  return (
    <>
    <Div className="py-6 container mx-auto">
       <Div className="">
       <Heading level="3" className="text-center text-[30px] font-bold mb-[40px]">All Blogs</Heading>
       <Div className="py-8">
      <Div className="container mx-auto flex justify-around gap-[35px]">
         <BlogPostCard sorce={tec1} spantxt="13 May 2024" titletxt="React Introduction" discriptxt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est blanditiis, nihil..."/>
         <BlogPostCard sorce={tec2} spantxt="13 May 2024" titletxt="React Introduction" discriptxt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est blanditiis, nihil..."/>
         <BlogPostCard sorce={tec3} spantxt="13 May 2024" titletxt="React Introduction" discriptxt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est blanditiis, nihil..."/>
      </Div>
      </Div>
       </Div>
    </Div>
    </>
  )
}

export default AllBlogs