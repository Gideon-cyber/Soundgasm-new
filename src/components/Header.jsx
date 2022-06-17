import { React, useState } from "react";

function Header() {
  let [open, setOpen] = useState(false);
  const Links = [
    { name: "Home" },
    { name: "About" },
    { name: "New Releases" },
    { name: "Stream Live" },
  ];
  const buttonStyle =
    "border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px]";
  return (
    <div className="header bg-[#081730] flex items-center justify-between px-[5rem] tablet:px-6 pt-[2.4rem] tablet:py-4 text-[0.8rem] tablet:fixed right-0 left-0 z-[100]">
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
      <div>
        <img
          src={
            open
              ? process.env.PUBLIC_URL + `/icons-close.png`
              : process.env.PUBLIC_URL + `/icons-menu1.png`
          }
          className="hidden z-20 tablet:block tablet:z-20 tablet:fixed tablet:right-5 tablet:top-6 tablet:cursor-pointer"
          onClick={() => setOpen(!open)}
        />
        <ul
          className={`flex justify-between items-center tablet:w-[50%]  z-10 tablet:bg-[#ffffff14] tablet:backdrop-blur-lg tablet:block tablet:top-0  tablet:fixed tablet:h-screen tablet:py-[3rem] duration-500 ease-linear ${
            !open ? "tablet:right-[-100%]" : "tablet:right-0"
          }`}
        >
          {Links.map((link, index) => {
            return (
              <li
                key={index}
                className="mr-[3rem] last:mr-0 tablet:ml-10 hover:cursor-pointer hover:border-[#525d6e] border-b-2 border-transparent duration-300 tablet:my-6"
              >
                {/* // eslint-disable-next-line */}
                <a
                  href=""
                  className="text-white tablet:inline-block font-bold tablet:py-5"
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      {/* buttons */}
      <div className="buttons flex tablet:hidden">
        <button className={`mr-[15px] hover:bg-[#232a4e] ` + buttonStyle}>
          Log in
        </button>
        <button className={`bg-[#232a4e] ` + buttonStyle}>Sign up</button>
      </div>
    </div>
  );
}

export default Header;
