import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../utilities/Button'
// import tec3 from '../../assets/images/tec3.jpg'
import Image from '../../utilities/Image'
import Div from '../../utilities/Div'
import Heading from '../../utilities/Heading'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux'
import { loginuser } from '../../slices/userSlice'
import myContext from '../../context/myContext'

const Dashboard = () => {
    
    const context = useContext(myContext)
    const { getAllBlog } = context;
    // console.log(getAllBlog);

    const dispatch = useDispatch();
    const auth = getAuth();
    const user = auth.currentUser
    const navigate = useNavigate();
    const data = useSelector((state) => state.loginuserdata.value)
    

    let handleLogout = () => {
       signOut(auth).then(()=>{
        localStorage.removeItem("users")
        dispatch(loginuser(null))
        toast.success('Logout sucessful', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            // transition: Bounce,
            });
            setTimeout(()=>{
                navigate("/login")
            },1000)
       })
    }
 
    useEffect(()=>{
      if(!data){
         navigate("/login")
      }
    },[])
  

  
  return (
    <>
    <Div className="py-10">
                <Div className="flex flex-wrap justify-start items-center lg:justify-center gap-2 lg:gap-10 px-4 lg:px-0 mb-8">
                    <Div className="left">
                      <Image  className=" w-40 h-40  object-cover rounded-full border-2 border-pink-600 p-1" source={data && data.photoURL} alt="profile"/>
                      {/* <Image  className=" w-40 h-40  object-cover rounded-full border-2 border-pink-600 p-1" source={user && user.
                         photoURL} alt="profile"/> */}
                    </Div>
                    <Div className="right">
                        <Heading level="2" className='font-bold text-2xl mb-2 text-[black] capitalize'>{data && data.displayName}</Heading>
                        {/* <Heading level="2" className='font-bold text-2xl mb-2 text-[black] capitalize'>{user && user.displayName}</Heading> */}
                        <Heading level="3" className="font-semibold text-[black] capitalize">Frontend Developer</Heading>
                        <Heading level="3" className="font-semibold text-[black] lowercase">{data && data.email}</Heading>
                        {/* <Heading level="3" className="font-semibold text-[black] lowercase">{user && user.email}</Heading> */}
                        <Heading level="3"  className="font-semibold text-[black]"><span>Total Blog : </span>  15  </Heading>
                        <Div className=" flex gap-2 mt-2">
                            <Link to={'/createblogpost'}>
                                <Div className=" mb-2 ">
                                    <Button className='px-8 py-2 rounded-2xl bg-[rgb(30,41,59)] text-white' text="Create Blog"/>
                                </Div>
                            </Link>
                            <Div className="mb-2">
                            <Button onClick={handleLogout} className='px-8 py-2 rounded-2xl bg-[rgb(30,41,59)] text-white' text="Logout"/>
                            </Div>
                        </Div>
                    </Div>
                </Div>
                {/* Line  */}
                <hr className="border-2 border-gray-400"/>
                {/* Table  */}
                <Div className="">
                    <Div className=' container mx-auto px-4 max-w-7xl my-5' >
                        <Div className="relative overflow-x-auto shadow-md sm:rounded-xl">

                            {/* table  */}
                            <table className="w-full border-2 border-white shadow-md text-sm text-left text-gray-500 dark:text-gray-400" >

                                {/* thead  */}
                                <thead className="text-xs bg-[rgb(30,41,59)]">
                                    <tr>
                                        <th  scope="col" className="px-6 py-3 text-white">S.No
                                        </th>
                                        <th  scope="col" className="px-6 py-3 text-white">Thumbnall
                                        </th>
                                        <th  scope="col" className="px-6 py-3 text-white">Title
                                        </th>
                                        <th  scope="col" className="px-6 py-3 text-white">Catagory
                                        </th>
                                        <th  scope="col" className="px-6 py-3 text-white">Date
                                        </th>
                                        <th  scope="col" className="px-6 py-3 text-white">Action
                                        </th>
                                    </tr>
                                </thead>
                                {/* tbody  */}
                                {
                                        getAllBlog.length > 0 
                                        ?
                                        <>
                                        {
                                            getAllBlog.map((item, index)=>{
                                                const {thumbnail, date} = item;
                                                // console.log(item);
                                                return(
                                                    <tbody key={index}>
                                                    <tr className=" border-b-2 bg-[#fff]">
                
                                                        {/* S.No   */}
                                                        <td  className="px-6 py-4 text-[black]">
                                                            {index + 1}.
                                                        </td>
                
                                                        {/* Blog Thumbnail  */}                                    
                                                        <th scope="row" className="px-6 py-4 font-medium text-[black]">
                                                            {/* thumbnail  */}
                                                            <Image className="w-16 rounded-lg" source={thumbnail} alt="thumbnail"/>
                                                        </th>
                
                                                        {/* Blog Title  */}
                                                        <td className="px-6 py-4 text-[black] font-bold">
                                                            {item.blogs.title}
                                                        </td>
                
                                                        {/* Blog Category  */}
                                                        <td className="px-6 py-4 text-[black] font-medium">
                                                            {item.blogs.category}
                                                        </td>
                
                                                        {/* Blog Date  */}
                                                        <td className="px-6 py-4 text-[black] font-normal">
                                                            {date}
                                                        </td>
                
                                                        {/* Delete Blog  */}
                                                        <td className="px-6 py-4 text-[black]">
                                                          <Button className="px-4 py-1 rounded-lg text-white font-bold bg-red-500" text="Delet"/>
                                                        </td>
                
                                                    </tr>
                                                </tbody>
                                                )
                                            })
                                        }
                                        </>
                                        :
                                        <h2>Not Found</h2>
                                }

                            </table>
                        </Div>
                    </Div>
                </Div>
            </Div>
            <ToastContainer
               position="top-right"
               autoClose={5000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
               theme="dark"

            />
    </>
  )
}

export default Dashboard