import React from "react";
import "./about.css";
const About = () => {
  return (
    <section class="header9">
      <div class="grid md:grid-cols-12 sm:grid-cols-1 gap-8 justify-center">
        <div className="col-span-4 sm:mt-96 md:mt-0">
          <div className="flex justify-center flex-wrap">
            <img className="rounded-lg" src="/assets/about.jpeg" alt="" />
          </div>
        </div>

        <div className="col-span-8 p-4">

            <div>
              <p className="text-sky-600 text-5xl font-sans font-semibold  leading-12">
                Talha
              </p>
              <p className="text-white text-5xl font-sans font-semibold  leading-12">
                Tanveer
              </p>
            </div>
            <div className="mt-8 pl-12 text-white sm:block md:flex">
              <ul class="list-disc marker:text-sky-600 leading-12 pr-12">
                <li>Age: 21</li>
                <li>Nationality : Pakistani</li>
                <li>Language : English</li>
                <li>Freelance : Available</li>
              </ul>
              <ul class="list-disc marker:text-sky-600 leading-12">
                <li>Address : Lahore</li>
                <li>Phone : +92 345 5558158</li>
                <li>Email : talhatanveer930@gmail.com</li>
                <li>Skype : talha.tanveer</li>
              </ul>
            </div>

        </div>
      </div>
     </section>
  );
};

export default About;
// Age : 27 Years
// Nationality : German
// Freelance : Available
// Langages : English
// Address : London
// Phone : 21 184 010
// Email : contact@steven.net
// Skype : steven.walker
