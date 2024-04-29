import React from "react";
import profileBackground from "../public/profile-background2.jpg";
import { IoPerson } from "react-icons/io5";

const ProfileCard = () => {
  return (
    <div className="w-[350px] h-[500px] bg-[#282828] rounded-xl relative flex justify-center">
      <img
        src={profileBackground.src}
        alt="Profle background"
        className="rounded-t-xl absolute top-0 left-0 z-10"
      />
      <div className="absolute z-30 top-[110px] flex flex-row justify-between w-[80%]">
        <div className="flex flex-col items-center justify-center mt-[60px]">
          <p className="text-md text-white font-bold">1234</p>
          <p className="text-xs text-[#5f5f5f]">Followers</p>
        </div>
        <IoPerson className="w-[100px] h-[100px] text-blue-600 bg-[#1a1a1a] p-2 rounded-xl border-4 border-[#282828] " />
        <div className="flex flex-col items-center justify-center mt-[60px]">
          <p className="text-md text-white font-bold">1234</p>
          <p className="text-xs text-[#5f5f5f]">Following</p>
        </div>
      </div>
      <div className="bg-[#282828] w-full h-[340px] absolute bottom-0 z-20 rounded-b-xl mt-[100px] flex flex-col items-center">
        <div className="mt-[70px] flex flex-col  items-center">
          <p className="text-2xl text-white font-bold ">Anonymus</p>
          <p className="text-white text-md text-center mt-[25px] p-4">This is my profile description lorem impusm some words</p>
        </div>
        <div className="flex justify-center mt-[65px]">
            <button className="w-[200px] h-[50px] bg-[#222222] rounded-xl text-md text-white uppercase font-bold">My Profile</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
