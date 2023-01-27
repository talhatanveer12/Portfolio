import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getMyProject } from "../../store/Portfolio/portfolioAction";

// const project = [
//     { name: "School Management System", to: "/project/School_Management_System", href: "https://github.com/talhatanveer12/SM_System"},
//     { name: "School Management System", to: "/project/School_Management_System", href: "https://github.com/talhatanveer12/SM_System"},
//   ];


const Portfolio = () => {
  const dispatch = useDispatch();
  const {project} = useSelector((state) => state.portfolio)

  useEffect(() => {
    dispatch(getMyProject());
  },[dispatch]);

  return (
    <div class="flex justify-center mt-36 flex-wrap">
    {project && project.map((proj) => (
        <div class="w-full mb-4 mr-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img
            class="p-2 rounded-t-lg"
            src={proj.project_image ? proj.project_image : "/assets/Project_image/image.jpg"}
            alt="productImage"
          />
        <div class="px-5 pb-5">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {proj.name}
            </h5>
          <h4><b>Duration</b> : {proj.duration}</h4>
          <h4><b>Frameworks</b> : {proj.frameworks}</h4>
          <div class="flex items-center justify-between mt-8">
            {proj.code_link && <a
              href={proj.code_link}
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Source Code
            </a>}
            {proj.preview_link && <a
              href={proj.preview_link}
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Preview
            </a>}
            <Link
              to={`/project/${proj.title}`}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    ))
      
    }
    </div>
  );
};

export default Portfolio;
