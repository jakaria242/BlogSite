import React, { useState } from 'react'
import Div from '../../utilities/Div'
import { TypeAnimation } from 'react-type-animation';
import Image from '../../utilities/Image';
import Team from './Team';

const About = () => {

  let [card, setCard] = useState(false)

  // detect card hover and leave hover
  let handleCardOver = () => {
      setCard(true)
  }
  let handleCardLeave = () => {
      setCard(false)
  }

  return (
     <>
      <Div className="h-[600px]  bg-no-repeat bg-cover bg-center group" style={{ backgroundImage: `url(https://img.freepik.com/free-photo/african-head-department-is-satisfied-with-work-staff-asian-male-student-trendy-shirt-telling-university-friends-about-his-science-report_197531-3728.jpg?t=st=1715185113~exp=1715188713~hmac=8e755a7e84166598226e851a748b8f3fdc216d7cdcfa24a837c1a000bbdd2434&w=740)` }}>
         <Div className='bg-slate-950/50 h-full text-white flex justify-center items-center flex-col'>
                <TypeAnimation
                sequence={['Here We Are', 500, 'Meet Our Team', 500, 'Know About Me', 500]}
            style={{ fontSize: '60px' }}
            className='font-medium'
             repeat={Infinity}
          />
          <h6 className="uppercase rounded-full bg-slate-900 text-white px-4 py-1 text-sm transition-all duration-500 group-hover:bg-red-600 mt-4 cursor-pointer">Read Me</h6>
          </Div>
        </Div>
        <Div className="py-[60px] container mx-auto flex gap-[20px]">
          <Div className="w-[50%]">
            <Image className="w-[100%] h-[100%]" source="https://images.pexels.com/photos/4101555/pexels-photo-4101555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
          </Div>
          <Div className="w-[50%] text-center">
          <h3 className='font-medium text-3xl'>About Me.</h3>
                <p className='text-gray-500 text-xl font-thin mt-[15px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                <p className='text-gray-500 text-xl font-thin mt-[20px]'>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
          </Div>
        </Div>
        <Div className="py-[60px] container mx-auto flex gap-[20px]">
        <Div className="w-[50%] text-center">
          <h3 className='font-medium text-3xl'>About Me.</h3>
                <p className='text-gray-500 text-xl font-thin mt-[15px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                <p className='text-gray-500 text-xl font-thin mt-[20px]'>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
          </Div>
          <Div className="w-[50%]">
            <Image className="w-[100%] h-[100%]" source="https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
          </Div>
        </Div>
             
            <Div className='bg-purple-100 container mx-auto flex flex-row py-16 font-primary gap-5 items-center justify-around'>

                <Div className='flex flex-col items-center space-y-2'>
                    <span className='text-7xl'>789</span>
                    <span className='uppercase'>perfect posts</span>
                </Div>

                <Div className='flex flex-col items-center space-y-2'>
                    <span className='text-7xl'>595</span>
                    <span className='uppercase'>perfect posts</span>
                </Div>

                <Div className='flex flex-col items-center space-y-2'>
                    <span className='text-7xl'>695</span>
                    <span className='uppercase'>perfect posts</span>
                </Div>

                <Div className='flex flex-col items-center space-y-2'>
                    <span className='text-7xl'>895</span>
                    <span className='uppercase'>perfect posts</span>
                </Div>
            </Div>

               {/* team part starts here */}
            <Div className='grid grid-cols-12 container mx-auto'>
                <Div className='col-span-12 '>
                    <h2 className='font-primary text-4xl text-center font-bold pt-10'>Our Team</h2>
                    <h6 className=' text-gray-400 font-primary text-center pb-10 pt-2 underline'>Meet With Our Nice People..</h6>
                </Div>
                <Div className='col-span-4 p-5'>
                    <Team source="https://img.freepik.com/free-photo/brunette-businesswoman-posing_23-2148142754.jpg?t=st=1715234879~exp=1715238479~hmac=f0fabcf6565d94f5f4cddbe335119fc766dd1f113fd6f64ba051779947ddeb43&w=740" memberName="Diana" title="Artist" description="tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem." />
                </Div>
                <Div className='col-span-4 p-5'>
                    <Team source="https://img.freepik.com/free-photo/portrait-corporate-woman-holding-clipboard-work-standing-formal-outfit-white-background_1258-88411.jpg?t=st=1715231552~exp=1715235152~hmac=daf3d4bd9acf7b28befbda26f5a977bdbe544d37cd79832418dcfa7eb6d8c0f0&w=740" memberName="Tisha" title="Artist" description="tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem." />
                </Div>
                <Div className='col-span-4 p-5'>
                    <Team source="https://img.freepik.com/free-photo/proud-young-executive-ready-start_1139-303.jpg?t=st=1715231639~exp=1715235239~hmac=53d4c9fbac9eaed9b485ba5da23c48bc6eafc1e62f00d2991e1493246bfe7316&w=740" memberName="Jons" title="Artist" description="tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem." />
                </Div>
            </Div>
     </>
  )
}

export default About