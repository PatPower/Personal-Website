import React from 'react';
import './skills.css'
import SkillsBox from '../../components/SkillsBox/SkillsBox';

const Skills = () => {
    return (
        <div className='skills-container' id='skills'>
            <h1>
                Skills
            </h1>
            <div className="skills-big-container">
                <p>
                    I mainly work on game development for personal games but I also have experience with mobile applications and web development.
                </p>
                <div className="skills-container-categories">
                    <SkillsBox category='Languages' skills={['C#', 'Java', 'C++', 'Swift', 'Javascript', 'Python', 'SQL', 'C']} />
                    <SkillsBox category='Engines/Frameworks' skills={['Unity','Unreal Engine', 'Gamemaker Studio', 'Node.js', 'React']} />
                    <SkillsBox category='Tools/Other' skills={['Git', 'Xcode', 'Google Cloud Platform','Adobe Photoshop','FL Studio', 'Sony Vegas Pro']}/>
                </div>
            </div>
        </div>
    )
}

export default Skills