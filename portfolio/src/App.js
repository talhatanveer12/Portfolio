import "./App.css";
//import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import React from "react";
import About from "./components/About";
import MySkill from "./components/MySkill";
import MyResume from "./components/MyResume";
import Client from "./components/Client";
import Portfolio from "./components/Portfolio";
import ProjectDetail from "./components/ProjectDetail";
import Content from "./components/Content";
import Blog from "./components/Blog";
import BlogDetail from "./components/BlogDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <React.Fragment>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<><About /><MySkill/><MyResume/><Client/></>}></Route>
        <Route path="/portfolio" element={<Portfolio/>}></Route>
        <Route path="/project/:name" element={<ProjectDetail/>}></Route>
        <Route path="/content" element={<Content/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/blog/:name" element={<BlogDetail/>}></Route>
      </Route>
    </React.Fragment>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
