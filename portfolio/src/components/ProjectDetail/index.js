import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getMyProjectDetail } from "../../store/Portfolio/portfolioAction";
import { Markup } from 'interweave';

const ProjectDetail = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { projectDetail } = useSelector((state) => state.portfolio);
  useEffect(() => {
    dispatch(getMyProjectDetail(name));
  }, [dispatch, name]);
  return (
    <>
      <section class="dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            {projectDetail.length === 0 ? 
                <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-white dark:text-white">
              No Project Found ;)
            </h2>
            :
            <>
            <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-white dark:text-white">
              {projectDetail[0]?.name}
            </h2>
            {/* <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </p> */}
            <img
              className="mt-4 rounded-lg"
              src={projectDetail[0]?.project_image ? projectDetail[0]?.project_image : "/assets/Project_image/image.jpg"}
              alt="imageDescription"
            />
            <h3 class="font-light font-bold  text-left mt-2 text-white sm:text-xl dark:text-gray-400">
              <b>Description</b>
            </h3>
            <p class="font-light text-left  text-gray-500 sm:text-xl dark:text-gray-400">
              <Markup content={projectDetail[0]?.description}></Markup>
            </p>
            <h3 class="font-light font-bold  text-left mt-2 text-white sm:text-xl dark:text-gray-400">
              <b>Feature</b>
            </h3>
            <p class="font-light text-left  text-gray-500 sm:text-xl dark:text-gray-400">
              {projectDetail[0]?.feature}
            </p>
            <h3 class="font-light font-bold  text-left mt-2 text-white sm:text-xl dark:text-gray-400">
              <b>Tools & Technologies</b>
            </h3>
            <p class="font-light text-left  text-gray-500 sm:text-xl dark:text-gray-400">
              {projectDetail[0]?.frameworks}
            </p>
            </>}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetail;

