import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Myphoto from "../assets/myphoto.jpg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      className="h-screen bg-gradient-to-b from-black via-black to-gray-800"
      name="home"
    >
      <div className="max-w-screen-lg mx-auto flex md:flex-row  justify-center items-center flex-col h-full  px-4">
        <div className="flex flex-col h-full justify-center ">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I am a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-sm">
            I have about one year of experience in building and desgining web
            application. Currently, I love to work on web application using
            technologies like React, Tailwind and Nextjs.
          </p>
          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white px-6 py-2 my-2 flex bg-gradient-to-r from-cyan-500 to-blue-500 items-center w-fit cursor-pointer rounded-md"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="">
          <img
            src={Myphoto}
            alt="my profile"
            className="rounded-2xl mx-auto  h-[350px]  object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
