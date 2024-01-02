import { Fragment, useEffect, useState } from "react";
import { Servicehashtag } from "../utilits";
import ServicePopup from "./popup/ServicePopup";

const serviceData = [
  {
    name: "Web Application Development",
    img: "img/service/1.jpg",
    description: [
      `As a seasoned web developer, I wield both the MEAN and MERN stacks like trusty tools, crafting dynamic and engaging web experiences. My expertise doesn't just lie in coding; it extends to crafting full production-grade applications and e-commerce sites from scratch.`,
      `The MEAN stack, with its robust MongoDB database, Express.js server-side framework, AngularJS front-end framework, and Node.js runtime, is my go-to for large-scale enterprise projects. Its tight integration and familiar MVC architecture streamline development, allowing me to build complex functionalities with rapid efficiency. AngularJS provides a structured approach to building highly interactive UIs, while Node.js' asynchronous nature ensures lightning-fast performance even under heavy loads.`,
      `But for smaller, dynamic projects, I switch gears to the MERN stack. Replacing AngularJS with the nimble ReactJS library injects an extra dose of flexibility and dynamism. React's component-based architecture allows me to create modular, reusable UI elements, perfect for rapid prototyping and iterative development. This makes MERN ideal for single-page applications and interactive UIs that demand constant evolution.`,
      `My skillset extends beyond the core stacks. I'm well-versed in building and publishing NPM packages, expanding the available functionalities for developers worldwide.`,
      `Whether you need a data-driven enterprise solution or a sleek e-commerce platform, I have the expertise and the tools to bring your vision to life. My mastery of both MEAN and MERN empowers me to choose the ideal stack for your project, ensuring optimal performance, scalability, and maintainability. So, let's collaborate, and together, we'll build remarkable web experiences that captivate and engage.`,
    ],
  },
  {
    name: "Performance & Efficiancy",
    img: "img/service/2.jpg",
    description: [
      `I code for peak performance, crafting production-ready web apps and e-commerce sites in both MEAN and MERN stacks. MEAN's structured foundation excels in large-scale projects, while MERN's React magic delivers lightning-fast, dynamic UIs. Whether optimizing database queries or architecting efficient server-side logic, I leverage every tool in my arsenal – including custom NPM packages – to build blazing-fast, scalable web experiences that leave users and clients impressed. Bring your vision, I'll fuel it with efficiency`,
    ],
  },
  {
    name: "UX/UI Design",
    img: "img/service/3.jpg",
    description: [
      `I'm a UX/UI maestro, breathing life into web apps through pixel-perfect interfaces, be it MEAN or MERN. I transform Figma (or any design tool) magic into production-ready masterpieces, ensuring your app is not just functional, but a joy to navigate. Whether it's a full-fledged e-commerce platform or a data-driven enterprise solution, I craft responsive UIs that adapt seamlessly to any screen, captivating users across devices.`,
    ],
  },
  {
    name: "Debugging & Fixes",
    img: "img/service/4.jpg",
    description: [
      `Web woes got you down? No worries, I'm a debugging ninja, slaying bugs in both MEAN and MERN stacks. Production-grade web apps, e-commerce giants, or sassy SaaS solutions, I untangle their errors with surgical precision. My keen eye spots memory leaks, logic flaws, and server tantrums, then I wield my Node.js know-how and JavaScript mastery to craft elegant fixes. Performance lagging? I optimize code like a Formula One pit crew. User Interface acting up? I'll rearchitect layouts and styles with React's finesse. So, ditch the debugging dread, I'm here to make your web apps purr!`,
    ],
  },
];

const Services = () => {
  const [current, setCurrent] = useState(0);
  const [activeData, setActiveData] = useState({});
  const [open, setOpen] = useState(false);
  useEffect(() => {
    Servicehashtag();
  }, [current]);

  return (
    <Fragment>
      <ServicePopup
        open={open}
        close={() => setOpen(false)}
        data={activeData}
      />
      <div className="orido_tm_section" id="service">
        <div className="orido_tm_service">
          <div className="container">
            <div className="orido_tm_main_title">
              <h3>
                <span>
                  Services
                  <br />I Provide
                </span>
              </h3>
            </div>
            <div className="service_list">
              <ul>
                {serviceData.map((service, i) => (
                  <li className={current == i ? "current" : ""} key={i}>
                    <div className="list_inner">
                      <div className="left">
                        <span className="number">{`0${i + 1}`}</span>
                        <h3 className="title">{service.name}</h3>
                      </div>
                      <div className="right">
                        <div className="text">
                          <p>{service.description[0].substring(0, 105)}...</p>
                        </div>
                        <div className="arrow">
                          <img
                            className="svg"
                            src="img/svg/top-arrow.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      <a
                        className="orido_tm_full_link c-pointer"
                        onClick={() => {
                          setActiveData(service);
                          setOpen(true);
                          setCurrent(i);
                        }}
                      />
                      {/* Modalbox Info Start */}
                      <img
                        className="popup_service_image"
                        src="img/service/1.jpg"
                        alt=""
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <span className="ccc" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Services;
