import React, { useState } from "react";

const Input = ({ handleChange }) => {
  // Реакт дахиж рендэр хийж харуулахын тулд State ашиглана.
  // State бол Хувьсагч

  // const [searchValue, setSearchValue] = useState("");
  const changeValue = (e) => {
    handleChange(e.target.value);
  };
  return (
    <div className="mx-auto">
      <input
        type="text"
        id="search"
        className="border border-gray-400 rounded-md px-20"
        onChange={changeValue}
      />
    </div>
  );
};

export default Input;
