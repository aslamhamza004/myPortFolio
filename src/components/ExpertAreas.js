import { Fragment, useEffect, useState } from "react";
import { filter_hashtag } from "../utilits";
import Counter from "./Counter";

const counts = [
  { name: "Total Projects", value: 5 },
  { name: " Million lines of code", value: 10 },
  { name: "Own Projects", value: 2 },
  { name: "Technologies", value: 9 },
];

const skills = [
  { name: "Next.js", value: "90", icon: "img/svg/nextjsLogo.svg" },
  { name: "React/Next", value: "80", icon: "img/svg/react_logo.svg" },
  { name: "Angular", value: "80", icon: "img/svg/angular.svg" },
  { name: "Rxjs", value: "85", icon: "img/svg/rxjs_logo.svg" },
  { name: "MangoDB", value: "80", icon: "img/svg/mongoDBLogo.svg" },
  { name: "Typecript", value: "90", icon: "img/svg/typescriptLogo.svg" },
  { name: "Express.js", value: "80", icon: "img/svg/expressLogo.svg" },
  { name: "Git", value: "90", icon: "img/pics/gitLogo.svg" },
  { name: "Spring", value: "90", icon: "img/svg/springLogo.svg" },
];

const experiences = [
  {
    company: "Eximia.llc Lahore",
    designation: "Sofware Engineer",
    time: "2019 - Present",
  },
  {
    company: "Freelancing",
    designation: "MEAN stack developer",
    time: "2021 - Present",
  },
];

const educations = [
  {
    institution: "Punjab University College of Information Technology (PUCIT).",
    certificate: "BS Software Engineering",
    time: "2016 - 2020",
  },
  {
    institution: "Punjab Group of Colleges Okara District.",
    certificate: "FSc Pre-Engineering",
    time: "2014 - 2016",
  },
];

const ExpertAreas = () => {
  const [activeTab, setActiveTab] = useState(1);
  const activeContentTab = (value) => (activeTab == value ? "current" : "");

  useEffect(() => {
    filter_hashtag();
  }, [activeTab]);

  return (
    <Fragment>
      <div className="orido_tm_section">
        <div className="orido_tm_informations">
          <div className="container">
            <div className="informations_inner">
              <div className="left">
                <div className="orido_tm_main_title">
                  <h3>
                    <span>My expertise</span>
                  </h3>
                </div>
                <div className="text">
                  <p>
                    {"I'm"} a full-stack chameleon, weaving magic with both the
                    MEAN and MERN stacks! My JavaScript toolbox lets me conjure
                    stunning UIs with React (or ReactJS in MERN) and build
                    robust back-ends with Node.js and Express.js. From crafting
                    pixel-perfect interfaces to designing data havens in MongoDB
                    and shaping secure APIs, every layer is my playground. I
                    love the efficiency of working across the entire stack,
                    taking your ideas from napkin sketch to pixelated reality.
                    {"Let's"} ditch the silos and build something extraordinary,
                    together!
                  </p>
                </div>
                {/* <div className="orido_tm_boxed_button">
                  <a href="#">
                    My Resume{" "}
                    <img className="svg" src="img/svg/paper.svg" alt="" />
                  </a>
                </div> */}
              </div>
              <div className="right">
                <div className="filter">
                  <ul>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(1)}`}
                        onClick={() => setActiveTab(1)}
                        data-tab="tab_1"
                      >
                        <span>Skills</span>{" "}
                        <img
                          className="svg"
                          src="img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(2)}`}
                        onClick={() => setActiveTab(2)}
                        data-tab="tab_2"
                      >
                        <span>Experience</span>{" "}
                        <img
                          className="svg"
                          src="img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(3)}`}
                        onClick={() => setActiveTab(3)}
                        data-tab="tab_3"
                      >
                        <span>Education</span>{" "}
                        <img
                          className="svg"
                          src="img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                  <span className="ccc" />
                </div>
                <div className="content">
                  <div id="tab_1" className={`wrapper ${activeContentTab(1)}`}>
                    <div className="skillbox">
                      <ul>
                        {skills.map((skill, i) => (
                          <li key={i}>
                            <div className="list_inner">
                              <span className="icon">
                                <span className="in">
                                  <img
                                    className="svg"
                                    src={skill.icon}
                                    alt=""
                                  />
                                </span>
                              </span>
                              <p className="name">
                                {skill.name} <span>({skill.value}%)</span>
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div id="tab_2" className={`wrapper ${activeContentTab(2)}`}>
                    <div className="timelinebox">
                      <ul>
                        {experiences.map((experience, i) => (
                          <li key={i}>
                            <div className="list_inner">
                              <div className="time">
                                <span className="year">{experience.time}</span>
                                <span className="company">
                                  {experience.company}
                                </span>
                              </div>
                              <div className="job">
                                <h3>
                                  <span>{experience.designation}</span>
                                </h3>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div id="tab_3" className={`wrapper ${activeContentTab(3)}`}>
                    <div className="timelinebox">
                      <ul>
                        {educations.map((education, i) => (
                          <li key={i}>
                            <div className="list_inner">
                              <div className="time">
                                <span className="year">{education.time}</span>
                                <span className="company">
                                  {education.institution}
                                </span>
                              </div>
                              <div className="job">
                                <h3>
                                  <span>{education.certificate}</span>
                                </h3>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /INFORMATIONS */}
      {/* COUNTER */}
      <div className="orido_tm_section">
        <div className="orido_tm_counter">
          <div className="container">
            <div className="counter_list">
              <ul>
                {counts.map((count, i) => (
                  <li key={i}>
                    <div className="list_inner">
                      <h3>
                        <Counter end={count.value} />
                      </h3>
                      <span className="title">{count.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ExpertAreas;
