import React from 'react';
import './skills.css'
import SkillsBox from '../../components/SkillsBox/SkillsBox';

const Skills = () => {
    return (
        <div className='skills-container' id='skills'>
            <h1 className='gradient__text'>
                Skills
            </h1>
            <div className="skills-big-container">
                <div className="skills-container-categories">
                    <SkillsBox category='Languages' skills={['C#', 'Java', 'C++', 'Swift', 'Javascript', 'Python', 'SQL', 'C', 'PHP', 'R']} />
                    <SkillsBox category='Engines/Frameworks' skills={['Unity','Unreal Engine', 'Gamemaker Studio', 'jQuery', 'Node.js', 'React']} />
                    <SkillsBox category='Tools/Other' skills={['Git', 'Xcode', 'Google Cloud Platform', 'Trello','Adobe Photoshop','FL Studio', 'Sony Vegas Pro']}/>
                </div>
            </div>
        </div>
    )
}

export default Skills