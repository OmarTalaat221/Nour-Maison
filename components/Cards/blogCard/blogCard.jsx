"use client"
import React from 'react'
import { formatDate } from '../../../Hooks/dateFormats'
import BranchesImage from './../../../utils/BranchesImage/BranchesImage';

const BlogCard = ({post}) => {
  return (
    <div className="bg-white h-full shadow-lg rounded-xl overflow-hidden transition hover:-translate-y-9 cursor-pointer ">
      <div className='relative'>
      <BranchesImage className={"opacity-40"} />
        
    <img
      src={post.image}
      alt={post.title}
      className="w-full !h-[300px] relative z-20 p-3 rounded-lg  object-contain"
      />
      </div>
    <div className="p-6">
      <div className="text-sm text-gray-500 flex flex-wrap items-center gap-2 mb-2">
       
        <span>{(()=>{
          try{
            return formatDate(new Date(post?.date))
          }catch(e){
            return null
          }
        })()}</span>
        <span className="bg-gray-100  px-2 py-0.5 rounded-full text-xs font-semibold text-logoGold">
          {post.category}
        </span>
      </div>
      <h3 className=" font-semibold text-softMintGreen mb-2 leading-snug font-oswald text-xl">
        {post.title}
      </h3>
      <p className="text-gray-600 text-lg line-clamp-3 mb-4">
        {post.description}
      </p>
      {/* <div className="flex items-center gap-3">
      <img
        src={post.author.image}
        alt={post.author.name}
        className="!w-[40px] !h-[40px] rounded-full object-cover"
        />
      <div>
        <p className="text-sm font-semibold text-gray-900">
          {post.author.name}
        </p>
        <p className="text-xs text-gray-500">{post.author.role}</p>
      </div>
    </div> */}
    </div>
  </div>
  )
}

export default BlogCard
