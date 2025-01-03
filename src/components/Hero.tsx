"use client";

import React, { useEffect, useState } from "react";
import Image from 'next/image';
import Sudesh from "../../public/assets/sudesh.png";

export default function Hero() {
  const handleDownload = () => {
    // Replace '/path-to-your-cv.pdf' with the actual path to your CV file in the public folder
    const cvUrl = '/CV/Sudesh-Thashmika.pdf';
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Sudesh-Thashmika.pdf'; // Replace with desired filename
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen h-screen bg-white px-4 py-16 sm:px-6 lg:px-8">
      {/* Main Content Container */}
      <div className="min-h-screen max-w-screen h-screen justify-center">
        {/* Typography Layer */}
        <div className="mx-auto items-center justify-center text-center mt-10">
          <h1 className="flex mx-auto flex-col items-center">
            <svg width="100%" height="300">
              <text 
          x="50%" 
          y="50%"
          textAnchor="middle" 
          dominantBaseline="middle" 
          style={{
            fontSize: "15vw", 
            letterSpacing: "1vw",
            fill: "none",
            stroke: "#161616",
            strokeWidth: "0.1vw"
          }}
              >
          Engineer
              </text>
            </svg>
            <div className="flex items-center lg:mt-[-6vw] mt-[-130px]">
              <span className="text-[15vw] mr-4">&</span>
              <span className="text-[15vw] text-[#161616]">
          Designer
              </span>
            </div>
          </h1>
          <button 
            onClick={handleDownload}
            className="px-6 py-3 bg-black text-white font-medium rounded hover:bg-gray-800 transition-colors z-50"
          >
            Download CV
          </button>
        </div>

        {/* Image Container */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-0 w-full lg:w-150">
          <Image
            src={Sudesh}
            alt="Profile"
            className=" mx-auto"
          />
        </div>

        {/* Download CV Button */}
        <div className="absolute lg:bottom-8 lg:right-8 bottom-80 mx-auto z-20 lg:opacity-100 opacity-0">
          <button 
            onClick={handleDownload}
            className="px-6 py-3 bg-black text-white font-medium rounded hover:bg-gray-800 transition-colors"
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}