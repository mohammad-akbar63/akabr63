import React from 'react'
import AOS from 'aos'
const Myself = () => {
    AOS.init()
    return (
        <>
            <section id="myself">
                <div className="container" data-aos="fade-down"
                    data-aos-easing="ease-in">
                    <span className='green'>hello everyone! my name is</span>
                    <h2 className='dg'>mohammad akbar</h2>
                    <h2 className='lg'>i build things for web</h2>
                    <p>I'm an experienced Front-End Web Developer skilled in React, HTML, CSS, and JavaScript. <br />
                        I excel at creating user-friendly, visually appealing websites that drive business results<br />
                        through effective collaboration and a deep understanding of design and user preferences.
                    </p>
                    <a href='#contact' className='mybtn'>get in touch</a>
                </div>
            </section >
        </>
    )
}

export default Myself