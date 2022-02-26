import React, { useRef } from 'react'
import './card.css'

function Card({ title, imageUrl, body }) {
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
        <video ref={vidRef} src="/videos/video-2.mp4" loop muted />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="card-body">
          <p>{body}</p>
        </div>
      </div>
      <div className="card-btn">
        <button>
          <a>
            View More
          </a>
        </button>
      </div>
    </div>
  )
}

export default Card