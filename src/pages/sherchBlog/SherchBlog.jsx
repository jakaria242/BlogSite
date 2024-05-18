import React, { useContext, useState } from 'react'
import { Box, Modal } from '@mui/material';
import { IoSearch } from "react-icons/io5";
import Input from '../../utilities/Input';
import Div from '../../utilities/Div';
import Image from '../../utilities/Image';
import { ImCross } from "react-icons/im";
import myContext from '../../context/myContext';
const style = {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#2C3A47',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius:'20px',
    p: 4,
  };

const SherchBlog = () => {
  
  
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const context = useContext(myContext)
    const {searchkey, setSearchkey, getAllBlog} = context;



    return (
        <>
           <IoSearch onClick={handleOpen}  className='text-2xl text-white cursor-pointer hover:text-[yellow] transition-all'/>
    <Modal
       open={open}
       onClose={handleClose}
       aria-labelledby="modal-modal-title"
       aria-describedby="modal-modal-description"
     >
      <Box sx={style}>
                <ImCross onClick={()=>setOpen(false)} className='absolute right-[10px] top-[10px] text-white text-xs cursor-pointer	'/>
           <Div className="flex w-full justify-center">
            <Input className="bg-[#2C3A47] text-white w-full rounded-3xl" placeholder="Search Here" type="search" name="searchkey" value={searchkey} onChange={(e) => setSearchkey(e.target.value)}/>
           </Div>
           <Div className="flex justify-center flex-wrap -mx-2  mt-4 mb-2 ">
            {
                getAllBlog.filter((obj) => obj.blogs.title.toLowerCase().includes(searchkey)).map((item, index)=>{
                         const {thumbnail, date, id} =item
                    return(
                        <Div key={index} className="p-4 flex justify-center mx-auto w-[150px] " >
                        <Div className=" container text-center mx-auto px-4 bg-gray-200 p-2 rounded-lg ">
                            {/* Blog Thumbnail  */}
                              <Image  className="w-full mb-2 rounded-lg" source={thumbnail}  alt="Not Found" />
                               {/* Blog Date  */}
                              <p className="">{date}</p>
                                     {/* Blog Title  */}
                             <h1>{item.blogs.title}</h1>
                        </Div>
                    </Div>
                    )
                })
            }
          </Div>
      </Box>
     </Modal>
        </>
    );
}

export default SherchBlog