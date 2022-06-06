import { React, useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";

function Feature({ icon, title }) {
  const variant = {
    true: {
      transform: "scale(1)",
    },
    false: {
      transform: "scale(0.5)",
    },
  };
  const [elementIsVisible, setElementIsVisible] = useState(false);

  return (
    <VisibilitySensor
      onChange={(isVisible) => setElementIsVisible(isVisible)}
      // minTopValue={300}
    >
      <div className="feature flex flex-col items-center ml-[3rem] mr-[4rem] relative text-center">
        {/* icon */}
        <motion.div
          variants={variant}
          animate={`${elementIsVisible}`}
          transition={{ duration: 1, type: "ease-out" }}
          className="icon bg-[#081730] rounded-2xl p-4"
        >
          <img
            src={require(`../images/${icon}.png`)}
            alt=""
            className="w-[3rem]"
          />
        </motion.div>

        <span className="mt-5">{title}</span>

        <span className="text-[#525d6e] mt-4">
          Listen to live music right from the comfort of your devices.
        </span>

        <span className="text-[#e600ff] underline mt-[3rem] hover:cursor-pointer">
          Learn More
        </span>
      </div>
    </VisibilitySensor>
  );
}

export default Feature;
