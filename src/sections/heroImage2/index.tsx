"use client";
import React from "react";
import Image from "next/image";
import HeroSahpe from "@/components/heroShape";
import HeroText from "@/components/heroText";
import { motion } from "framer-motion";

 interface heroImageProps{
   title: React.ReactNode;
   img:string
 }
const HeroImage=(props:heroImageProps)=> {
  return (
    <div
      className="w-screen h-[30rem] overflow-hidden relative object-cover flex justify-center z-0 
    lg:h-[40rem] xl:h-[50rem]
    "
    >
      <Image
        src={props.img}
        alt=""
        fill
        objectFit="cover"
        className="z-0 grayscale-[85%]  heroImage-animation"
      />

      <svg
        className="clip-heroImage"
        viewBox="0 0 1728 508"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMin slice"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 0.371033C36.1946 56.6596 76.0715 110.349 114.982 159.785C247.819 328.554 450.009 419.846 662.698 450.008C824.252 472.919 970.533 408.458 1119.44 342.838C1142.8 332.545 1166.22 322.223 1189.78 312.206C1242.05 289.979 1297.36 271.127 1352.61 252.293C1496.27 203.328 1639.56 154.49 1728 46.8234V508H0V0.371033Z"
          style={{ fill: "var(--main-background)" }}
        ></path>
      </svg>
      <div className="w-8/12 flex justify-around flex-col  h-[25rem] md:w-[768px] md:flex-row lg:h-[45rem] xl:h-[50rem] md:justify-center  z-10 xl:w-[1280px]">
        <HeroText  title={props.title}/>
      </div>
    </div>
  );
}

export default HeroImage;
