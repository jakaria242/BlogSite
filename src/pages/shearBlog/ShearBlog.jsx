import React, { useEffect } from 'react'
import Dialog from '@mui/material/Dialog';
import { FiShare2 } from "react-icons/fi";
import Div from '../../utilities/Div';
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { Link } from 'react-router-dom';






const ShearBlog = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    useEffect(() => {
      window.scrollTo(0, 0)
}, [])
  return (
    <React.Fragment >
        <FiShare2 onClick={handleClickOpen} className='text-2xl text-white cursor-pointer hover:text-[yellow] transition-all'/>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
       <Div className="p-6 flex gap-[20px] bg-[#2C3A47]">
        <Link to="#"><FaLinkedin className='text-[30px] transition-all	duration-500 text-white hover:text-[#68cdf5]'/></Link>
        <Link to="#"><FaSquareInstagram  className='text-[30px] transition-all	duration-500 text-white hover:text-[red]'/></Link>
        <Link to="#"><FaGithub  className='text-[30px] transition-all duration-500 text-white hover:text-[#68cdf5]'/></Link>
        <Link to="#"><ImFacebook2  className='text-[30px] transition-all duration-500 text-white hover:text-[#68cdf5]'/></Link>
       </Div>

      </Dialog>
    </React.Fragment>
  )
}

export default ShearBlog