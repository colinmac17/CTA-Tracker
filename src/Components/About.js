import React from 'react';

const NameList = [
    {
        name: 'Pedro Rebollar',
        github: 'https://github.com/prebollar15',
    },
    {
        name: 'Harsha Puvvada',
        github: 'https://github.com/puvvadaharsha',
    },
    {
        name: 'Yu Qian',
        github: 'https://github.com/rayqian',
    },
    {
        name: 'Colin McAtee',
        github: 'https://github.com/colinmac17',
    },
]

const TechList = [
    "ReactJS", "JSX", "HTML", "Github" 
]

const TeamInfo = (props) => {
    return(
        <div>
            <p>Team members:
                <ul>
                    {NameList.map(item => (
                        <li key = {item}>
                            <div>{item.name}</div>
                            <a href={item.github} title={item.github}>Github</a>
                        </li>
                    ))}
                </ul>
            </p>
        </div>
    )
}

const TechUsed = (props) => {
    return(
        <div>
            <p>Technologies used:
                <ul>
                    {TechList.map((item) =>(
                        <li>{item}</li>
                    ))}
                </ul>
            </p>
        </div>
    )
}
const About = (props) => {
    return(
            <div>
                <h2>About</h2>
                <TeamInfo/>
                <TechUsed/>
            </div>
    )
}

export default About;

