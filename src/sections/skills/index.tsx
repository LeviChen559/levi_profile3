import SkillItem, { ImageProps } from "@/components/skillItem";
import React from "react";

function Skills() {
  const skils = [
    { id: 0, src: "/Figma-icon.png", alt: "Figma-icon" },
    { id: 1, src: "/Figma-icon.png", alt: "Figma-icon" },
    { id: 2, src: "/Figma-icon.png", alt: "Figma-icon" },
    { id: 3, src: "/Figma-icon.png", alt: "Figma-icon" },
  ];
  return (
    <div className="w-10/12 xl:w-[1280px]">
      <h5 className="text-3xl mb-[12px]">Skill set</h5>
      <div className="w-full grid grid-col-4 grid-flow-col  p-16 place-items-center ">
        {skils.map((skill: ImageProps) => (
          <SkillItem
            key={skill.id}
            src={skill.src}
            alt={skill.alt}
            id={skill.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
