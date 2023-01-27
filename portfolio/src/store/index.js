import { configureStore } from "@reduxjs/toolkit";
import portfolioSlice from "./Portfolio/portfolioSlice";

const store = configureStore({
    reducer: {
        portfolio: portfolioSlice.reducer,
    }
})

export default store;
