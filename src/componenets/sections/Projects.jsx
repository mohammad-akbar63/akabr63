import React, { useState } from 'react'
import ProjectsCard from '../cards/ProjectsCard'
import data from '../../data/Projects.json'



const Projects = () => {
    const [show, setShow] = useState(4)
    const [text, setText] = useState('more')

    const handleClick = () => {
        if (show == 4) {
            setShow(data.length)
            setText('less')
        } else {
            setShow(4)
            setText('more')
        }
    }

    return (
        <>
            <div id='projects'>
                <h3 className='heading'><span className="green">03.</span> some things that i've built</h3>
                <ProjectsCard show={show} />
                <div className="btn-box">
                    <button className='mybtn' onClick={handleClick}>{text} projects</button>
                </div>

            </div>

        </>
    )
}

export default Projects
