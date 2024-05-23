import Nav from "@/components/nav";
import React from "react";
import Footer from "../footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center relative ">
      <Nav type="header"/>
      <main >{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;