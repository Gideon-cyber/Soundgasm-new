import React from "react";
import Feature from "./Feature";

function Experience() {
  return (
    <div className="experience flex flex-col items-center justify-start px-[5rem] mobile:px-6 bg-[#020917] h-[60rem] tablet:h-auto pt-[18rem] tablet:pt-[14rem] mt-[-10rem] relative z-[2] rounded-b-[5rem] tablet:rounded-b-[3rem] tablet:pb-[2rem]">
      {/* Tail icon */}
      <img
        src={require("../images/Path 318.png")}
        alt=""
        className="w-[5rem] tablet:w-[4rem]"
      />
      {/* Heading */}
      <div className="headline mt-7 flex flex-col items-center text-[2rem] mobile:text-[1.85rem]">
        <h1 className="font-bold">New Music Out Today</h1>
        <p className="text-[1rem] text-[#525d6e]">
          Get the best music experience
        </p>
      </div>
      {/* Feature */}
      <div className="feature flex items-center justify-around mt-[6rem] tablet:mt-[3rem] w-[100%] tablet:justify-center tablet:flex-col">
        <Feature icon="Group 2" title="For live Music" />
        <Feature icon="music icon" title="For Daily Music" />
        <Feature icon="Group 4" title="For Artists" />
      </div>
    </div>
  );
}

export default Experience;
