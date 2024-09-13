import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import node from "../assets/node.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import github from "../assets/github.png";

const Experience = () => {
  const technologies = [
    {
      id: 1,
      src: html,
      name: "HTML",
      style: " shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      name: "CSS",
      style: " shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      name: "JavaScript",
      style: " shadow-yellow-500",
    },
    {
      id: 4,
      src: nextjs,
      name: "NextJs",
      style: " shadow-white",
    },

    {
      id: 6,
      src: node,
      name: "Node",
      style: " shadow-green-500",
    },
    {
      id: 7,
      src: tailwind,
      name: "Tailwind",
      style: " shadow-sky-400",
    },
    {
      id: 8,
      src: react,
      name: "React",
      style: " shadow-blue-600",
    },
    {
      id: 9,
      src: github,
      name: "Github",
      style: " shadow-gray-400",
    },
  ];
  return (
    <div
      name="experience"
      className=" bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className=" max-w-screen-lg mx-auto px-4 w-full h-full flex flex-col justify-center text-white">
        <div>
          <p className=" text-4xl border-b border-gray-500 inline">
            Experience
          </p>
          <p className=" my-6">These are the technologies I've worked with</p>
        </div>
        <div className=" grid grid-cols-2 sm:grid-cols-3 gap-8 py-8 px-12 sm:px-0 text-center">
          {technologies.map(({ id, src, name, style }) => (
            <div
              key={id}
              className={
                " shadow-md duration-200 hover:scale-105 rounded-lg " +
                " " +
                style
              }
            >
              <img src={src} className=" w-20 mx-auto" alt="technologies" />
              <p className=" mt-4">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
