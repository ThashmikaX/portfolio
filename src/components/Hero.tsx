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
      <div className="min-h-screen max-w-full h-screen justify-center">
        {/* Typography Layer */}
        <div className="relative flex flex-col items-center justify-center top-16">
          <h1 className="flex flex-col items-center top-36">
            <svg width="100%" height="300">
              <text 
                x="50%" 
                y="50%"
                textAnchor="middle" 
                dominantBaseline="middle" 
                style={{
                  fontSize: "300px", 
                  letterSpacing: "10px",
                  fill: "none",
                  stroke: "#161616",
                  strokeWidth: "2px"
                }}
              >
                Engineer
              </text>
            </svg>
            <div className="flex items-center mt-[-120px]">
              <span className="text-[300px]  mr-4">&</span>
              <span className="text-[300px] text-[#161616]">
                Designer
              </span>
            </div>
          </h1>
        </div>

        {/* Image Container */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 z-0">
          <Image
            src={Sudesh}
            alt="Profile"
            className="relative z-10 w-150 h-auto object-cover grayscale bottom-0 pb-0"
          />
        </div>

        {/* Download CV Button */}
        <div className="absolute bottom-8 right-8 z-20">
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