import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import { PiNotificationBold } from "react-icons/pi";

const NotificationsCard = () => {
  return (
    <div className="w-[350px] h-[250px] bg-[#282828] rounded-xl hidden 2xl:block">
      <div className="flex flex-row justify-between items-center px-6 pt-4 pb-1 border-b border-gray-600">
        <p className="text-lg text-white font-bold">Notifications</p>
        <HiDotsVertical className="w-5 h-5 text-gray-500" />
      </div>
      <div className="flex flex-col px-4 py-3">
        <div className="flex flex-row items-center gap-4 pt-2">
          <PiNotificationBold className="w-8 h-8 text-gray-500" />
          <p className="text-md text-white">
            <span className="font-bold">Username</span> liked your story.
          </p>
        </div>
        <div className="flex flex-row items-center gap-4 pt-2">
          <PiNotificationBold className="w-8 h-8 text-gray-500" />
          <p className="text-md text-white">
            <span className="font-bold">Username</span> liked your post.
          </p>
        </div>
        <div className="flex flex-row items-center gap-4 pt-2">
          <PiNotificationBold className="w-8 h-8 text-gray-500" />
          <p className="text-md text-white">
            <span className="font-bold">Username</span> commented on your post.
          </p>
        </div>
      </div>
      <p className="text-md text-gray-400 px-6 py-2 border-t border-gray-600">
        View all
      </p>
    </div>
  );
};

export default NotificationsCard;
