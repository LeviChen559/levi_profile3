"use client";
import { motion } from "framer-motion";
import { Molle, Kanit } from "next/font/google";
import { CiLinkedin } from "react-icons/ci";
const molle = Molle({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});
const kanit = Kanit({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});

const HeroText = () => (
  <div className="w-full flex justify-center items-start flex-col gap-5 md:w-2/6">
    <motion.div
      initial={{ opacity: 0, scale: 1, x: -100 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <motion.h1
        className={
          molle.className +
          " text-2xl font-white leading-tight md:text-4xl xl:text-6xl "
        }
      >
        WEB <br />
        Design &
        <br />
        Development
      </motion.h1>
    </motion.div>
    <motion.div
      className="gap-4"
      initial={{ opacity: 0, scale: 1, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 2, ease: "easeOut", delay: 2 }}
    >
      <h2 className={kanit.className + " text-3xl w-full"}>I am Levi Chen.</h2>
      <h3 className={kanit.className + " text-2xl w-full"}>
        Front-end Developer
      </h3>
      <motion.div
        animate={{ y: [0, -20, -5, -10, 0] }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 4,
          repeat: Infinity,
          repeatDelay: 5,
        }}
      >
        <CiLinkedin
          fontSize={40}
          className="mt-2 hover:text-amber-300 cursor-pointer"
        />
      </motion.div>
    </motion.div>
  </div>
);

export default HeroText;
