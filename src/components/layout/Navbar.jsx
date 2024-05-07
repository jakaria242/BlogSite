import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Image from '../../utilities/Image';
import mega1 from '../../assets/images/mega1.jpg'
import category1 from '../../assets/images/catrgory1.jpg'
import category2 from '../../assets/images/catrgory2.jpg'
import category3 from '../../assets/images/catrgory3.jpg'
import category4 from '../../assets/images/catrgory4.jpg'
import Div from '../../utilities/Div';
import Ul from '../../utilities/Ul';
import List from '../../utilities/List';

const Navbar = () => {
  return (
    <nav className='w-full	py-4 bg-[#0d0d29]'>
      <Div className="container mx-[auto] grid grid-cols-3	items-center">

        <Div className="text-5xl italic	font-extrabold	text-white"> <Link to="/">MyBlog </Link></Div>
         <Div>
            <Ul className="flex items-center justify-center gap-[50px] text-1xl	font-normal	text-medium font-roboto text-white capitalize">
        {/*=================== Mega menu star ===================*/}
                  
              <li className='group'>
                <NavLink to="/" className="relative after:absolute after:content-[''] after:w-0 after:h-1  after:bottom-[-5px] after:left-0 hover:after:w-full after:transition-all after:duration-300 after:bg-indigo-300 duration-300 hover:text-[orange]">home</NavLink>


                <Div className='absolute z-10	bg-[rgba(255,255,255,0.83)]  max-w-[1170px] w-[100%] py-[20px] px-[30px] transition-all duration-500 mt-[40px] ease-in-out	group-hover:mt-[5px] opacity-0 invisible group-hover:visible group-hover:opacity-100 left-[50%]	translate-x-leftMiddle flex flex-wrap	 justify-between flex-flexGap'>
                    <Div>
                      <h4 className='text-[16px] text-[#ea4636] font-medium pb-[7px]'>Home Page 1</h4>
                      <Ul className='flex flex-col gap-[5px] text-[#000000] font-normal '>
                        <List style=" text-[black] opacity-70 hover:opacity-100 hover:text-[red] transition-all duration-500" to="/" text="Page 1"/>
                        <List style=" text-[black] opacity-70 hover:opacity-100 hover:text-[red] transition-all duration-500" to="/" text="Page 2"/>
                        <List style=" text-[black] opacity-70 hover:opacity-100 hover:text-[red] transition-all duration-500" to="/" text="Page 3"/>
                        <List style=" text-[black] opacity-70 hover:opacity-100 hover:text-[red] transition-all duration-500" to="/" text="Page 4"/>
                        <List style=" text-[black] opacity-70 hover:opacity-100 hover:text-[red] transition-all duration-500" to="/" text="Page 5"/>
                        <List style=" text-[black] opacity-70 hover:opacity-100 hover:text-[red] transition-all duration-500" to="/" text="Page 6"/>
                        <List style=" text-[black] opacity-70 hover:opacity-100 hover:text-[red] transition-all duration-500" to="/" text="Page 7"/>
                      </Ul>
                      <h4 className='text-[16px] text-[#ea4636] font-medium py-[7px]'>Home Page </h4>
                      <Ul className='flex flex-col gap-[5px] text-[black] font-normal'>
                      <List style=" text-[black] opacity-70 hover:opacity-100 hover:text-[red] transition-all duration-500" to="/" text="Page 8"/>
                        <List style=" text-[black] opacity-70 hover:opacity-100 hover:text-[red] transition-all duration-500" to="/" text="Page 9"/>
                        <List style=" text-[black] opacity-70 hover:opacity-100 hover:text-[red] transition-all duration-500" to="/" text="Page 10"/>
                      </Ul>
                    </Div>
                    <Div>
                    <h4 className='text-[16px] text-[#ea4636] font-medium pb-[7px]'>Home Page 2</h4>
                      <Ul className='flex flex-col gap-[5px] text-[black] font-normal'>
                      <List style=" text-[black] opacity-70 hover:opacity-100 hover:text-[red] transition-all duration-500" to="/" text="Page 1"/>
                        <List style=" text-[black] opacity-70 hover:opacity-100 hover:text-[red] transition-all duration-500" to="/" text="Page 2"/>
                        <List style=" text-[black] opacity-70 hover:opacity-100 hover:text-[red] transition-all duration-500" to="/" text="Page 3"/>
                        <List style=" text-[black] opacity-70 hover:opacity-100 hover:text-[red] transition-all duration-500" to="/" text="Page 4"/>
                      </Ul>
                      <h4 className='text-[16px] text-[#ea4636] font-medium py-[7px]'>Home Page </h4>
                      <Ul className='flex flex-col gap-[5px] text-[black] font-normal'>
                      <List style=" text-[black] opacity-70 hover:opacity-100 hover:text-[red] transition-all duration-500" to="#" text="Page 5"/>
                        <List style=" text-[black] opacity-70 hover:opacity-100 hover:text-[red] transition-all duration-500" to="#" text="Page 6"/>
                        <List style=" text-[black] opacity-70 hover:opacity-100 hover:text-[red] transition-all duration-500" to="#" text="Page 7"/>
                        <List style=" text-[black] opacity-70 hover:opacity-100 hover:text-[red] transition-all duration-500" to="#" text="Page 8"/>
                        <List style=" text-[black] opacity-70 hover:opacity-100 hover:text-[red] transition-all duration-500" to="#" text="Page 9"/>
                        <List style=" text-[black] opacity-70 hover:opacity-100 hover:text-[red] transition-all duration-500" to="#" text="Page 10"/>
                      </Ul>
                    </Div>
                    <Div>
                    <h4 className='text-[16px] text-[#ea4636] font-medium '>Home Page 3</h4>
                      <Ul className='flex flex-col gap-[6px] text-[black] font-normal'>
                      <List style=" text-[black] opacity-70 hover:opacity-100 hover:text-[red] transition-all duration-500" to="/" text="Page 1"/>
                        <List style=" text-[black] opacity-70 hover:opacity-100 hover:text-[red] transition-all duration-500" to="/" text="Page 2"/>
                        <List style=" text-[black] opacity-70 hover:opacity-100 hover:text-[red] transition-all duration-500" to="/" text="Page 3"/>
                        <List style=" text-[black] opacity-70 hover:opacity-100 hover:text-[red] transition-all duration-500" to="/" text="Page 4"/>
                        <List style=" text-[black] opacity-70 hover:opacity-100 hover:text-[red] transition-all duration-500" to="/" text="Page 5"/>
                        <List style=" text-[black] opacity-70 hover:opacity-100 hover:text-[red] transition-all duration-500" to="/" text="Page 6"/>
                        <List style=" text-[black] opacity-70 hover:opacity-100 hover:text-[red] transition-all duration-500" to="/" text="Page 7"/>
                        <List style=" text-[black] opacity-70 hover:opacity-100 hover:text-[red] transition-all duration-500" to="/" text="Page 8"/>
                        <List style=" text-[black] opacity-70 hover:opacity-100 hover:text-[red] transition-all duration-500" to="/" text="Page 9"/>
                        <List style=" text-[black] opacity-70 hover:opacity-100 hover:text-[red] transition-all duration-500" to="/" text="Page 10"/>
                      </Ul>
                    </Div>
                    <Div className='align-middle	flex items-center justify-center'>
                    <Div className='w-[250px] h-[300px] align-middle relative'>
                    <Image className="h-[100%] w-[100%] object-cover" source={mega1} alt="not found"/>
                    <Div  className="w-[100%] h-[100%] bg-[rgba(14,13,13,0.5)] top-0 left-0 absolute text-center">
                    <Link to="/"><h3 className='font-normal text-[16px] text-[#fff]  mt-[50%] duration-300 cursor-pointer hover:font-bold hover:text-[red]'>Jakaria</h3></Link>
                    </Div>
                    </Div>
                    </Div>
                </Div>
              </li>

        {/*=================== Mega menu end ===================*/}

              <li><NavLink to="/about" className="relative after:absolute after:content-[''] after:w-0 after:h-1  after:bottom-[-5px] after:left-0 hover:after:w-full after:transition-all after:duration-300 after:bg-indigo-300 duration-300 hover:text-[orange]">about</NavLink>
              </li>

        {/*=================== Mega menu star ===================*/}

           <li className='group'>
            <NavLink to="/category" className="relative after:absolute after:content-[''] after:w-0 after:h-1  after:bottom-[-5px] after:left-0 hover:after:w-full after:transition-all after:duration-300 after:bg-indigo-300 duration-300 hover:text-[orange]">category</NavLink>

            
          <Div className='absolute z-10	bg-gray-950/90 max-w-[1170px] w-[100%] pt-[30px] py-[30px] px-[20px] transition-all duration-500 mt-[40px] ease-in-out	group-hover:mt-[5px] opacity-0 invisible group-hover:visible group-hover:opacity-100 left-[50%]	translate-x-leftMiddle flex justify-around  gap-[20px]'>

                <Div className="text-center">
                    <Link to="/">                    
                    <Div className='w-[250px] h-[270px] text-center relative'>
                       <Image className="h-[100%] w-[100%] object-cover" source={category1} alt="not found"/>
                       <Div className="w-[100%] h-[100%] bg-[rgba(14,13,13,0.5)] top-0 left-0 absolute">

                       </Div>
                   </Div>
                    <h3 className='text-medium text-[16px] text-[red]  mt-[15px]'>News</h3></Link>
                </Div>
                   <Div className="text-center">
                      <Link to="/">
                      <Div className='w-[250px] h-[270px] text-center relative'>
                         <Image className="h-[100%] w-[100%] object-cover" source={category2} alt="not found"/>
                         <Div className="w-[100%] h-[100%] bg-[rgba(14,13,13,0.5)] top-0 left-0 absolute">

                         </Div>
                       </Div>
                       <h3 className='text-medium text-[16px] text-[red]  mt-[15px]'>Blog</h3>
                      </Link>
                   </Div>
                   <Div className="text-center">
                      <Link to= "/">
                      <Div className='w-[250px] h-[270px] text-center relative'>
                        <Image className="h-[100%] w-[100%] object-cover" source={category3} alt="not found"/>
                        <Div className="w-[100%] h-[100%] bg-[rgba(14,13,13,0.5)] top-0 left-0 absolute"></Div>
                      </Div>
                        <h3 className='text-medium text-[16px] text-[red]  mt-[15px]'>News</h3>
                      </Link>
                   </Div>
                   <Div className="text-center">
                      <Link to= "/">
                      <Div className='w-[250px] h-[270px] text-center relative'>
                         <Image className="h-[100%] w-[100%] object-cover" source={category4} alt="not found"/>
                         <Div className="w-[100%] h-[100%] bg-[rgba(14,13,13,0.5)] top-0 left-0 absolute ">
                         <h3 className='font-normal	 text-[16px] text-[red] mt-[50%] ransition-all duration-300 cursor-pointer hover:font-bold '>Jakaria</h3>
                         </Div>
                     </Div>
                         <h3 className='text-medium text-[16px] text-[red]  mt-[15px]'>Blog</h3>
                      </Link>
                   </Div>
      </Div>
          </li>

        {/*=================== Mega menu end ===================*/}

        {/*=================== Dropdown menu star ===================*/}

              <li className='group'>
                <NavLink to="/blog" className="relative after:absolute after:content-[''] after:w-0 after:h-1  after:bottom-[-5px] after:left-0 hover:after:w-full after:transition-all after:duration-300 after:bg-indigo-300 duration-300 hover:text-[orange] ">blog</NavLink>
               
              <Div className='absolute z-10	bg-[rgba(255,255,255,0.83)] min-w-[280px] max-w-[350px] py-[20px] px-[30px] transition-all duration-500 mt-[40px] ease-in-out	group-hover:mt-[5px] opacity-0 invisible group-hover:visible group-hover:opacity-100'>
                <Ul>
                  <List to="/" style="text-[#555555] inline-block text-[15px] duration-300 hover:text-[red] font-medium text" text="Standard Layout"/>
                  <List to="/" style="text-[#555555] inline-block	pt-[10px] text-[15px] duration-300 hover:text-[red] font-medium text" text="Grid Layout"/>
                  <List to="/" style="text-[#555555] inline-block	pt-[10px] text-[15px] hover:transition-all  hover:duration-900 hover:text-[red] font-medium  relative after:absolute after:content-[' ] after:w-0 after:h-[2px]  after:bottom-[-5px] after:left-0 hover:after:w-full after:transition-all after:duration-300 after:bg-[red] duration-300" text="Single Post Layout"/>
                </Ul>
              </Div>
              </li>
        {/*=================== Dropdown menu end===================*/}

        {/*=================== Dropdown menu star===================*/}

          <li className='group'>
            <NavLink to="/contract" className="relative after:absolute after:content-[''] after:w-0 after:h-1  after:bottom-[-5px] after:left-0 hover:after:w-full after:transition-all after:duration-300 after:bg-indigo-300 duration-300 hover:text-[orange]">contract</NavLink>

              <Div className='absolute z-10	bg-[rgba(255,255,255,0.83)] min-w-[250px] max-w-[350px] py-[20px] px-[30px] transition-all duration-500 mt-[40px] ease-in-out	group-hover:mt-[5px] opacity-0 invisible group-hover:visible group-hover:opacity-100 left-[65%]	translate-x-leftMiddle'>
                <Ul className='text-center	'>
                  <List to="/" style="text-[#555555] inline-block text-[15px] hover:transition-all  hover:duration-900 hover:text-[red] font-medium  relative after:absolute after:content-[' ] after:w-0 after:h-[2px]  after:bottom-[-2px] after:left-0 hover:after:w-full after:transition-all after:duration-300 after:bg-[red] duration-300" text="Login"/>
                  <List to="/" style="text-[#555555] inline-block	pt-[10px] text-[15px] hover:transition-all  hover:duration-900 hover:text-[red] font-medium" text="Register"/>
                  <List to="/" style="text-[#555555] inline-block	pt-[10px] text-[15px] hover:transition-all  hover:duration-900 hover:text-[red] font-medium" text="404 Page"/>
                </Ul>
              </Div>
          </li>
       {/*==================== Dropdown menu end =================*/}
      
          </Ul>
        </Div>
        <Div className="flex items-center justify-end gap-[30px]">
            <IoSearch  className='text-2xl text-white cursor-pointer hover:text-[yellow] transition-all'/>
            <FaUserCircle className='text-2xl	 text-white cursor-pointer hover:text-[yellow] transition-all'/>
        </Div>
      </Div>
    </nav>
  )
}

export default Navbar