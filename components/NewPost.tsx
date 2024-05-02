import React from "react";
import { IoPerson } from "react-icons/io5";
import { IoMdPhotos } from "react-icons/io";
import { FaRegFileVideo } from "react-icons/fa";
import { FaPoll } from "react-icons/fa";
import { GrSchedules } from "react-icons/gr";

const NewPost = () => {
  return (
    <div className="w-[800px] h-[180px] bg-[#282828] rounded-xl hidden md2:flex flex-col justify-center items-center gap-5">
      <div className="flex flex-row justify-around items-center gap-5">
        <IoPerson className="w-16 h-16 text-blue-600 bg-[#1a1a1a] p-2 rounded-xl " />
        <input
          type="text"
          placeholder="Tell your friends about your thoughts"
          className="w-[600px] h-[50px] rounded-xl text-white bg-[#222222] pl-2"
        />
      </div>
      <div className="flex flex-row  w-[600px] rounded-xl justify-center p-1 gap-9 ml-[70px]">
        <div className="flex flex-row gap-2 items-center bg-[#1a1a1a] p-2 rounded-xl w-[120px]">
          <IoMdPhotos className="w-7 h-7 text-green-800  " />
          <p className="text-md text-white">Photo</p>
        </div>
        <div className="flex flex-row gap-2 items-center bg-[#1a1a1a] p-2 rounded-xl w-[120px]">
          <FaRegFileVideo className="w-7 h-7 text-blue-800  " />
          <p className="text-md text-white">Video</p>
        </div>
        <div className="flex flex-row gap-2 items-center bg-[#1a1a1a] p-2 rounded-xl w-[120px]">
          <FaPoll className="w-7 h-7 text-orange-800  " />
          <p className="text-md text-white">Poll</p>
        </div>
        <div className="flex flex-row gap-2 items-center bg-[#1a1a1a] p-2 rounded-xl w-[120px]">
          <GrSchedules className="w-7 h-7 text-yellow-100  " />
          <p className="text-md text-white">Schedule</p>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
