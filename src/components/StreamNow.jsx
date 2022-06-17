import React from "react";

function StreamNow() {
  return (
    <div className="flex flex-col items-center justify-start px-[5rem] mobile:px-6 bg-[#020917] h-[44rem] tablet:h-auto pt-[18rem] tablet:pt-[14rem] mt-[-10rem] relative z-[0] rounded-b-[5rem] tablet:rounded-b-[3rem] tablet:pb-[4rem]">
      {/* tild icon */}
      <img
        src={require("../images/Path 318.png")}
        alt=""
        className="w-[5rem] tablet:w-[4rem]"
      />
      {/* Heading */}
      <div className="headline mt-7 flex flex-col items-center text-[1.5rem] mobile:text-[1.25rem] text-center">
        <span>Stream The Best Music from</span>
        <span className="text-[2rem] mobile:text-[1.75rem] mobile:px-[2rem]">
          <b>Soundgasm Web App Now!</b>
        </span>
        <span className="text-[1rem] text-[#525d6e] px-[15rem] mobile:px-[3rem] text-center mt-[1rem]">
          Listen to latest hits and bangers from top artists around the world
        </span>
      </div>

      {/* buttton */}
      <button className=" text-[1rem] bg-gradient-to-bl from-[#f3071d] to-[#e600ff] rounded-[10px] px-[16px] py-[8px] mt-[20px] hover:border-[2px]">
        Stream Now!
      </button>
    </div>
  );
}

export default StreamNow;
