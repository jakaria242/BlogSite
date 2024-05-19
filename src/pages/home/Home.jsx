import React, { useEffect } from 'react'
import Banner from './section/Banner'
import Category from './section/Category'
import BlogPart from './section/BlogPart'



const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
  return (
    <>
    <Banner/>
    <Category/>
    <BlogPart/>
    </>
  )
}

export default Home