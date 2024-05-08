import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Parallax, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Div from '../../../utilities/Div';



const BlogSlider = () => {

    let [card, setCard] = useState(false)

    // detect card hover and leave hover
    let handleCardOver = () => {
        setCard(true)
    }
    let handleCardLeave = () => {
        setCard(false)
    }

    return (
       <Div className="container w-[392px]">
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Parallax, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                style={{width: "180 px"}}
                pagination={{ clickable: true }}
                

            >
                    <SwiperSlide onMouseOver={handleCardOver} onMouseLeave={handleCardLeave} >
                    <div className="h-[700px] font-primary bg-no-repeat bg-cover bg-middle group" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/beautiful-scenery-rock-formations-by-sea-queens-bath-kauai-hawaii-sunset_181624-36857.jpg?t=st=1715172410~exp=1715176010~hmac=3147920e201655a6542d76cb1266d72d9770a5e86a2605c25ace982ddac359ed&w=740)' }}>
                        <div className='bg-slate-950/50 h-full text-white flex justify-center items-center flex-col'>
                            <h6 className="uppercase rounded-full bg-slate-900 text-white px-4 py-1 text-sm transition-all duration-500 group-hover:bg-red-600 ">NEWS</h6>
                            {/* <h3 className='font-bold text-xl sm:text-6xl py-4'>Exotic Plants Discovery</h3> */}

                            <h3 className={`font-bold py-4 font-primary text-white text-4xl transition-all after:transition-all after:duration-500 relative after:absolute after:w-0 after:h-1 after:top-14 sm:after:top-14 after:left-0 after:content-[''] after:bg-white ${card && "after:w-full"}`}>Exotic Plants Discovery</h3>

                            <span className='uppercase font-semibold'>By sandra jones <i>19 feb 2029 22:11</i></span>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide onMouseOver={handleCardOver} onMouseLeave={handleCardLeave} >
                    <div className="h-[700px] font-primary bg-no-repeat bg-cover bg-middle group" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?t=st=1715172502~exp=1715176102~hmac=6dc9a4deda15ead482173e6b0f516b92d46dbcafdbb46e9cf2e19fd18173b5d3&w=826)' }}>
                        <div className='bg-slate-950/50 h-full text-white flex justify-center items-center flex-col'>
                            <h6 className="uppercase rounded-full bg-slate-900 text-white px-4 py-1 text-sm transition-all duration-500 group-hover:bg-red-600 ">NEWS</h6>
                            {/* <h3 className='font-bold text-xl sm:text-6xl py-4'>Exotic Plants Discovery</h3> */}

                            <h3 className={`font-bold py-4 font-primary text-white text-4xl transition-all after:transition-all after:duration-500 relative after:absolute after:w-0 after:h-1 after:top-14 sm:after:top-14 after:left-0 after:content-[''] after:bg-white ${card && "after:w-full"}`}>Exotic Plants Discovery</h3>

                            <span className='uppercase font-semibold'>By sandra jones <i>19 feb 2029 22:11</i></span>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide onMouseOver={handleCardOver} onMouseLeave={handleCardLeave} >
                    <div className="h-[700px] font-primary bg-no-repeat bg-cover bg-middle group" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/vestrahorn-mountains-stokksnes-iceland_335224-667.jpg?t=st=1715172626~exp=1715176226~hmac=4166107aa2c01c2e09351dbe65a24c9067e2e9c9a7e0960686e7546037277fc0&w=826)' }}>
                        <div className='bg-slate-950/50 h-full text-white flex justify-center items-center flex-col'>
                            <h6 className="uppercase rounded-full bg-slate-900 text-white px-4 py-1 text-sm transition-all duration-500 group-hover:bg-red-600 ">NEWS</h6>
                            {/* <h3 className='font-bold text-xl sm:text-6xl py-4'>Exotic Plants Discovery</h3> */}

                            <h3 className={`font-bold py-4 font-primary text-white text-4xl transition-all after:transition-all after:duration-500 relative after:absolute after:w-0 after:h-1 after:top-14 sm:after:top-14 after:left-0 after:content-[''] after:bg-white ${card && "after:w-full"}`}>Exotic Plants Discovery</h3>

                            <span className='uppercase font-semibold'>By sandra jones <i>19 feb 2029 22:11</i></span>
                        </div>
                    </div>
                    </SwiperSlide>


                
        </Swiper>
       </Div>
    )
}

export default BlogSlider