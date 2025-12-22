import React from "react";

const experienceContent = [
  {
    year: "Oct 2025 – Present",
    position: "Full-Stack Web Developer",
    companyName: "WadanTech",
    details:
      "Develop and maintain full-stack web applications, build APIs, manage databases, and optimize performance, security, and UI responsiveness.",
  },
  {
    year: "Oct 2024 – Oct 2025",
    position: "Full-Stack Web Developer",
    companyName: "Peace Global Logistics",
    details:
      "Designed scalable application modules, integrated third-party APIs, collaborated with teams, and handled testing, deployment, and maintenance.",
  },
  {
    year: "Jan 2024 – Sep 2024",
    position: "Junior Full-Stack Web Developer",
    companyName: "Rupani Foundation",
    details:
      "Assisted in feature development, API integration, database tasks, bug fixing, and improving code quality following best practices.",
  },
  {
    year: "Jan 2023 – Jan 2024",
    position: "Product Promoter",
    companyName: "Roshan TDCA",
    details:
      "Promoted telecom products, explained plans and pricing, assisted customers, met sales targets, and reported daily performance.",
  },
  {
    year: "Jan 2022 – Jan 2023",
    position: "Booking Officer",
    companyName: "Obaidullah Shirzad Travel Agency",
    details:
      "Managed flight and hotel bookings, handled customer inquiries, coordinated with suppliers, and maintained booking records.",
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font"> — {val.companyName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
