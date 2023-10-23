import React from "react";
import Img from "../../assets/img/me.jpg";
import SkillCard from "../cards/SkillCard";
import AOS from 'aos';
const About = () => {
    AOS.init();
    return (
        <>
            <section id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4" data-aos="flip-left">
                            <div className="img-box me-box w-sm-50">
                                <img src={Img} alt="me" className="img-fluid me" />
                            </div>
                        </div>
                        <div className="col-lg-8 p-3" data-aos="fade-down-right"
                            data-aos-easing="linear"
                            data-aos-duration="1000">
                            <h3 className="heading">
                                <span className="green">01.</span> about me
                            </h3>
                            <p>
                                Greetings! I'm Mohammad Akbar, an accomplished Front-End Web
                                Developer with expertise in React, HTML, CSS, and JavaScript. I
                                bring a wealth of experience in crafting compelling and
                                innovative websites that captivate users and drive tangible
                                business outcomes.
                            </p>

                            <p>
                                My profound understanding of design principles and user
                                preferences empowers me to create web experiences that are both
                                user-friendly and visually appealing, with React as my primary
                                framework.
                            </p>
                            <p>
                                Here are a few technologies I've been working with recently:
                            </p>
                            <SkillCard />
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
