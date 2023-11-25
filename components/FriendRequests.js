import React from "react";

const FriendRequests = () => {
  return (
    <div>
      <div className="flex gap-2 w-[100%]">
        <img
          className="h-[50px] w-[50px] rounded-full object-cover"
          src="/saurabh.jpg"
          alt="dp"
        />
        <div>
          <h1 className="font-semibold">Saurabh Anand</h1>
          <p className="text-gray-500 text-[14px]">69 mutual friends</p>
        </div>
        <p className="ml-auto text-secondary text-[14px]">2 d</p>
      </div>

      <div className="mt-4 flex justify-end gap-2">
        <button className="bg-secondary text-white py-2 px-5 rounded-lg">
          Confirm
        </button>
        <button className="bg-gray-300 text-black py-2 px-5 rounded-lg">
          Delete
        </button>
      </div>
,
<div className="flex gap-2 w-[100%]">
  <img
    className="h-[50px] w-[50px] rounded-full object-cover"
    src="/diva.jpeg"
    alt="dp"
  />
  <div>
    <h1 className="font-semibold">Divanshi Sharma</h1>
    <p className="text-gray-500 text-[14px]">11 mutual friends</p>
  </div>
  <p className="ml-auto text-secondary text-[14px]">4 d</p>
</div>

<div className="mt-4 flex justify-end gap-2">
  <button className="bg-secondary text-white py-2 px-5 rounded-lg">
    Confirm
  </button>
  <button className="bg-gray-300 text-black py-2 px-5 rounded-lg">
    Delete
  </button>
</div>
</div>
    
  );
};

export default FriendRequests;
