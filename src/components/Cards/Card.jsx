import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import './card.css'

function Card({ title, videoUrl, body, skills, githubUrl, demoUrl, website}) {
  const vidRef = useRef(null);
  const playVideo = () => {
    vidRef.current.play();
  }
  const stopVideo = () => {
    vidRef.current.pause();
  }
  return (
    <div className="card-container" onMouseEnter={playVideo} onMouseLeave={stopVideo}>

      <div className="video-container">
        <video ref={vidRef} src={videoUrl} loop muted />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="card-body">
          <p>{body}</p>
        </div>
        <div className="button-area">
          {
            !!(githubUrl) ?
              <a className="social-icon-link github" href={githubUrl} target="_blank" aria-label='Github'>
                <i className="card fab fa-github"></i>
                <p>Github</p>
              </a>
              : ''
          }
          {
            !!(demoUrl) ?
              <a className="social-icon-link github" href={demoUrl} target="_blank" aria-label='Github'>
                <i className='card fa fa-gamepad' />
                <p>Play Demo</p>
              </a>
              : ''
          }
                    {
            !!(website) ?
              <Link className="social-icon-link github" to={website} target="_blank"  aria-label='Github'>
                <i className='card fa fa-gamepad' />
                <p>Website</p>
              </Link>
              : ''
          }
        </div>
        <div className="skillBox-area-card">
          {skills.map((skill) => (
            <div className="skillBox">
              <h5>
                {skill}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card