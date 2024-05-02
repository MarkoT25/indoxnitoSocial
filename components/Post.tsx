import React from "react";
import { IoPerson } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import { GoDotFill } from "react-icons/go";
import { TiHeartFullOutline } from "react-icons/ti";
import { AiOutlineMessage } from "react-icons/ai";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { FiPaperclip } from "react-icons/fi";
import { FaRegImage } from "react-icons/fa6";
import postImage from "../public/post-image.jpg";

const Post = () => {
  return (
    <div className="w-full md2:w-[800px] h-[560px] bg-[#282828] mt-[30px] rounded-xl ">
      <div className="p-6 flex flex-row w-full gap-4 items-center">
        <IoPerson className="w-[70px] h-[70px] text-blue-600 bg-[#1a1a1a] p-2 rounded-3xl border-4 border-[#3d3d3d] " />
        <div className="flex flex-col w-full gap-1">
          <div className="flex flex-row justify-between w-full items-center">
            <div className="flex flex-row items-center gap-2">
              <p className="text-lg text-gray-400">@username</p>
              <MdVerified className="text-blue-500 w-6 h-6" />
            </div>
            <HiDotsVertical className="w-5 h-5 text-gray-400" />
          </div>
          <div className="flex flex-row items-center gap-2">
            <p className="text-white text-xl font-bold">Guest Username</p>
            <GoDotFill className="w-5 h-5 text-green-500" />
            <p className="text-md text-yellow-400">1 hr ago</p>
          </div>
        </div>
      </div>
      <div className="px-6 py-2 shadow-md">
        <img
          src={postImage.src}
          alt="Post image"
          className="w-full h-[300px] object-cover rounded-xl "
        ></img>
        <div className="flex flex-row justify-between mt-4">
          <div className="flex flex-row justify-between gap-7">
            <TiHeartFullOutline className="w-8 h-8 text-red-500" />
            <AiOutlineMessage className="w-8 h-8 text-gray-500" />
            <IoPaperPlaneOutline className="w-8 h-8 text-gray-500" />
          </div>
          <CiBookmark className="w-8 h-8 text-gray-500" />
        </div>
      </div>
      <div className="flex flex-row px-6 py-4 gap-4 w-full">
        <IoPerson className="w-[50px] h-[50px] text-blue-600 bg-[#1a1a1a] p-2 rounded-2xl " />
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Write your comment"
              className="w-full h-[50px] rounded-xl text-white bg-[#222222] pl-2"
            />
            <FiPaperclip className="absolute top-2 right-12 w-6 h-6 text-gray-500 mt-1" />
            <FaRegImage className="absolute top-2 right-3 w-6 h-6 text-gray-500 mt-1" />
          </div>
      </div>
    </div>
  );
};

export default Post;
