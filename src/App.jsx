import React from "react"
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import BlogInfo from "./pages/blogInfo/BlogInfo";
import Contract from "./pages/contract/Contract";
import Dashboard from "./pages/dashboard/Dashboard";
import ErrorPage from "./pages/errorPage/ErrorPage";
import Registration from "./pages/registration/Registration";
import Login from "./pages/login/Login";
import AllBlogs from "./pages/allBlogs/AllBlogs";
import CreateBlogPage from "./pages/createBlogPage/CreateBlogPage";
import MyState from "./context/MyState";



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
       <Route>
        <Route element={<RootLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/allblogs" element={<AllBlogs/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/bloginfo/:id" element={<BlogInfo/>}/>
        <Route path="/contract" element={<Contract/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/createblogpost" element={<CreateBlogPage/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/login" element={<Login/>}/>
      </Route>
        <Route path="*" element={<ErrorPage/>}/>
       </Route>
    )
  );


  return (
    <>
    <MyState>

      <RouterProvider router={router} />
    </MyState>
    </>
  )
}

export default App
