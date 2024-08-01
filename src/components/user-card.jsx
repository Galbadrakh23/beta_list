import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const UserCard = ({ userImg, firstName, age, userId, deleteUser }) => {
  const handleDelete = () => {
    deleteUser(userId);
  };

  return (
    <div className="flex flex-1 items-center gap-4 p-5 border rounded-lg w-80">
      <img
        className="w-20 h-20 rounded-full border-2 border-[#E23412]"
        src={userImg}
        alt=""
      />
      <div className="flex flex-row">
        <div className="w-20">
          <h1>{firstName}</h1>
          <p className="font-thin italic text-sm">{age}</p>
        </div>
        <button onClick={handleDelete}>
          <IoCloseOutline size={20} className="ml-20" />
        </button>
      </div>
    </div>
  );
};

export default UserCard;
