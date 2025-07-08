import React from "react";

const skillsContent = [
  { skillClass: "p65", skillPercent: "65", skillName: "C#" },
  { skillClass: "p60", skillPercent: "60", skillName: "Laravel" },
  { skillClass: "p70", skillPercent: "70", skillName: "Java" },
  { skillClass: "p95", skillPercent: "95", skillName: "Git" },
  { skillClass: "p70", skillPercent: "70", skillName: "Next.js" },
  { skillClass: "p75", skillPercent: "75", skillName: "NestJS" },
  { skillClass: "p80", skillPercent: "80", skillName: "React" },
  { skillClass: "p80", skillPercent: "80", skillName: "Payload CMS" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
