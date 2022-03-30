import React from 'react'
import './skillsBox.css'

function SkillsBox({ category, skills }) {
  return (
    <div className="skillBox-container">
      <p>
        {category}
      </p>
      <div className="skillBox-area">
        {skills.map((skill) => (
          <div className="skillBox">
            <h5>
              {skill}
            </h5>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsBox