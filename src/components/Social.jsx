import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-facebook",
    link: "https://www.facebook.com/share/18t5G7BkwS/?mibextid=wwXIfr",
  },
  { iconName: "fa fa-twitter", link: "https://x.com/musawer25?s=21" },
  {
    iconName: "fa fa-instagram",
    link: "https://www.instagram.com/just_musawer?igsh=ZTcyMmFraW5kYXps&utm_source=qr ",
  },
  { iconName: "fa fa-github", link: "https://github.com/immusawer/" },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
