"use client";
import React from "react";
import Nav from "@/components/nav";
import { MdVerticalAlignTop } from "react-icons/md";
function Footer() {
  return (
    
    <div
      className="w-screen h-[20rem] overflow-hidden  relative object-cover flex justify-center z-100 bottom-0  
      md:h-[25rem]
      xl:h-[40rem]
    "
    >
      <svg
        className="absolute bottom-28 md:bottom-32"
        viewBox="0 0 1728 328"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMin slice"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1728 220.589V338H3.05176e-05V305.781C138.914 176.823 334.714 172.939 535.086 168.964C637.928 166.924 741.975 164.859 840.153 145.848C915.91 131.178 990.754 103.832 1064.75 76.7947C1219.04 20.4214 1369.65 -34.6082 1517.19 29.4118C1609.72 69.5622 1675.28 138.302 1728 220.589Z"
          style={{ fill: "var(--main-background-light)" }}
        ></path>
      </svg>
      <div className="w-full h-32 absolute bottom-0 text-black z-5 flex flex-col justify-center items-center gap-4" style={{background:"var(--main-background-light)" }}>
        <Nav type="footer"/>
        <MdVerticalAlignTop color="var(--main-background-dark)" fontSize={20}/>
        <h6 className="text-center">© Levi Chen 2024</h6>
      </div>
    </div>

  );
}

export default Footer;
