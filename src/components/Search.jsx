import { React, useState } from "react";
import MusicPlayer from "./MusicPlayer";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";

function Search() {
  const [elementIsVisible, setElementIsVisible] = useState(false);
  const bg = {
    true: {
      left: "-44rem",
    },
    false: {
      left: "-50rem",
    },
  };
  const redImg = {
    true: {
      left: "18rem",
    },
    false: {
      left: "16rem",
    },
  };
  const musicImg = {
    true: {
      left: "2rem",
    },
    false: {
      left: "6rem",
    },
  };

  return (
    <div className="search relative h-[65rem] tablet:h-auto px-[5rem] mobile:px-6 bg-[#081730] pt-[18rem] pb-[10rem] tablet:pb-[9rem] mt-[-15rem] z-[1] flex items-center justify-between rounded-b-[5rem] tablet:rounded-b-[3rem]">
      {/* Left side */}
      <div className="left flex-1 tablet:hidden">
        <motion.img
          variants={bg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
          src={require("../images/backgraphics.png")}
          alt=""
          className="absolute top-[22rem] left-[-47rem]"
        />
        <motion.img
          src={require("../images/d1.png")}
          alt=""
          className="w-[16rem] top-[26rem] absolute"
        />
        <motion.img
          src={require("../images/d2.png")}
          alt=""
          className="w-[9rem] absolute top-[32.7rem] left-[7rem]"
        />
        <motion.img
          variants={redImg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1.2,
            type: "ease-out",
          }}
          src={require("../images/d3.png")}
          alt=""
          className="w-[9rem] top-[33rem] left-[17rem] absolute"
        />
        <motion.img
          variants={musicImg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
          src={require("../images/d4.png")}
          alt=""
          className="w-[17rem] top-[50rem] left-[2rem] absolute"
        />
      </div>
      {/* Right side */}
      <div className="right flex items-start flex-col justify-start flex-1 h-[100%] pt-[9rem] tablet:pt-[4rem] text-sm">
        {/* Search bar */}
        <div className="searchbar flex justify-start w-[100%]">
          <input
            type="text"
            placeholder="Enter name of Artists or Soundtrack"
            className="flex-[19] outline-none bg-[#020917] rounded-xl p-3 h-[3rem]"
          />
          {/* Search icon */}
          <div className="searchIcon flex flex-1 items-center rounded-xl ml-4 bg-gradient-to-bl from-[#f3071d] to-[#e600ff] p-4 h-[3rem]">
            <img
              src={require("../images/search.png")}
              alt=""
              className="w-[1.5rem]"
            />
          </div>
        </div>
        {/* tild icon */}
        <div className="tild flex justify-start mt-7 items-center w-[100%]">
          <img
            src={require("../images/Path 318.png")}
            alt=""
            className="w-[5rem]"
          />
        </div>

        {/* paragraph */}
        <div className="detail flex flex-col mt-5 text-4xl">
          <span>Search Music by</span>
          <span>
            <b>Name or Soundtrack</b>
          </span>
          <span className="text-sm mt-3 text-[#525d6e]">
            Get access to latest music from your favorite
            <br />
            musician with just one click.
          </span>
        </div>

        {/* Music player */}
        <VisibilitySensor
          onChange={(isVisible) => setElementIsVisible(isVisible)}
        >
          <MusicPlayer />
        </VisibilitySensor>
      </div>
    </div>
  );
}

export default Search;
