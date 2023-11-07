import React from "react";
import Typewriter from "typewriter-effect";
import susmoyImg from "../../../Assets/s banner-removebg-preview s (1).png";

export default function Banner() {
  return (
    <div className="bg-[#fbbd23] min-h-[50vh]">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-2 relative">
        <img className="w-1/2 lg:w-1/4 bottom-0" src={susmoyImg} alt="susmoy" />
        <div>
          <h2 className="text-4xl font-bold">
            Hi, I am{" "}
            <span className="text-white lg:absolute bottom-48 right-[28rem]">
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
