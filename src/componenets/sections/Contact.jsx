import React from "react";
import AOS from "aos";

const Contact = () => {
  AOS.init();
  return (
    <section id="contact" data-aos="fade-down" data-aos-easing="linear">
      <span className="green">04. what's next</span>
      <h2>get in touch</h2>
      <p>
        I'm currently looking for new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I'll try my best to
        get back to you.
      </p>
      <a href="mailto:akbarsoft0@gmail.com" className="mybtn">
        say hello
      </a>
    </section>
  );
};

export default Contact;
