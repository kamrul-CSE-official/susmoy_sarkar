import React from "react";
import Typewriter from "typewriter-effect";
import susmoyImg from "../../../Assets/s banner-removebg-preview s (1).png";
// import bgImg from "../../../Assets/heroBG.png";
// import style from "./Banner.module.css";

export default function Banner() {
  return (
    <div className='min-h-[50vh] text-justify bg-[#fbbd23]'>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-2">
        <img
          className="w-1/2 lg:w-1/4 lg:h-1/2 bottom-0"
          src={susmoyImg}
          alt="susmoy"
        />
        <div>
          <h2 className="text-5xl font-bold lg:relative lg:w-full">
            Hi, I am{" "}
            <span className="text-white lg:absolute w-full -bottom-24 right-0">
              <Typewriter
                options={{
                  strings: [" Susmoy Sarkar", " Susmoy Sarkar..."],
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
