import React from 'react'
import data from '../../data/Skills.json'

const SkillCard = () => {
    return (
        data.map((e) => {
            return (
                <div key={e.type} className='skill'>
                    {e.list.map((l) => {
                        return (
                            <li key={l.name}>
                                <img src={l.icon} alt="skill" className='skill' width={20} height={20} />
                                <strong>{l.name}</strong>
                            </li>
                        )
                    })}
                </div>
            )
        })
    )
}

export default SkillCard
