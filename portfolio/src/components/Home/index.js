import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <>
      <section class="header">
        <div class="title-wrapper">
          <div className="flex flex-row">
            <h1 class="sweet-title">
              <span data-text="Hello">Hello</span>
              <div>
                <span data-text="i am">I am</span>
              </div>
              <span data-text="Talha">Talha</span>
            </h1>
            <p class="top-title">
              Full-Stack Developer
              <br />
              with 4 years experience
              <br />
              based in Lahore
            </p>
          </div>
          <div className="flex justify-center mt-32">
        <Link to="/about" className="text-white bg-sky-600 p-4 rounded-full hover:bg-sky-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-down"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              fill="white"
            ></path>
          </svg>
        </Link>
      </div>
        </div>
        
      </section>
      
    </>
  );
};

export default Home;
