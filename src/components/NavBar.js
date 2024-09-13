import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const lists = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  // const listItems1=lists.map((list) =>
  // <li  key={list.id} className="text-gray-500 cursor-pointer px-4 capitalize font-medium hover:scale-105 duration-200 ">
  //     {list.link}</li>)

  // const listItems2=lists.map((item) =>
  // <li   key={item.id} className="text-gray-500 cursor-pointer py-4 capitalize text-5xl hover:scale-105 duration-200">
  //     {item.link}</li>)

  return (
    <div className="flex justify-between bg-black fixed w-full h-20 items-center px-4">
      <div>
        <h1 className="font-signature text-white text-5xl">chamara</h1>
      </div>

      <ul className="hidden md:flex">
        {lists.map(({ link, id }) => (
          <li
            key={id}
            className="text-gray-500 cursor-pointer px-4 capitalize font-medium hover:scale-105 duration-200 "
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="text-gray-500 cursor-pointer pr-6 md:hidden z-10"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center w-full h-screen absolute top-0 left-0 bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {lists.map(({ id, link }) => (
            <li
              key={id}
              className="text-gray-500 cursor-pointer py-4 capitalize font-medium hover:scale-105 duration-200 "
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
