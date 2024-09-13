import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" h-screen w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className=" max-w-screen-lg m-auto h-full w-full flex flex-col justify-center  px-4">
        <div className="pb-8">
          <p className=" text-4xl font-bold border-b border-gray-500 inline">
            About
          </p>
        </div>
        <p className=" text-xl mt-20">
          I am a hard-working,honest individual. I am a good timekeepper, always
          willing to learn new skills.I am friendly, helpful and polite, have a
          good sense of humor.I can work independently in busy environments and
          also within a team setting. I am outgoing, tactful and able to listen
          effectively when solving problems.
        </p>
      </div>
    </div>
  );
};

export default About;
