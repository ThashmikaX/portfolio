"use client";

import React, { useEffect, useState } from "react";
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import Sudesh from "../../public/assets/sudesh.png";
import PointerIcon from "../../public/assets/pointer-icon.svg";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import Engineer from "@/../public/assets/Engineer.svg";

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
    <div className="min-h-screen bg-white px-4 py-16 sm:px-6 lg:px-8">
      {/* Main Content Container */}
      <div className="min-h-screen max-w-screen justify-center">
        {/* Typography Layer */}
        <div className="mx-auto items-center justify-center text-center lg:mt-10 h-[100px] mt-20">
          <h1 className="flex mx-auto flex-col items-center justify-center">

            {/* <div className="h-[20vw] flex items-center justify-center w-full z-999">
              <TextHoverEffect text="Engineer" />
            </div> */}

            {/* <svg width="100%" height="300">
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
            </svg> */}

            <div className=" flex items-center justify-center w-full z-999">
              <Image className="h-[15vw]" src={Engineer} alt="Engineer" />
            </div>
            
            <div className="flex items-center lg:mt-[-6vw] mx-auto mt-[-8vw]">
              <span className="text-[15vw] mr-4 text-[#161616]">&</span>
              <span className="text-[15vw] text-[#161616]">
          Designer
              </span>
            </div>
          </h1>
          {/* Download button for mobile */}
          <button 
            onClick={handleDownload}
            className="px-6 py-3 bg-black text-white font-medium rounded hover:bg-gray-800 transition-colors z-50 lg:opacity-0"
          >
            Download CV
          </button>
        </div>

        

        {/* Image Container */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full lg:w-150 opacity-0 lg:opacity-100">
          <div>
            <FollowerPointerCard
        title={
          <TitleComponent
            title="Sudesh Thashmika"
            avatar={PointerIcon}
          />
        }
      >
          <Image
            src={Sudesh}
            alt="Profile"
            className=" mx-auto -z-20"
              />
              </FollowerPointerCard>
            </div>
            
           
        </div>

        <div className="absolute bottom-0">

        <FollowerPointerCard
        title={
          <TitleComponent
            title="Sudesh Thashmika"
            avatar={PointerIcon}
          />
        }
      >

        {/* Image Container for mobile*/}
        <div className=" bottom-0 z-0 w-full lg:w-150 lg:opacity-0 lg:absolute mb-0 mt-auto">
          <Image
            src={Sudesh}
            alt="Profile"
            className=" mx-auto"
            />
            
          </div>
          
          </FollowerPointerCard>
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

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: StaticImageData;
}) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);