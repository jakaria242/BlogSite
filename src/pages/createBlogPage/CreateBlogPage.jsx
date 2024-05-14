import { Typography } from '@mui/material';
import { Editor } from '@tinymce/tinymce-react';
import React, { useState, useRef } from 'react';
import { BsFillArrowLeftCircleFill } from "react-icons/bs"
import { Link } from "react-router-dom";
import Button from '../../utilities/Button';
import Heading from '../../utilities/Heading';
import Div from '../../utilities/Div';

const CreateBlogPage = () => {

    const [blogs, setBlogs] = useState('');
    const [thumbnail, setthumbnail] = useState();
    const [text, settext] = useState('');
    console.log("Value: ",);
    console.log("text: ", text);
    console.log(blogs);

     // Create markup function ===  html to text convert ===
     function createMarkup(c) {
        return { __html: c };
    }

  return (
    <div className=' container mx-auto max-w-5xl py-6'>
    <div className="p-5" style={{
        background: 'rgb(226, 232, 240)',
        borderBottom: ' 4px solid rgb(30, 41, 59)'
    }}>

        {/* Top Item  */}
        <Div className="mb-2 flex justify-between">
            <Div className="flex gap-2 items-center">

                {/* Dashboard Link  */}
                <Link to={'/dashboard'}>
                    <BsFillArrowLeftCircleFill size={25} />
                </Link>

                {/* Text  */}
                <Heading level="4" className="text-black font-bold text-[30px]" >Create Blog</Heading>

            </Div>
        </Div>

        {/* main Content  */}
        <Div className="mb-3">

            {/* Thumbnail  */}
            {thumbnail && <img className=" w-full h-screen rounded-md mb-3 "
                src={thumbnail
                    ? URL.createObjectURL(thumbnail)
                    : ""}
                alt="thumbnail"
            />}
            
            {/* Text  */}
            <Heading level="4" className="text-[black] mb-2 font-semibold text-sm" >Upload Thumble</Heading>

            {/* First Thumbnail Input  */}
            <input
                type="file"
                label="Upload thumbnail"
                className="shadow-[inset_0_0_4px_rgba(0,0,0,0.6)]  placeholder-black w-full rounded-md p-1 bg-[rgb(226,232,240)] "
                onChange={(e) => setthumbnail(e.target.files[0])}
            />
        </Div>

        {/* Second Title Input */}
        <Div className="mb-3">
            <input
                label="Enter your Title"
               className='shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] w-full rounded-md p-1.5 placeholder-black outline-none bg-[rgb(226,232,240)]'
                placeholder="Enter Your Title"
                name="title"
            />
        </Div>

        {/* Third Category Input  */}
        <Div className="mb-3">
            <input
                label="Enter your Category"
                className='shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] w-full rounded-md p-1.5 placeholder-black outline-none bg-[rgb(226,232,240)]'
                placeholder="Enter Your Category"
                name="category"
            />
        </Div>

        {/* Four Editor  */}
        <Editor
      apiKey='q8h9r4b6jwe51qgwdilccgt7f2kdvexgzg5dty4vmbmlqo1q'
      onEditorChange={(newValue, editor) => {
        setBlogs({ blogs, content: newValue });
        settext(editor.getContent({ format: 'text' }));
    }}
    onInit={(evt, editor) => {
        settext(editor.getContent({ format: 'text' }));
    }}
      init={{
        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name',
        // mergetags_list: [
        //   { value: 'First.Name', title: 'First Name' },
        //   { value: 'Email', title: 'Email' },
        // ],
        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
      }}
      initialValue=""
    />
        {/* Five Submit Button  */}
        <Button className=" w-full mt-5 bg-[rgb(30,41,59)] text-[rgb(226,232,240)] py-3 rounded-2xl	" text="Send"/>
        
        {/* Six Preview Section  */}
          <Div>
            <h1 className=" text-center mb-3 text-2xl">Preview</h1>
            <div className="content">
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
                 dangerouslySetInnerHTML={createMarkup(blogs.content)}>
            </div>
         </div>

          </Div>
    </div >
</div >
  )
}

export default CreateBlogPage