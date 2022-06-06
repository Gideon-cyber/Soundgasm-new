import React from "react";
import CenterMenu from "./CenterMenu";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import { Facebook, Twitter, YouTube, LinkedIn } from "@material-ui/icons";

// import { Facebook, Twitter, YouTube, LinkedIn } from "@material-ui/icons";

function Footer() {
  const SocialStyle =
    "rounded-full border-2 border-whit px-[8px] py-[4px] mr-[5rem]";

  return (
    <div className="footer flex flex-col items-center justify-start px-[5rem] bg-[#081730] h-[40rem] pt-[18rem] mt-[-10rem] relative z-[-1]">
      <CenterMenu className="items-center" />
      {/* Social icons */}
      <div className="flex w-[100%] items-center justify-center mt-14">
        <div className={SocialStyle}>
          <i class="fa-brands fa-facebook-square"></i>
        </div>{" "}
        <div className={SocialStyle}>
          <i class="fa-brands fa-twitter"></i>
        </div>{" "}
        <div className={SocialStyle}>
          <i class="fa-brands fa-linkedin"></i>
        </div>{" "}
        <div className={SocialStyle + ` mr-[0]`}>
          <i class="fa-brands fa-github"></i>
        </div>
      </div>

      {/* detail */}
      <span className="text-[1rem] text-[#525d6e] px-[15rem] text-center mt-[4rem]">
        Experience the best quality music anywhere around the world for free.
        <br />
        Enjoy your favourite songs from your favourite artists today.
      </span>
    </div>
  );
}

export default Footer;
