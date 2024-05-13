import React from 'react'
import Div from '../../utilities/Div'
import Heading from '../../utilities/Heading'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <Div className="h-screen flex items-center justify-center flex-col gap-[20px]">
       <Div className="flex items-center justify-center gap-[10px]">
       <Heading level="2" className="text-[100px] font-black ">4</Heading>
         <Heading level="2" className="text-[100px] font-black text-[red] animate-bounce	">0</Heading>
         <Heading level="2" className="text-[100px] font-black ">4</Heading>
       </Div>
       <Link to="/" className="text-[red]">Go To Home</Link>
    </Div>
  )
}

export default ErrorPage