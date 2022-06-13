import React from "react";
import logolist from "../../assets/list.png";
const AddItemButton = ({ listClicked }) => {
  return (
    <button className="block bg-gray-400" onClick={listClicked}>
      <img
        alt="Add To Do Task"
        src={logolist}
        className="absolute w-12 h-15 right-8 bottom-8 rounded-md hover:bg-gray-400"
      ></img>
    </button>
  );
};

export default AddItemButton;
