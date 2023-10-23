import React from 'react'
import data from '../../data/Projects.json'
import AOS from 'aos';
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";


const ProjectsCard = ({ show }) => {
    AOS.init();
    return (

        data.slice(0, show).map((e) => {
            return (
                <div className='row' key={e.id} data-aos="fade-down-right"
                    data-aos-easing="linear">
                    <div className='col-lg-6 order-lg-1 order-2' >
                        <div className="p-text">
                            <span className='green'>project</span>
                            <h3>{e.title}</h3>
                            <p className='about'>{e.about.slice(0, 200)}</p>

                            <p>
                                {e.tags.map((tag, index) => <span className='tag' key={index}>{tag}</span>)}
                            </p>
                            <p>
                                {e.github && <a className='github' href={e.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>}
                                {e.link && <a className='demo' href={e.link} target="_blank" rel="noopener noreferrer" ><FaArrowUpRightFromSquare /></a>}
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-6 order-lg-2 order-1' data-aos="fade-left">
                        <div className="p-img">
                            <a href={e.link} target="_blank" rel="noopener noreferrer" className='img-box'>
                                <img src={e.image} alt="project" className='img-fluid' /></a>
                        </div>
                    </div>
                </div>
            )
        })

    )


}

export default ProjectsCard
