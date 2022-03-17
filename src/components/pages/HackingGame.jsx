import React from 'react'
import './hackinggame.css'

function HackingGame() {
    return (
        <>
            <div className='hackinggame-container'>
                <video src="/videos/video-hackinggame.mp4" autoPlay loop muted />
                <h1>
                    Hacking Game
                </h1>
                <p>
                    The Game
                </p>
            </div>
            <div className="about-game">
                <video src="/videos/video-hackinggame-aboutgame.mp4" autoPlay loop muted />
                <div className="about-game-description">
                    <p>
                        Scavenge the internet and discover the secrets of this world but be careful, don't trust everyone you meet online.
                    </p>
                    <br></br>
                    <h2>
                        Features
                    </h2>
                    <ul>
                        <li>Explore the web</li>
                        <li>Find secrets embedded in the computer</li>
                        <li>Make friends or enemies with people you meet online</li>
                        <li>Dozens of applications to unlock</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default HackingGame;