import React from 'react'
import './skillsBox.css'

function SkillsBox({ category, skills }) {
  return (
    <div className="skillBox-container">
      <p>
        {category}
      </p>
      <div className="skillBox-area">
        {skills.map((skill, index) => (
          <div className="skillBox" key={index}>
            <h5>
              <a href={skill.url} target="_blank" rel="noopener noreferrer">
                {skill.name}
              </a>
            </h5>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsBox