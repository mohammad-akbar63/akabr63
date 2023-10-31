import React, { useState } from 'react'
import "../..//assets/css/mobmenu.css"
import logo from '../..//assets/img/logo.png'
import { FaBarsProgress } from "react-icons/fa6";
import { BsFillCloudDownloadFill } from "react-icons/bs";
import resume from '../..//assets/resume/resume.pdf'
import Social from './Social'
import Aos from 'aos';

const Mobmenu = () => {
    Aos.init()
    const [show, setShow] = useState(false)
    return (
        <div className='mobmenu'>
            <FaBarsProgress className='h-icons' onClick={(e) => setShow(!show)} />
            <a href="/">
                <img src={logo} className='logo' alt="LOGO" />
            </a>
            {show ? (
                < nav className='mob-nav' data-aos="ease-out-back" data-aos-duration="3000"  >
                    <FaBarsProgress className='x-icon' onClick={(e) => setShow(!show)} />
                    <ol>
                        <li><a href="#about">about</a></li>
                        <li><a href="#work">work</a></li>
                        <li><a href="#projects">projects</a></li>
                        <li><a href="#contact">contact</a></li>
                    </ol>
                    {show ? <Social /> : null}

                </nav>
            ) : null
            }
            <a href={resume} className='h-icons' download="Akbar's Resume.pdf"><BsFillCloudDownloadFill /></a>
        </div>
    )
}

export default Mobmenu