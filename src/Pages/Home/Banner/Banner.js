import React from "react";
import Typewriter from "typewriter-effect";
import susmoyImg from "../../../Assets/s banner-removebg-preview s (1).png";

export default function Banner() {
  return (
    <div className="bg-[#fbbd23] min-h-[70vh]">
      <div className="flex items-center justify-center gap-2 relative">
        <img className="w-1/4 sticky bottom-0" src={susmoyImg} alt="susmoy" />
        <div>
          <h2 className="text-4xl font-bold">
            Hi, I am{" "}
            <span className="text-white">
              <Typewriter
                options={{
                  strings: [" Susmoy Sarkar", " Susmoy Sarkar"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}
