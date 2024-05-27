"use client";
import SkillItem, { ImageProps } from "@/components/skillItem";
import React from "react";
import { skillData } from "./data";

function Skills() {


  return (
    <div className="w-10/12 xl:w-[1280px]">
      <h5 className="text-3xl mb-[12px]">Skill set</h5>
      <div className="skillset-row ">
        {skillData.map(
          (skill: ImageProps) =>
            skill.des === "design" && (
              <SkillItem key={skill.id} id={skill.id} name={skill.name}>
                {skill.children}
              </SkillItem>
            )
        )}
      </div>
      <div className="skillset-row ">
        {skillData.map(
          (skill: ImageProps) =>
            skill.des === "basic" && (
              <SkillItem key={skill.id} id={skill.id} name={skill.name}>
                {skill.children}
              </SkillItem>
            )
        )}
      </div>
      <div className="skillset-row ">
        {skillData.map(
          (skill: ImageProps) =>
            skill.des === "style" && (
              <SkillItem key={skill.id} id={skill.id} name={skill.name}>
                {skill.children}
              </SkillItem>
            )
        )}
      </div>
      <div className="skillset-row ">
        {skillData.map(
          (skill: ImageProps) =>
            skill.des === "js" && (
              <SkillItem key={skill.id} id={skill.id} name={skill.name}>
                {skill.children}
              </SkillItem>
            )
        )}
      </div>
      <div className="skillset-row ">
        {skillData.map(
          (skill: ImageProps) =>
            skill.des === "react" && (
              <SkillItem key={skill.id} id={skill.id} name={skill.name}>
                {skill.children}
              </SkillItem>
            )
        )}
      </div>
      <div className="skillset-row">
        {skillData.map(
          (skill: ImageProps) =>
            skill.des === "wordpress" && (
              <SkillItem key={skill.id} id={skill.id} name={skill.name}>
                {skill.children}
              </SkillItem>
            )
        )}
      </div>
      <div className="skillset-row">
        {skillData.map(
          (skill: ImageProps) =>
            skill.des === "database" && (
              <SkillItem key={skill.id} id={skill.id} name={skill.name}>
                {skill.children}
              </SkillItem>
            )
        )}
      </div>
      <div className="skillset-row">
        {skillData.map(
          (skill: ImageProps) =>
            skill.des === "tools" && (
              <SkillItem key={skill.id} id={skill.id} name={skill.name}>
                {skill.children}
              </SkillItem>
            )
        )}
      </div>
    
    </div>
  );
}

export default Skills;
