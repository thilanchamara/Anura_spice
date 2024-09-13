import React from "react";
import ecommerce from "../assets/portfolio/ecommerce.png";
import reactBlog from "../assets/portfolio/reactBlog.png";
import groceries from "../assets/portfolio/groceries.png";

const Portfolio = () => {
  const myProjects = [
    {
      id: 1,
      img: ecommerce,
      live: "https://thilanchamara.github.io/ECommerce_website/",
      source: "https://github.com/thilanchamara/ECommerce_website",
    },
    {
      id: 2,
      img: reactBlog,
      live: "https://react-redux-blog-rust.vercel.app/",
      source: "https://github.com/thilanchamara/React_Redux_blog",
    },
    {
      id: 3,
      img: groceries,
      live: "https://react-groceries-list.vercel.app/",
      source:
        "https://github.com/thilanchamara/Groceries_list/tree/main/my-project",
    },
  ];
  return (
    <div
      name="projects"
      className="md:h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full px-4">
        <div className="  pb-8">
          <p className=" text-4xl border-b border-gray-500 inline">Projects</p>
          <p className="  mt-6">Check out some of my work here</p>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 sm:px-0 px-12">
          {myProjects.map((item) => (
            <div
              className="shadow-md shadow-gray-600 rounded-lg flex flex-col justify-between h-full"
              key={item.id}
            >
              <div className="h-[150px]">
                <img
                  alt="img"
                  src={item.img}
                  className="rounded-md duration-200 hover:scale-105 object-cover h-full w-full"
                />
              </div>
              <div className="flex">
                <a
                  href={item.live}
                  className="w-1/2 px-6 py-3 duration-200 hover:scale-105 text-center block"
                >
                  Online
                </a>
                <a
                  href={item.source}
                  className="w-1/2 px-6 py-3 duration-200 hover:scale-105 text-center block"
                >
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
