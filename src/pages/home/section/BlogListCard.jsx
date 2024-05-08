import React from 'react'
import BlogList from '../../../components/BlogList'

const BlogListCard = () => {
  return (
    <div className='font-primary py-14 border-b border-gray-300'>
    <h2 className='text-center font-bold text-l uppercase'>dont miss</h2>
    <h6 className="text-center text-red-800 text-sm font-bold my-2">
        X X X
    </h6>
    <div className='space-y-7'>
        <BlogList source="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600" title="Soundproof Headphones" />

        <BlogList source="https://images.pexels.com/photos/826349/pexels-photo-826349.jpeg?auto=compress&cs=tinysrgb&w=600" title="build your own digital world" />

        <BlogList source="https://images.pexels.com/photos/935743/pexels-photo-935743.jpeg?auto=compress&cs=tinysrgb&w=600" title="pandemic after shock" />
    </div>
</div>
  )
}

export default BlogListCard