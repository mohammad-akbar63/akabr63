import React from 'react'
import '../..//assets/css/webmenu.css'

import logo from '../..//assets/img/logo.png'
import resume from '../..//assets/resume/resume.pdf'

const Webmenu = () => {
    return (
        <div className='webmenu'>
            <a href="/">
                <img src={logo} className='logo' alt="" />
            </a>
            < nav >
                <ol>
                    <li><a href="#about">about</a></li>
                    <li><a href="#work">work</a></li>
                    <li><a href="#projects">projects</a></li>
                    <li><a href="#contact">contact</a></li>
                </ol>
                <a href={resume} className='mybtn' download="Akbar's Resume.pdf">resume</a>
            </nav>
        </div>
    )
}

export default Webmenu