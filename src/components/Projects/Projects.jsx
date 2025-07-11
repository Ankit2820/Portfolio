import React from 'react';
import './Projects.css'
import ProjectList from '../ProjectList';
import { useEffect, useState } from "react";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
}  from "../../data";

export default function Projects() {
  const [selected, setSelected] = useState("frontend");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "frontend",
      title:"Frontend",
    },
    {
      id: "backend",
      title: "Backend",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "devops",
      title: "Devops",
    },
  ];
  useEffect(() => {
    switch(selected){
      case "frontend":
        setData(featuredPortfolio);
        break;
      case "backend":
        setData(webPortfolio);
        break;
      case "design":
        setData(mobilePortfolio);
        break;
      case "devops":
        setData(designPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);
  return (
    <div className={`projects ${selected}`} >

      <h1 className="text-4xl font-bold mb-8 pt-12">Projects</h1>
      <ul className="flex justify-center items-center md:text-2xl space-x-4 md:space-x-16 mb-8">
        {list.map((item) => (
          <ProjectList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
         <div
    className={`container mx-auto grid px-4 gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${
      data.length < 3 ? 'justify-center' : ''
    }`}
  >
        {data.map((d, index) => (
          <div key={index} className="item bg-gray-900 p-4 rounded-lg">
            {d.video ? (
  <video
    src={d.video}
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-48 object-cover rounded-t-lg"
  />
) : (
  <img
    src={d.img}
    alt={d.title}
    className="w-full h-48 object-cover rounded-t-lg"
  />
)}
            <h3 className="text-lg font-semibold mt-4">{d.title}</h3>
            {/* Conditional Links */}
            {selected === "frontend" || selected === "backend" ? (
      <div className="mt-4 flex space-x-4">
        {d.link && (
          <a href={d.link} target="_blank" rel="noopener noreferrer"
             className="text-blue-400 hover:underline">
            link
          </a>
        )}
        {d.github && (
          <a href={d.github} target="_blank" rel="noopener noreferrer"
             className="text-gray-400 hover:underline">
            GitHub
          </a>
             )}
       
      </div>
            ):(
              // Show only a single link for other categories
              d.link && (
                <a
                  href={d.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline mt-2 block"
                >
                  link
                </a>
              )
            )}
              </div>
        ))}
      </div>
      </div>
  );
}
