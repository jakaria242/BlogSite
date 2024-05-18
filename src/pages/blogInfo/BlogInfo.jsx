import React, { useContext, useEffect, useState } from 'react'
import Div from '../../utilities/Div'
import { useParams } from 'react-router';
import myContext from '../../context/myContext';
import { Timestamp, addDoc, collection, doc, getDoc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { fireDb } from '../../config/FirebaseConfig'; 
import Loder from '../loder/Loder';
import Comment from '../../components/comment/Comment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


const BlogInfo = () => {

  const navigate = useNavigate();
  const context = useContext(myContext)
  const {loading, setloading} = context;
   const params = useParams();
  const [getBlogs, setGetBlogs] = useState()
 

  const getAllBlogs = async () => {
    setloading(true);
    try {
      const productTemp = await getDoc(doc(fireDb, "blogPost", params.id))
      if (productTemp.exists()) {
        setGetBlogs(productTemp.data());
      } else {
        console.log("Document does not exist")
      }
      setloading(false)
    } catch (error) {
      console.log(error)
      setloading(false)
    }
  }

  useEffect(() => {
    getAllBlogs();
    window.scrollTo(0, 0)
  }, []);

  function createMarkup(c) {
    return { __html: c };
  }


  //  comment funtion 
  const [fullName, setFullName] = useState('');
  const [commentText, setCommentText] = useState('');
  

  const addComment = async () => {
    const userRef = collection(fireDb, "blogPost/" + `${params.id}/` + "comment")
    try {
      await addDoc(
        userRef, {
        fullName,
        commentText,
        time: Timestamp.now(),
        date: new Date().toLocaleString(
          "en-US",
          {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }
        )
      })
      toast.success('Comment Add Successfully', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        // transition: Bounce,
        })
      setFullName("")
      setCommentText("")
    } catch (error) {
      console.log(error)
    }
  }

  // Get All Comment Function
  const [allComment, setAllComment] = useState([]);
  

  const getcomment = async () => {
    try {
      const q = query(
        collection(fireDb, "blogPost/" + `${params.id}/` + "comment/"),
        orderBy('time')
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productsArray = [];
        QuerySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setAllComment(productsArray)
        console.log(productsArray)
      });
      return () => data;
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    getcomment()
  }, []);

  return (
    <>
    <section className="rounded-lg h-full overflow-hidden max-w-4xl mx-auto px-4 ">
        <Div className=" py-4 lg:py-8">
         {
          loading ?
          <Loder/>
          :
          <Div >
          {/* Thumbnail  */}
          <img alt="content" className="mb-3 rounded-lg h-full w-full" 
          src={getBlogs?.thumbnail} 
          />
          {/* title And date  */}
          <Div className="flex justify-between items-center mb-3">
          <h1  
            className=' text-xl md:text-2xl lg:text-2xl font-semibold text-black'>
              {getBlogs?.blogs?.title}
          </h1>
          <p className=' text-xs  font-normal text-black'>
            {getBlogs?.date}
            </p>
          </Div>
          <Div 
         className={`border-b mb-5 'border-gray-400`}
          />

          {/* blog Content  */}
          <Div className="content">
            <div
            className={
                 `[&>h1]:text-[32px] [&>h1]:font-bold  [&>h1]:mb-2.5 [&>h1]:text-black
                  [&>h2]:text-[24px] [&>h2]:font-bold  [&>h2]:mb-2.5 [&>h2]:text-black
                  [&>h3]:text-[18.72px] [&>h3]:font-bold  [&>h3]:mb-2.5 [&>h3]:text-black
                  [&>h4]:text-[16px] [&>h4]:font-bold  [&>h4]:mb-2.5 [&>h4]:text-black
                  [&>h5]:text-[13.28px] [&>h5]:font-bold  [&>h5]:mb-2.5 [&>h5]:text-black
                  [&>h6]:text-[10px] [&>h6]:font-bold  [&>h6]:mb-2.5 [&>h6]:text-black
                  [&>p]:text-[16px] [&>p]:font-bold  [&>p]:mb-1.5 [&>p]:text-black
                  [&>ul]:list-disc  [&>ul]:mb-2 [&>ul]:text-black
                  [&>ol]:list-decimal  [&>ol]:mb-10 [&>ol]:text-black
                  [&>li]:list-decimal  [&>li]:mb-2 [&>li]:text-black
                  [&>img]:rounded-lg
                 `
          } 
              dangerouslySetInnerHTML={createMarkup(getBlogs?.blogs?.content)}>
          </div>
        </Div>
      </Div>
     }
        </Div>
        <Comment
           addComment={addComment}
           commentText={commentText}
           setcommentText={setCommentText}
           allComment={allComment}
           fullName={fullName}
           setFullName={setFullName}
        />
      </section>
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

export default BlogInfo