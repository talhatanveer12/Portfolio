import React from "react";
import "./mySkill.css";

const mySkill = [
  {
    text: "React Js",
    logo: "/assets/logo/React.svg",
  },
  {
    text: "Node Js",
    logo: "/assets/logo/Node.svg",
  },
  {
    text: "Express Js",
    logo: "/assets/logo/Express.svg",
  },
  {
    text: "Redux",
    logo: "/assets/logo/Redux.svg",
  },
  {
    text: "Wordpress",
    logo: "/assets/logo/Wordpress.svg",
  },
  {
    text: "Laravel",
    logo: "/assets/logo/Laravel.svg",
  },
  {
    text: "Sass",
    logo: "/assets/logo/Sass.svg",
  },
];

const MySkill = () => {
  return (
    <>
      {/* <section className="bg-black text-white">
        <div className="container max-w-5xl px-4 py-12 mx-auto">*/}
      <div className="grid gap-4 mx-4 sm:grid-cols-1 md:grid-cols-12 lg:mt-48">
        <div className="sm:col-span-12 md:col-span-2 mr-8">
          <div className="flex justify-center mt-4 pl-4">
            <span className="text-sky-600 text-5xl font-sans font-semibold  leading-12">
              My
            </span>
            <span className="text-white text-5xl font-sans font-semibold  leading-12">
              Skill
            </span>
          </div>
        </div>
        <div className="sm:col-span-12 md:col-span-10 px-4  ml-8">
          <div className="flex justify-center flex-wrap">
            {mySkill.map((item) => (
              <div class="mr-4 mt-4 w-64 max-w-sm bg-sky-600 border border-sky-600 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div class="flex flex-col items-center pb-4 mt-4">
                  <img
                    width="64"
                    height="64"
                    color="#ffffff"
                    src={item.logo}
                    alt=""
                  />
                  <h5 class="text-xl font-medium text-white dark:text-white">
                    {item.text}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* </div>
        </div>
      </section> */}
    </>
  );
};

export default MySkill;
