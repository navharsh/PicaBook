import React from "react";
import { RiVideoAddFill } from "react-icons/ri";
import { BiSearch, BiEdit } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import FriendRequests from "./FriendRequests";
import Contacts from "./Contacts";

const RightSidebar = () => {
  return (
    <div className="fixed hidden xl:block top-16 right-0 w-[300px] mt-6 px-4 h-screen overflow-auto	">
      <div>
        <div className="flex justify-between">
          <h1 className="font-semibold text-gray-600 text-[18px]">
            Friend requests
          </h1>
          <p className="text-secondary">See All</p>
        </div>

        <div className="mt-4">
          <FriendRequests />

          <div className="h-[2px] bg-gray-300 my-5"></div>

          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-gray-600 text-[18px]">Contacts</h1>
            <div className="flex gap-4">
              <RiVideoAddFill className="text-gray-600" />
              <BiSearch />
              <BsThreeDots />
            </div>
          </div>

          <Contacts />
          <div className="bg-gray-300 h-[34px] w-[34px] grid place-items-center text-[24px] rounded-full fixed right-0 bottom-0 mr-4 mb-10">
            <BiEdit />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
