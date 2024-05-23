"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export interface ImageProps {
  id: number;
  children: React.ReactNode;
  des?: string;
  name: string;
}

const SkillItem = (props: ImageProps) => {
  const [hover,setHover] = useState<boolean>(false)
  return (
    <motion.div
      className="clip-skill-item flex justify-center items-center cursor-pointer hover:bg-sky-200  "
   onMouseEnter={()=>setHover(true)}
    onMouseLeave={()=>setHover(false)}
    whileHover={{ scale: 1.2 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, scale: [1, 1.25, 0.5, 1] }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        // x: { duration: 1 },
        // delay: props.id,
      }}
      id={props.des}
    >
      {
      hover?
      <p className="text-2xl" style={{color:"var(--main-color-dark)"}}> {props.name}</p>
      :props.children
      
    
    }
    </motion.div>
  );
};

export default SkillItem;
