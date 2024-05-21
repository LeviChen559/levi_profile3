'use client';
import { motion } from "framer-motion"
import Image from "next/image";

 const HeroSahpe = () => (
  <div className="w-6/12 h-[500px] flex justify-center items-center w-full md:h-full">
  <motion.div
    animate={{ rotate: [0, 360] }}
    transition={{
      duration: 60,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeat: Infinity,
      repeatDelay: 1,
    }}
    className=" clip-heroShape2"
  >
    <motion.div
      animate={{ rotate: [360, 0] }}
      transition={{
        duration: 60,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1,
      }}
    >
      <Image
        src="/LeviChen2.png"
        alt=""
        width={1000}
        height={1449}
        objectFit="cover"
        className="mt-[-100px] ml-[-50px]"
      />
    </motion.div>
  </motion.div>
  <div className="clip-heroShape3 clip-heroShape3-color" />
  <div className="clip-heroShape4 clip-heroShape4-color" />
  <div className="clip-heroShape5 clip-heroShape5-color" />
</div>
)

export default HeroSahpe