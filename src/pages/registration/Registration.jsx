import React from 'react'
import { Link } from 'react-router-dom'
import Div from '../../utilities/Div'
import Input from '../../utilities/Input'
import Button from '../../utilities/Button'
import Heading from '../../utilities/Heading'
import { useFormik } from 'formik';
import { validationSchema } from '../../fromValidation/RegisValidation'
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile  } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Registration = () => {

  const auth = getAuth();
  const navigate = useNavigate();

  const initialValues = {
    fullName: '',
    email: '',
    password: '',
    conPass: '',
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema : validationSchema,
    onSubmit: (values, action) => {
      createUserWithEmailAndPassword(auth, values.email, values.password)
     .then((userCredential) => {
       sendEmailVerification(auth.currentUser).then(() => {
        //  navigate("/login")
        updateProfile(auth.currentUser, {
          displayName: values.fullName ,
          email:  values.email,
           photoURL: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
        })
     });
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode == "auth/email-already-in-use") {
        toast.error('email alredy existed', {
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
      // ..
     });
     action.resetForm()
   },
  });



  return (

    <>
       <Div className="w-[400px] mx-auto flex items-center justify-center flex-col mt-[20px]  py-4 px-6  bg-[teal] rounded-lg	gap-5">
            <Heading level="6" className="font-bold text-3xl text-white font-roboto">
              Registration
            </Heading>
            <form className='w-full flex flex-col gap-5 ' onSubmit={formik.handleSubmit}>
               <Div>
               <Input className="w-full outline-none	p-3 rounded-lg" name="fullName" type="text" placeholder="Enter Your Full Name" onChange={formik.handleChange} value={formik.values.fullName}/>
               {formik.touched.fullName && formik.errors.fullName ? (
                  <p className='text-[white] text-base font-normal font-roboto'>{formik.errors.fullName}</p>
                ) : null}
               </Div>
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
                <Div>
                <Input className="w-full outline-none	p-3 rounded-lg" name="conPass"  type="password" placeholder="Confram password" onChange={formik.handleChange} value={formik.values.conPass}/>
                {formik.touched.conPass && formik.errors.conPass ? (
                  <p className='text-[white] text-base font-normal font-roboto'>{formik.errors.conPass}</p>
                ) : null}
                </Div>
              <Button className="w-full bg-[#72ff56]	text-[black] mt-[15px] text-xl p-4 rounded-xl font-bold font-roboto outline-none	" text="Submit" type="submit"/>
            </form>
            <span className='font-roboto text-lg font-normal text-white'>Already have an account? <Link className='text-[#272926] font-medium' to="/login"> Login</Link></span>
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
          //  transition: Bounce,
        />
    </>
  )
}

export default Registration
