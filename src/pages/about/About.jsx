import React, { useState } from 'react'
import Div from '../../utilities/Div'
import { TypeAnimation } from 'react-type-animation';
import Image from '../../utilities/Image';

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
     </>
  )
}

export default About