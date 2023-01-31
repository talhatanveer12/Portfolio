import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    project: [],
    blog: [],
    projectDetail: [],
    blogDetail: [],
}

const portfolioSlice  = createSlice({
    name: "portfolio",
    initialState,
    reducers: {
        getProject: (state,action) => {
            state.project = action.payload;
        },
        getBlog: (state,action) => {
            state.blog = action.payload;
        },
        getProjectDetail: (state,action) => {
            state.projectDetail = action.payload;
        },
        getBlogDetail: (state,action) => {
            state.blogDetail = action.payload;
        }
    }
});

export default portfolioSlice;

export const {getProject,getBlog,getProjectDetail,getBlogDetail} = portfolioSlice.actions;