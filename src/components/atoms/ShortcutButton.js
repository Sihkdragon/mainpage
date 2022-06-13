import React from "react";

const ShortcutButton = ({ link, imgSrc, ShorcutName }) => {
  return (
    <div className="text-center  w-20 h-30 shortcut-animate">
      <a href={link}>
        <button id="instagram" className="shortcut-btn">
          <div className="inner w-full h-full bg-gray-400 bg-opacity-30">
            <img src={imgSrc} className="" alt="logo" />
          </div>
        </button>
        <span htmlFor="instagram" className="font-nauti block text-xl">
          {ShorcutName}
        </span>
      </a>
    </div>
  );
};

export default ShortcutButton;
