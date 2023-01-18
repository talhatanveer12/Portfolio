import React from "react";
import "./myResume.css";

const MyResume = () => {
  return (
    <section class="header">
      <section className="bg-black text-white">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3 mr-8">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-violet-400">
                <h3 className="text-3xl font-semibold">MY Resume</h3>
                {/* <span className="text-sm font-bold tracking-wider uppercase text-gray-400">
                  Vestibulum diam nunc
                </span> */}
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9 ml-8">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Bachelor Degree
                  </h3>
                  <time className="text-xs tracking-wide uppercase text-gray-400">
                    Jun 2022
                  </time>
                  <p className="mt-3">
                    FAST National University of Computer and Emerging Sciences
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Trainee Software Engineer
                  </h3>
                  <time className="text-xs tracking-wide uppercase text-gray-400">
                    Jul 2022 - Oct 2022
                  </time>
                  <p className="mt-3">Nextbridge (Pvt.) Ltd.</p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Software Engineer
                  </h3>
                  <time className="text-xs tracking-wide uppercase text-gray-400">
                    Oct 2022 - Now
                  </time>
                  <p className="mt-3">Nextbridge (Pvt.) Ltd.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default MyResume;
