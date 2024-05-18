import React from 'react'
import Button from '../../utilities/Button'


function Comment({ addComment, commentText, setcommentText, allComment, fullName, setFullName }) {


  return (
    <section className=" py-8 lg:py-16">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg lg:text-2xl font-bold tex-black">
            Make Comment
          </h2>
        </div>
        {/* Comment Form  */}
        <form className="mb-6">
          {/* Full Name Input  */}
          <div
            className="py-2 px-4 mb-4 rounded-lg rounded-t-lg 
            shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] border border-gray-200 bg-[rgb(226,232,240)]">
            <input
              type='text'
              placeholder='Enter Full Name'
              className="px-0 w-full text-sm border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 bg-[rgb(226,232,240)]"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          {/* Text Area  */}
          <div
            className="py-2 px-4 mb-4 rounded-lg rounded-t-lg 
          shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] border border-gray-200 bg-[rgb(226,232,240)]"
          >
            <label htmlFor="comment" className="sr-only">Your comment</label>
            <textarea id="comment" rows={6} className="px-0 w-full text-sm border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 bg-[rgb(226,232,240)]"  placeholder="Write a comment..." required defaultValue={""}   
            value={commentText}
            onChange={(e) => setcommentText(e.target.value)} />
          </div>
          {/* Button  */}
          <div >
          <Button onClick={addComment} className="bg-[rgb(30,41,59)] text-[rgb(226,232,240)] py-2 px-4 rounded-lg" text="Post comment"/>
          </div>
        </form>

        {/* Bottom Item  */}
        <article className="p-6 mb-6 text-base rounded-lg bg-[rgb(226,232,240)]" >
            {
                allComment.map((item,index)=>{
                    const {fullName,date, commentText} = item
                    console.log(item);
                    return(
                        <>
                    <footer className="flex justify-between items-center mb-">
                        <div className="flex items-center my-2 bg-white px-2 py-1 rounded-lg ">
                          <p className="inline-flex items-center mr-3 text-lg text-black">
                            { fullName}
                          </p>
                          <p className="text-sm text-black">
                            { date}
                          </p>
                        </div>
                      </footer>
                      <p className="text-[#000000cb] dark:text-gray-400 text-md ">↳{commentText}</p>
                        </>
                    )
                })
            }

        </article>

      </div>
    </section>
  )
}

export default Comment