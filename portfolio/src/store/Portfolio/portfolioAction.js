import { getBlog, getBlogDetail, getProject, getProjectDetail } from "./portfolioSlice";

export const getMyProject = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://portfolio-7f55d-default-rtdb.firebaseio.com/project.json"
    );
    const result = await response.json();
    const myProject = [];
    for (const key in result) {
      myProject.push({
        id: key,
        name: result[key].name,
        title: result[key].title,
        description: result[key].description,
        feature: result[key].feature,
        duration: result[key].duration,
        frameworks: result[key].frameworks,
        project_image: result[key].project_image,
        code_link: result[key].code_link,
        preview_link: result[key].preview_link,
      });
    }
    dispatch(getProject(myProject));
  } catch (error) {}
};

export const getMyProjectDetail = (name) => async (dispatch) => {
  try {
    const response = await fetch(
      "https://portfolio-7f55d-default-rtdb.firebaseio.com/project.json"
    );
    const result = await response.json();
    const myProject = [];
    for (const key in result) {
      if (result[key].title === name) {
        myProject.push({
          id: key,
          name: result[key].name,
          title: result[key].title,
          description: result[key].description,
          feature: result[key].feature,
          duration: result[key].duration,
          frameworks: result[key].frameworks,
          project_image: result[key].project_image,
          code_link: result[key].code_link,
          preview_link: result[key].preview_link,
        });
      }
    }
    dispatch(getProjectDetail(myProject));
  } catch (error) {}
};

export const getMyBlogs = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://portfolio-7f55d-default-rtdb.firebaseio.com/blog.json"
    );
    const result = await response.json();
    const myBlog = [];
    for (const key in result) {
      myBlog.push({
        id: key,
        title: result[key].title,
        subtitle: result[key].subtitle,
        description: result[key].description,
        image: result[key].images,
      });
    }
    dispatch(getBlog(myBlog));
  } catch (error) {}
};

export const getMyBlogDetail = (name) => async (dispatch) => {
  try {
    const response = await fetch(
      "https://portfolio-7f55d-default-rtdb.firebaseio.com/blog.json"
    );
    const result = await response.json();
    const myProject = [];
    for (const key in result) {
      if (result[key].title === name) {
        myProject.push({
          id: key,
          title: result[key].title,
          subtitle: result[key].subtitle,
          description: result[key].decsription,
          image: result[key].images,
        });
      }
    }
    dispatch(getBlogDetail(myProject));
  } catch (error) {}
};
