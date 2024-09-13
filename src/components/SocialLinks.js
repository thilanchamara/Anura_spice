import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const lists = [
    {
      id: 1,
      link: "https://www.linkedin.com/in/thilan-chamara-31b049261/",
      name: "Linkedin",
      icon: <FaLinkedin size={30} />,
      style: "rounded-tr-md",
    },
    {
      id: 2,
      link: "https://github.com/thilanchamara",
      name: "Github",
      icon: <FaGithub size={30} />,
    },
    {
      id: 3,
      link: "mailto:foo@gmail.com",
      name: "Gmail",
      icon: <HiOutlineMail size={30} />,
    },
    {
      id: 4,
      link: "/MNew.pdf",
      name: "Resume",
      icon: <BsFillPersonLinesFill size={30} />,
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <ul className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      {lists.map(({ id, link, name, icon, style, download }) => (
        <li
          key={id}
          className={
            "bg-gray-500 w-40 h-14  ml-[-100px] hover:ml-[-5px] duration-300" +
            " " +
            style
          }
        >
          <a
            href={link}
            className="flex items-center justify-between w-full h-full text-white px-2"
            download={download}
            target="_blank"
            rel="noreferrer"
          >
            <span className="ml-1">{name}</span>
            <span>{icon}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
