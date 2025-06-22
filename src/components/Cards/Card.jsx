import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import './card.css'

function Card({ title, videoUrl, gifUrl, body, skills, githubUrl, demoUrl, website }) {
  const vidRef = useRef(null);
  const playVideo = () => {
    if (vidRef.current && !gifUrl) {
      vidRef.current.play().catch(error => {
        // Handle autoplay failure silently
        console.log('Video autoplay failed:', error);
      });
    }
  }
  const stopVideo = () => {
    if (vidRef.current && !gifUrl) {
      vidRef.current.pause();
    }
  }
  return (
    <div className="card-container" onMouseEnter={playVideo} onMouseLeave={stopVideo}>

      <div className="video-container">
        {gifUrl ? (
          <img
            src={gifUrl}
            alt={title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <video
            ref={vidRef}
            src={videoUrl}
            loop
            muted
            playsInline
            preload="metadata"
            webkit-playsinline="true"
            controls={false}
            disablePictureInPicture
          />
        )}
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
              <a className="link-btn" href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label='Github'>
                <i className="card fab fa-github"></i>
                <p>Github</p>
              </a>
              : ''
          }
          {
            !!(demoUrl) ?
              <a className="link-btn" href={demoUrl} target="_blank" rel="noopener noreferrer" aria-label='Github'>
                <i className='card fa fa-gamepad' />
                <p>Play Demo</p>
              </a>
              : ''
          }
          {
            !!(website) ?
              <a className="link-btn" href={website} target="_blank" aria-label='Github'>
                <i className='card fa fa-globe' />
                <p>Website</p>
              </a>
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