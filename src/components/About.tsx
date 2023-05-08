import React from "react"
import {Routes, Route, Link} from "react-router-dom";
import headshot from '../resources/boy.jpg';
import Contact from "../pages/Contact";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Melker Henriksson.
          </h1>
          <div className="lg:w-48 border-solid border-1 border-white">
          <img
            className="object-cover aspect-square object-center rounded border-solid border-2 border-white border-opacity-10"
            alt="hero"//Byt ut med loading gif?
            src={headshot}
          />
        </div>
          <p className="mb-8 leading-relaxed">
            Tredje årets student inom Civilingenjörs utbildningen <a href="http://interaktion.nu/">Interaktion & Design</a> på Umeå Universitet
          </p>
          <div className="flex justify-center">

          </div>
          
        </div>
      </div>
    </section>
  );
}