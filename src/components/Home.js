const Home = ({ dark }) => {
  return (
    <div className="orido_tm_hero orido_tm_section" id="home">
      <div className="container">
        <div className="content">
          <div className="details">
            <div className="short">
              <h3>
                Hamza Aslam <img className="svg" src="img/svg/hi.svg" alt="" />
              </h3>
              <span className="job">Software Engineer</span>
            </div>
            <div className="text">
              <p>
                Leveraging years of web development expertise to create
                impactful online experiences tailored to your unique needs.
              </p>
            </div>
            <div className="buttons">
              <div className="orido_tm_boxed_button">
                <a className="anchor" href="#contact">
                  Say Hello{" "}
                  <img className="svg" src="img/svg/send.svg" alt="" />
                </a>
              </div>
              <div className="orido_tm_simple_button">
                <a
                  className="line_effect anchor"
                  href="https://www.upwork.com/freelancers/aslamhamza004"
                  target="black"
                >
                  My Upwork{" "}
                  <img className="svg" src="img/svg/upwork-logo.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="orido_tm_follow">
          <span>Follow me:</span>
          <ul>
            <li>
              <a
                href="https://github.com/aslamhamza004"
                target="blank"
                title="Github"
              >
                <img className="svg" src="img/pics/gitLogo.svg" alt="" />
              </a>
            </li>
            {/* <li>
              <a href="#">
                <img className="svg" src="img/svg/social/dribbble.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className="svg"
                  src="img/svg/social/instagarm.svg"
                  alt=""
                />
              </a>
            </li> */}
          </ul>
        </div>
      </div>
      <div className="orido_tm_down">
        <a className="anchor" href="#about">
          <img
            className="svg"
            src={`img/svg/${dark ? "down_button_light" : "down_button"}.svg`}
            alt=""
          />
        </a>
      </div>
      <div className="avatar">
        <div className="img">
          <img src={`img/pics/myPhoto.png`} alt="" />
          {/* <div className="video_button">
            <a
              className="popup-youtube"
              href="https://www.youtube.com/watch?v=7e90gBu4pas"
            >
              <img className="anim_circle" src="img/hero/welcome.png" alt="" />
              <img className="svg" src="img/svg/play.svg" alt="" />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Home;
