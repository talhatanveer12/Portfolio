import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Markup } from 'interweave';
import { getMyBlogDetail } from "../../store/Portfolio/portfolioAction";

const BlogDetail = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { blogDetail } = useSelector((state) => state.portfolio);
  useEffect(() => {
    dispatch(getMyBlogDetail(name));
  }, [dispatch, name]);
  return (
    <section class="dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            {blogDetail.length === 0 ? 
                <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-white dark:text-white">
              No Blog Found ;)
            </h2>
            :
            <>
            <h2 class="mb-4 text-2xl lg:text-2xl tracking-tight font-extrabold text-white dark:text-white">
              {blogDetail[0]?.title}
            </h2>
            <img
              className="mt-4 rounded-lg"
              src={blogDetail[0]?.project_image ? blogDetail[0]?.project_image : "/assets/Project_image/image.jpg"}
              alt="imageDescription"
            />
            <p class="font-light text-left  text-white sm:text-xl dark:text-gray-400">
              <Markup content={blogDetail[0]?.description}></Markup>
            </p>
            </>}
          </div>
        </div>
      </section>
  );
};

export default BlogDetail;
