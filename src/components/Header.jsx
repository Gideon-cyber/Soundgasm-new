import React from "react";
import CenterMenu from "./CenterMenu";

function Header() {
  const buttonStyle =
    "border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px]";
  return (
    <div className="header bg-[#081730] flex items-center justify-between px-[5rem] pt-[2.4rem] text-[0.8rem]">
      {/* Logo*/}
      <div className="logo flex items-center hover:cursor-pointer">
        <img
          src={require("../images/logo.png")}
          alt="logo"
          className="w-[42px] height-[42px]"
        />{" "}
        <p className="text-[1.5rem] text-[#525d6e] font-bold">Soundgasm</p>
      </div>
      {/* Nav Menu */}
      <CenterMenu />
      {/* buttons */}
      <div className="buttons flex">
        <button className={`mr-[15px] hover:bg-[#232a4e] ` + buttonStyle}>
          Log in
        </button>
        <button className={`bg-[#232a4e] ` + buttonStyle}>Sign up</button>
      </div>
    </div>
  );
}

export default Header;
