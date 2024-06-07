import React from "react";
import AOS from "aos";
const Myself = () => {
  AOS.init();
  return (
    <>
      <section id="myself">
        <div
          className="container"
          data-aos="fade-down"
          data-aos-easing="ease-in"
        >
          <span className="green">hello everyone! my name is</span>
          <h2 className="dg">mohammad akbar</h2>
          <h2 className="lg">i build things for web</h2>
          <p>
            With over 2 years of experience in front end development, I
            specialize in building high-performance web applications using
            NextJS and ReactJS. <br />
            My projects have consistently resulted in improved performance and
            user satisfaction.
            <br />I bring a proactive approach to project leadership and
            technical innovation.
          </p>
          <a href="#contact" className="mybtn">
            get in touch
          </a>
        </div>
      </section>
    </>
  );
};

export default Myself;
