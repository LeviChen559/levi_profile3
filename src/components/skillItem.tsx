"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export interface ImageProps {
  id: number;
  src: string;
  alt: string;
}

const SkillItem = (props: ImageProps) => (
  <motion.div
    className="clip-skill-item flex justify-center items-center"
    initial={{opacity:0}}
    animate={{opacity:1,scale:[1,1.25,.75,1]}}
    transition={{
      ease: "linear",
      duration: 2,
      x: { duration: 1 },
      delay: props.id,
    }}
  >
    <Image src={props.src} alt={props.alt} width={72} height={72} />
  </motion.div>
);

export default SkillItem;
