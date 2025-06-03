import React from "react";

const educationContent = [
  {
    year: "2023-2024",
    degree: "Full-Stack Web Developer Junior",
    dinstitute: "Rupani Foundation-WFP",
    details: `  Completed a comprehensive program in full-stack web development, focusing on both front-end and back-end technologies.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.dinstitute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
