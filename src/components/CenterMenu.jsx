import React from "react";

function CenterMenu() {
  const liStyle =
    "mr-[3rem] mobile:mr-0 mobile:leading-[0.5rem] hover:cursor-pointer hover:border-white md:inline-block  border-b-2 border-transparent duration-300";

  const anchorStyle = "tablet:py-5 py-3 inline-block";
  return (
    <div className="menu flex">
      <ul className="flex tablet:text-sm text-center mobile:flex-col w-[100%] justify-center items-center backdrop-blur-lg z-10 tablet:static">
        <li className={liStyle}>
          <a className={anchorStyle}>Home</a>
        </li>
        <li className={liStyle}>
          <a className={anchorStyle}>About</a>
        </li>
        <li className={liStyle}>
          <a className={anchorStyle}>New Releases</a>
        </li>
        <li className={liStyle + ` mr-[0]`}>
          <a className={anchorStyle}>Stream Live</a>
        </li>
      </ul>
    </div>
  );
}

export default CenterMenu;
