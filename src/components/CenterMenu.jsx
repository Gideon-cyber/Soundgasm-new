import React from "react";

function CenterMenu() {
  const liStyle = "mr-[3rem] hover:cursor-pointer hover:text-[#525d6e]";
  return (
    <div className="menu flex">
      <ul className="flex w-[100%] justify-between">
        <li className={liStyle}>Home</li>
        <li className={liStyle}>About</li>
        <li className={liStyle}>New Releases</li>
        <li className={liStyle + ` mr-0`}>Stream Live</li>
      </ul>
    </div>
  );
}

export default CenterMenu;
