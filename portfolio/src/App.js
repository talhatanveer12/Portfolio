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

const router = createBrowserRouter(
  createRoutesFromElements(
    <React.Fragment>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<><About /><MySkill/><MyResume/><Client/></>}></Route>
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
