"use client";
import { Kanit } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const kanit = Kanit({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});

const Nav = ({type}:{type:string}) => {
  const pathname = usePathname();
  return (
    <nav
      className={
        type === "header"
          ? "w-full xl:w-[1200px] h-[50px] flex justify-end items-center  absolute z-10 top-0"
          : "w-full xl:w-[1200px] h-[50px] flex justify-center items-center "
      }
    >
      <div className="w-[420px] flex justify-center items-start gap-2 absolute">
        <Link href={"/about"}>
          <h5
            className={
              kanit.className +
              (pathname === "/about"
                ? " text-yellow-500"
                : " cursor-pointer hover:text-amber-300")
            }
          >
            About Me
          </h5>
        </Link>
        |
        <Link href={"/projects"}>
          <h5
            className={
              kanit.className +
              (pathname === "/projects"
                ? " text-yellow-500"
                : " cursor-pointer hover:text-amber-300")
            }
          >
            My Projects
          </h5>
        </Link>
        |
        <Link href={"/blogs"}>
          <h5
            className={
              kanit.className +
              (pathname === "/blogs"
                ? " text-yellow-500"
                : " cursor-pointer hover:text-amber-300")
            }
          >
            Blogs
          </h5>
        </Link>
        |
        <Link href={"/contact"}>
          <h5
            className={
              kanit.className +
              (pathname === "/contact"
                ? " text-yellow-500"
                : " cursor-pointer hover:text-amber-300")
            }
          >
            Contact Me
          </h5>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
