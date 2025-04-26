const personalInfoContent = [
  { meta: "first name", metaInfo: "Abdul Musawer" },
  { meta: "last name", metaInfo: "Dinzad" },
  { meta: "Age", metaInfo: "23 Years" },
  { meta: "Nationality", metaInfo: "Afghan" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Afghanistan" },
  { meta: "phone", metaInfo: "+93 744021022" },
  { meta: "Email", metaInfo: "dinzad.musawer@gmail.com" },
  { meta: "github", metaInfo: "immusawer" },
  { meta: "langages", metaInfo: "Dari, English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
