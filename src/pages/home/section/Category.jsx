import React from 'react'
import CategoryCard from '../../../components/CategoryCard'
import Div from '../../../utilities/Div'
import pic1 from '../../../assets/images/pic1.jpg'
import pic2 from '../../../assets/images/pic2.jpg'
import pic3 from '../../../assets/images/pic3.jpg'
import pic4 from '../../../assets/images/pic4.jpg'
import pic5 from '../../../assets/images/pic6.jpg'
import pic6 from '../../../assets/images/pic7.jpg'
import Marquee from "react-fast-marquee";

const Category = () => {
  return (
    <Div className="py-8">
        <Marquee
        pauseOnHover={true}
        >
        <Div className=" flex justify-between gap-[43px]">
           <CategoryCard link="/" source={pic1} text="Blog"/>
           <CategoryCard link="/" source={pic2} text="Blog"/>
           <CategoryCard link="/" source={pic3} text="Blog"/>
           <CategoryCard link="/" source={pic4} text="Blog"/>
           <CategoryCard link="/" source={pic5} text="Blog"/>
           {/* <CategoryCard link="/" source={pic6} text="Blog"/> */}
        </Div>
        </Marquee>
    </Div>
  )
}

export default Category