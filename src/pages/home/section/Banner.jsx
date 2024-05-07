import React, { useState } from 'react'
import Div from '../../../utilities/Div';
import banner2 from '../../../assets/images/banner2.jpg'
import banner1 from '../../../assets/images/banner1.jpg'
import banner3 from '../../../assets/images/banner3.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Parallax, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




const Banner = () => {
  let [card, setCard] = useState(false)

  // detect card hover and leave hover
  let handleCardOver = () => {
      setCard(true)
  }
  let handleCardLeave = () => {
      setCard(false)
  }
  return (
      <Div>
          <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Parallax, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                 delay: 2500,
                  disableOnInteraction: true,
                }}
                pagination={{ clickable: true }}
            >
            <SwiperSlide onMouseOver={handleCardOver} onMouseLeave={handleCardLeave}>
                  <div className="h-[600px]  bg-no-repeat bg-cover bg-center group" style={{ backgroundImage: `url(${banner2})` }}>
                  <Div className='bg-slate-950/50 h-full text-white flex justify-center items-center flex-col'>
                            <h6 className="uppercase rounded-full bg-slate-900 text-white px-4 py-1 text-sm transition-all duration-500 group-hover:bg-red-600 ">Click Here</h6>

                            <h3 className={`font-bold py-4 font-primary text-white text-6xl transition-all after:transition-all after:duration-500 relative after:absolute after:w-0 after:h-1 after:bottom-[0px] after:left-0 after:content-[''] after:bg-white ${card && "after:w-full"}`}>Explore Your Blog</h3>

                            <span className='uppercase font-semibold pt-2'>Contract Me <i> +880 1905-00715</i></span>
                        </Div>
                  </div>
            </SwiperSlide>  
            <SwiperSlide onMouseOver={handleCardOver} onMouseLeave={handleCardLeave}>
                  <div className="h-[600px]  bg-no-repeat bg-cover bg-center group" style={{ backgroundImage: `url(${banner3})` }}>
                  <Div className='bg-slate-950/50 h-full text-white flex justify-center items-center flex-col'>
                            <h6 className="uppercase rounded-full bg-slate-900 text-white px-4 py-1 text-sm transition-all duration-500 group-hover:bg-red-600 ">Click Here</h6>

                            <h3 className={`font-bold py-4 font-primary text-white text-6xl transition-all after:transition-all after:duration-500 relative after:absolute after:w-0 after:h-1 after:bottom-[0px] after:left-0 after:content-[''] after:bg-white ${card && "after:w-full"}`}>Explore Your Story</h3>

                            <span className='uppercase font-semibold pt-2'>Contract Me <i> +880 1905-00715</i></span>
                        </Div>
                  </div>
            </SwiperSlide>  
            <SwiperSlide onMouseOver={handleCardOver} onMouseLeave={handleCardLeave}>
                  <div className="h-[600px]  bg-no-repeat bg-cover bg-center group" style={{ backgroundImage: `url(${banner1})` }}>
                  <Div className='bg-slate-950/50 h-full text-white flex justify-center items-center flex-col'>
                            <h6 className="uppercase rounded-full bg-slate-900 text-white px-4 py-1 text-sm transition-all duration-500 group-hover:bg-red-600 ">Click Here</h6>

                            <h3 className={`font-bold py-4 font-primary text-white text-6xl transition-all after:transition-all after:duration-500 relative after:absolute after:w-0 after:h-1 after:bottom-[0px] after:left-0 after:content-[''] after:bg-white ${card && "after:w-full"}`}>Explore Your Content</h3>
                            <span className='uppercase font-semibold pt-2'>Contract Me <i> +880 1905-00715</i></span>
                        </Div>
                  </div>
            </SwiperSlide>  
        </Swiper>
     

      </Div>
  )
}

export default Banner