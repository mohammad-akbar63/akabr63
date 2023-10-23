import React, { useState } from 'react'
import data from '../../data/Work.json'
import AOS from 'aos';

const Tabs = () => {
    AOS.init();
    const [ctab, setCtab] = useState(1)
    const handleTab = (e) => {
        setCtab(e.target.id)
    }

    return (
        <>
            <div className='tabs'>
                {data.map((e, i) => {
                    return (
                        <button key={i} id={e.id} disabled={ctab == e.id} onClick={handleTab}>
                            {e.organization.slice(0, 12)}
                        </button>
                    )
                })}
            </div>
            <div className="content" data-aos="fade-down"
                data-aos-easing="linear">
                {data.map((e, i) => {

                    return (
                        <div key={i}>
                            {ctab == e.id &&
                                <>
                                    <h4>{e.designation}</h4>
                                    <h5>{e.organization}</h5>
                                    <span>{e.location}</span>
                                    <h6>{e.join + '-' + e.quit}</h6>
                                    <ul>{e.responsibilities.slice(0, 4).map((w, i) => {
                                        return (
                                            <li key={i}>{w}</li>
                                        )
                                    })}</ul>
                                </>
                            }
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Tabs