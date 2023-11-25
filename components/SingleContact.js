import React from "react";

const SingleContact = ({img, alt, name}) => {
  return (
    <div className="mt-4">
      <div className="flex gap-4 items-center">
        <img
          className="h-[34px] rounded-full"
          src={img}
          alt={alt}
        />
        <h1 className="font-medium">{name}</h1>
      </div>
    </div>
  );
};


export default SingleContact;