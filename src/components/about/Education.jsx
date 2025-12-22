import React from "react";

const educationContent = [
  {
    year: "2016 – 2019",
    degree: "High School Diploma",
    dinstitute: "Ahmad Shah Masoud High School",
    details:
      "Completed secondary education with a strong academic foundation and early interest in technology and problem-solving.",
  },

  {
    year: "2020 – 2024",
    degree: "Bachelor of Computer Science",
    dinstitute: "Kabul University",
    details:
      "Studied core computer science subjects with a focus on web development, databases, and software engineering. Gained hands-on experience with modern full-stack technologies.",
  },
  {
    year: "2025 – Present",
    degree: "Master of Computer Applications (MCA)",
    dinstitute:
      "Guru Jambheshwar University of Science & Technology (GJUST), India",
    details:
      "Currently pursuing advanced studies in software development, system design, databases, and modern application technologies.",
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-graduation-cap"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font"> — {val.dinstitute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
