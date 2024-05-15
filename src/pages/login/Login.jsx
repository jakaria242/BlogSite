import React, { useState } from 'react'
import { useFormik } from 'formik';
import { Link } from 'react-router-dom'
import Div from '../../utilities/Div'
import Input from '../../utilities/Input'
import Button from '../../utilities/Button'
import Heading from '../../utilities/Heading'
import Box from '@mui/material/Box';
import { IoCloseSharp } from "react-icons/io5";
import { validationSchema } from '../../fromValidation/loginValidation';
import { Alert, Modal } from '@mui/material';
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const Login = () => {

  const auth = getAuth();
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let handleModalClose = () => {
    setOpen(false)
  }
    const initialValues = {
        email: '',
        password: '',
      }
    
      const formik = useFormik({
        initialValues: initialValues,
        validationSchema : validationSchema,
        onSubmit: (values, action) => {
          signInWithEmailAndPassword(auth, values.email, values.password)
          .then((userCredential) => {
            if (userCredential.user.emailVerified) {
              // localStorage.setItem("user", JSON.stringify(userCredential.user))

              navigate("/dashboard")
            }else{
              signOut(auth)
              toast.error('Please verify your email', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                // transition: Bounce,
                });
            }
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode == "auth/invalid-credential"){
              toast.error('Invalid email address or password', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                // transition: Bounce,
                });
            }
          });
           action.resetForm()
        },
      });



      //  forgot validation

      let emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      let [forgetData, setForgetData] = useState({
        forgetemail:"",
      })

      let [forgetError, setForgetError] = useState({
        forgetemail:"",
      })

     let handleForget = (e) => {
       let {name,value} = e.target
       setForgetData({
         ...forgetData, [name]:value
      })
     }

     let handleSend = ()=> {
       if (!forgetData.forgetemail){
      setForgetError({forgetemail : "Enter your email"});
    }else if(!forgetData.forgetemail.match(emailregex)){
      setForgetError({forgetemail: "Invalid email address"});
    }else{
      setForgetError({ forgetemail: "",})
      setForgetData({ forgetemail: "",})
      console.log(forgetData)
    }
    
     }
    
    
    
      return (
      <>
           <Div className="w-[400px] mx-auto flex items-center justify-center flex-col mt-[20px]  py-4 px-6  bg-[teal] rounded-lg	gap-5">
                <Heading level="6" className="font-bold text-3xl text-white font-roboto">
                  Admin Login
                </Heading>
                <form className='w-full flex flex-col gap-5 ' onSubmit={formik.handleSubmit}>
                    <Div>
                    <Input className="w-full outline-none	p-3 rounded-lg" name="email"    type="email" placeholder="Enter Your email" onChange={formik.handleChange} value={formik.values.email}/>
                    {formik.touched.email && formik.errors.email ? (
                      <p className='text-[white] text-base font-normal font-roboto'>{formik.errors.email}</p>
                    ) : null}
                    </Div>
                     <Div>
                     <Input className="w-full outline-none	p-3 rounded-lg" name="password"  type="password" placeholder="Enter Your password" onChange={formik.handleChange} value={formik.values.password}/>
                     {formik.touched.password && formik.errors.password ? (
                      <p className='text-[white] text-base font-normal font-roboto'>{formik.errors.password}</p>
                    ) : null}
                     </Div>
                  <Button className="w-full bg-[#72ff56]	text-[black] mt-[15px] text-xl p-4 rounded-xl font-bold font-roboto outline-none" text="Login" type="submit"/>
                </form>
                <span className='font-roboto text-lg font-normal text-white'>Create a new account? <Link className='text-[#272926] font-medium' to="/registration"> Registration</Link></span>
                <h4 onClick={handleOpen} className='font-roboto text-lg font-normal text-white '>Reset your password? <span className='text-[#272926] font-medium cursor-pointer'> Click Here</span></h4>
           </Div>
           <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="closeicon" onClick={handleModalClose}>
          <IoCloseSharp className='absolute text-[25px] cursor-pointer right-[8px] top-[11px]'/>
          </div>
            <div className="flex flex-col gap-[30px]">
              <h2 className='font-roboto font-bold capitalize text-2xl'>Forgotten password?</h2>
                  <Input onChange={handleForget} type='email' name='forgetemail' placeholder='Enter your email' value={forgetData.forgetemail}/>
                  {
                    forgetError.forgetemail && <Alert className='regierroe' severity="error">{forgetError.forgetemail}</Alert> 
                  }
              <Button onClick={handleSend} className="w-[100%] p-3 bg-[rgb(21,101,192)] font-medium rounded text-white" text='Send link'/>

            </div>
        </Box>
    </Modal>
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
          //  transition: Bounce,
        />

</>
    
      )
    }

export default Login