import Achievements from "./Achievements";
import Education from "./Education";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";
import cv from "../../assets/img/cv.png";
import heroImgMobile from "../../assets/img/hero/img-mobile.webp";
import React, { useState } from "react";
import Modal from "react-modal";
import cancelImg from "../../assets/img/cancel.svg";
import "./index.css"; // ✅ Make sure to import your CSS file

const heroContent = {
  heroBtn: "My CV",
};

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <section className="main-content">
      <div className="container">
        <div className="row">
          {/* Personal Info Starts */}
          <div className="col-xl-6 col-lg-5 col-12">
            <div className="row">
              <div className="col-12">
                <h3 className="text-uppercase custom-title mb-0 ft-wt-600">
                  personal info
                </h3>
              </div>

              <div className="col-12 d-block d-sm-none">
                <img
                  src={heroImgMobile}
                  className="img-fluid main-img-mobile"
                  alt="about avatar"
                />
              </div>

              <div className="col-12">
                <PersonalInfo />
              </div>

              <div className="col-12 mt-1">
                <button className="button" onClick={toggleModalOne}>
                  <span className="button-text">{heroContent.heroBtn}</span>
                  <span className="button-icon fa fa-arrow-right"></span>
                </button>
              </div>
            </div>
          </div>

          {/* Achievements Starts */}
          <div className="col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
            <Achievements />
          </div>
        </div>

        <hr className="separator" />

        {/* Skills Starts */}
        <div className="row">
          <div className="col-12">
            <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">
              My Skills
            </h3>
          </div>
          <Skills />
        </div>

        <hr className="separator mt-1" />

        {/* Experience & Education Starts */}
        <div className="row">
          <div className="col-12">
            <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
              Experience <span>&</span> Education
            </h3>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="resume-box">
              <Experience />
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="resume-box">
              <Education />
            </div>
          </div>
        </div>
      </div>

      {/* Modal for CV */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal dark hero"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <img src={cancelImg} alt="close icon" />
          </button>

          <div className="box_inner about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  My <span>CV</span>
                </h1>
              </div>

              {/* CV Image */}
              <div className="cv-preview-container">
                <img src={cv} alt="CV Preview" className="cv-preview-img" />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default Index;
