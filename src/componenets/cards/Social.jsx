import React from 'react'
import data from '../../data/Social.json'
import { FaCodepen, FaLinkedinIn, FaGithub, FaInstagram, FaDribbble, FaEnvelope, FaWhatsapp } from "react-icons/fa6";
import Aos from 'aos';
const Social = () => {
    Aos.init()

    let e = data[0]

    return (
        <ul className='social'>
            <li><a href={e.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn /></a></li>
            <li><a href={e.github} target="_blank" rel="noopener noreferrer">
                <FaGithub /></a></li>
            <li><a href={e.codepen} target="_blank" rel="noopener noreferrer">
                <FaCodepen /></a></li>
            <li><a href={e.dribbble} target="_blank" rel="noopener noreferrer">
                <FaDribbble /></a></li>
            <li><a href={e.email} target="_blank" rel="noopener noreferrer">
                <FaEnvelope /></a></li>
            <li><a href={e.Whatsapp} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp /></a></li>
        </ul>
    )
}

export default Social