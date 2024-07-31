import React from "react";

const UserCard = ({ userImg, firstName, age }) => {
  return (
    <div className="flex items-center gap-4 p-5 border rounded-lg w-80">
      <img
        className="w-20 h-20 rounded-full border-2 border-[#E23412]"
        src={userImg}
        alt=""
      />
      <div>
        <h1>{firstName}</h1>
        <p className="font-thin italic text-sm">{age}</p>
      </div>
    </div>
  );
};

export default UserCard;
