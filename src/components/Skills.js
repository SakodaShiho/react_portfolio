import React from "react";
import SkillBar from "react-skillbars";
import "../css/Skills.css";

export const Skills = () => {
  const skills = [
    { type: "HTML / CSS", level: 90 },
    { type: "JavaScript", level: 60 },
    { type: "JQuery", level: 60 },
    { type: "React", level: 30 },
    { type: "XD", level: 90 },
    { type: "Photoshop", level: 70 },
    { type: "Illustrator", level: 60 },
  ];
  const colors = {
    bar: "#dcbdaf",
    title: {
      text: "#fff",
      background: "#a6a9b0",
    },
  };

  return (
    <div>
      <div>
        <h1 className="pageTitle">SKILLS</h1>
        <hr />
      </div>
      <div className="skill_bar">
        <SkillBar skills={skills} colors={colors} animationDelay={200} />
      </div>
    </div>
  );
};
