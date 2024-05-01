import React from "react";
import { MdOutlineNoteAlt } from "react-icons/md";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { IoPerson } from "react-icons/io5";

const MessagesCard = () => {
  return (
    <div className="w-[350px] h-[650px] bg-[#282828] rounded-xl hidden 2xl:block">
      <div className="flex flex-row justify-between p-6">
        <p className="text-lg text-white font-bold">Messages</p>
        <MdOutlineNoteAlt className="w-8 h-8 text-gray-500" />
      </div>
      <div className="flex flex-col border-b border-gray-600">
        <div className="relative w-full pl-4 pr-6  pb-2">
          <input
            type="text"
            placeholder="Search"
            className="w-full h-[50px] rounded-xl text-gray-500 bg-[#222222] pl-10"
          />
          <CiSearch className="absolute top-2 left-6 w-6 h-6 text-gray-500 mt-1" />
          <TbTriangleInvertedFilled className="absolute top-2 right-8 w-6 h-6 text-gray-500 mt-1" />
        </div>
        <div className="flex flex-row justify-between px-4 pt-2">
          <div className="flex flex-row items-center gap-5">
            <p className="text-md text-white font-bold border-b-2 border-white">
              Primary
            </p>
            <p className="text-md text-gray-500">General</p>
          </div>
          <p className="text-md text-blue-500">Requests(4)</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row p-4 items-center gap-4">
          <IoPerson className="w-[55px] h-[55px] text-blue-600 bg-[#1a1a1a] p-2 rounded-3xl border-4 border-[#3d3d3d] " />
          <p className="text-lg text-white font-bold">UserName</p>
        </div>
        <div className="flex flex-row p-4 items-center gap-4">
          <IoPerson className="w-[55px] h-[55px] text-blue-600 bg-[#1a1a1a] p-2 rounded-3xl border-4 border-[#3d3d3d] " />
          <p className="text-lg text-white font-bold">UserName</p>
        </div>
        <div className="flex flex-row p-4 items-center gap-4">
          <IoPerson className="w-[55px] h-[55px] text-blue-600 bg-[#1a1a1a] p-2 rounded-3xl border-4 border-[#3d3d3d] " />
          <p className="text-lg text-white font-bold">UserName</p>
        </div>
        <div className="flex flex-row p-4 items-center gap-4">
          <IoPerson className="w-[55px] h-[55px] text-blue-600 bg-[#1a1a1a] p-2 rounded-3xl border-4 border-[#3d3d3d] " />
          <p className="text-lg text-white font-bold">UserName</p>
        </div>
        <div className="flex flex-row p-4 items-center gap-4">
          <IoPerson className="w-[55px] h-[55px] text-blue-600 bg-[#1a1a1a] p-2 rounded-3xl border-4 border-[#3d3d3d] " />
          <p className="text-lg text-white font-bold">UserName</p>
        </div>
        <p className="text-md text-gray-400 px-6 py-2 border-t border-gray-600">
          View all
        </p>
      </div>
    </div>
  );
};

export default MessagesCard;
