import React, { useContext } from 'react'
import Div from '../../utilities/Div'
import Heading from '../../utilities/Heading'
import tec1 from '../../assets/images/tec1.jpg'
import tec2 from '../../assets/images/tec2.jpg'
import tec3 from '../../assets/images/tec3.jpg'
import BlogPostCard from '../../components/BlogPostCard'
import myContext from '../../context/myContext'
import { useNavigate } from 'react-router-dom';

const AllBlogs = () => {
  const context = useContext(myContext)
  const {getAllBlog} = context
  const navigate = useNavigate()

  return (
    <>
    <Div className="py-6 container mx-auto">
       <Div className="">
       <Heading level="3" className="text-center text-[30px] font-bold mb-[40px]">All Blogs</Heading>
       <Div className="py-8">
      <Div className="container mx-auto flex justify-around gap-[35px]">
        {
           getAllBlog.length > 0
           ?
           <>
           {
              getAllBlog.map((item, index)=>{ 
                const {thumbnail, date, id} = item
                return(
                  <BlogPostCard onClick={()=>navigate(`/bloginfo/${id}`)} key={index} sorce={thumbnail} spantxt={date} titletxt={item.blogs.title} discriptxt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est blanditiis, nihil..."/>
                )
              })
           }
           </>
           :
           <h2>Not Found</h2>
        }
      </Div>
      </Div>
       </Div>
    </Div>
    </>
  )
}

export default AllBlogs