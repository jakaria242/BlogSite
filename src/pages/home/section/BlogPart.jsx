import React, { useState } from 'react'
import Div from '../../../utilities/Div'
import HomeBlogCard from '../../../components/HomeBlogCard'
import homeBlogPic1 from '../../../assets/images/blg.jpg'
import homeBlogPic2 from '../../../assets/images/homeBlog2.jpg'
import homeBlogPic3 from '../../../assets/images/homeBlog3.jpg'
import homeBlogPic4 from '../../../assets/images/homeBlog4.jpg'
import homeBlogPic5 from '../../../assets/images/homeBlog5.jpg'
import homeBlogPic6 from '../../../assets/images/homeBlog6.jpg'
import homeBlogPic7 from '../../../assets/images/homeBlog7.jpg'
import { Link } from 'react-router-dom'
import Follow from '../../../components/Follow'
import BlogListCard from './BlogListCard'
import Banner from './Banner'
import BlogSlider from './BlogSlider'


const BlogPart = () => {


    let [card, setCard] = useState(false)

    //  card hover and leave hover
    let handleCardOver = () => {
        setCard(true)
    }
    let handleCardLeave = () => {
        setCard(false)
    }

  return (
    <Div className="container mx-auto grid grid-cols-12 pb-[40px] gap-12 items-start">
    {/*============================== left part star =========================== */}
      <Div className="grid col-span-8 ">
         <Div className='border-b-[1px] border-slate-400/50 mb-14'>
         <HomeBlogCard sorce={homeBlogPic1} stitle="news" title="Trending Architecture News" content="We have gathered several projects that several projects that will catch your interest as a…"/>
         </Div>
         <Div onMouseOver={handleCardOver}
         onMouseLeave={handleCardLeave}
         className="h-[500px] font-primary bg-no-repeat bg-cover bg-middle group"
         style={{ backgroundImage: `url(${homeBlogPic2})` }}>
         <Div className='bg-slate-950/50 h-full text-white flex justify-center items-center flex-col'>
             <h6 className="uppercase rounded-full bg-slate-900 text-white px-4 py-1 text-sm transition-all duration-500 group-hover:bg-red-600">news</h6>
             <h3 className={`font-primary text-white text-3xl py-4 sm:text-6xl font-medium transition-all after:transition-all after:duration-500 relative after:absolute after:w-0 after:h-1 after:top-14 sm:after:top-20 after:left-0 after:content-[''] after:bg-white ${card && "after:w-full"}`}>Explore Your Story</h3>

             <span className='uppercase font-semibold'>By sandra jones <i>19 feb 2029 22:11</i></span>
         </Div>
        </Div>
        <Div className='border-b-[1px] border-slate-400/50 mb-14'>
         <HomeBlogCard sorce={homeBlogPic3} stitle="Blog" title="Being a Brand Expert" content="Changing your vision of many things is hard, but possible. Try these…"/>
         </Div> 
        <Div className='border-b-[1px] border-slate-400/50 mb-14'>
         <HomeBlogCard sorce={homeBlogPic5} stitle="Dev Tool" title="Top Modern Apps" content="Every now and then a designer needs help getting his projects organized"/>
         </Div>
         <Div onMouseOver={handleCardOver}
         onMouseLeave={handleCardLeave}
         className="h-[500px] font-primary bg-no-repeat bg-cover bg-middle group"
         style={{ backgroundImage: `url(${homeBlogPic4})` }}>
         <Div className='bg-slate-950/50 h-full text-white flex justify-center items-center flex-col'>
             <h6 className="uppercase rounded-full bg-slate-900 text-white px-4 py-1 text-sm transition-all duration-500 group-hover:bg-red-600">news</h6>
             <h3 className={`font-primary text-white text-3xl py-4 sm:text-6xl font-medium transition-all after:transition-all after:duration-500 relative after:absolute after:w-0 after:h-1 after:top-14 sm:after:top-20 after:left-0 after:content-[''] after:bg-white ${card && "after:w-full"}`}>Explore Your Story</h3>

             <span className='uppercase font-semibold'>By sandra jones <i>19 feb 2029 22:11</i></span>
         </Div>
        </Div>
        <Div className='border-b-[1px] border-slate-400/50 mb-14'>
         <HomeBlogCard sorce={homeBlogPic6} stitle="Blog" title="Being a Brand Expert" content="Changing your vision of many things is hard, but possible. Try these…"/>
         </Div> 
        <Div className='border-b-[1px] border-slate-400/50 mb-14'>
         <HomeBlogCard sorce={homeBlogPic7} stitle="Dev Tool" title="Top Modern Apps" content="Every now and then a designer needs help getting his projects organized"/>
         </Div>
             {/* older post button */}
            <Div className="my-16 ">
                <Link target='_blank' to="/">
                    <span className='py-4 px-8 border-[1px] border-slate-600 rounded-full uppercase underline font-bold text-sm hover:text-red-800 hover:border-red-800 transition-all duration-300'>older posts</span>
                    </Link>
            </Div>
     </Div> 
        {/*============================== left part End =========================== */}



      {/*============================== right part End =========================== */}
        <Div className="grid col-span-4 sticky top-0 right-0 pt-[22px]">
             <Follow/>
             <BlogListCard/>
             <BlogSlider/>
         </Div>
           {/*============================== right part End =========================== */}
     </Div>
  )
}

export default BlogPart