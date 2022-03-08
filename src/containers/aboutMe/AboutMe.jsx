import React from 'react';
import './aboutMe.css'

const AboutMe = () => {
    return (
        <div className='aboutMe-container' id='about-me'>
            <h1>
                About Me
            </h1>
            <p>
                I program, compose music, and design games.
            </p>
            <div className="player">
                <iframe className='player' style={{ border: 0, width: 100 + '%', height: 42 + 'px' }} src="https://bandcamp.com/EmbeddedPlayer/track=1073391520/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless>
                    <a href="https://patsmusic.bandcamp.com/track/underground">Underground by Pats</a></iframe>
                <iframe style={{ border: 0, width: 100 + '%', height: 42 + 'px' }} src="https://bandcamp.com/EmbeddedPlayer/track=3215449126/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless><a href="https://patsmusic.bandcamp.com/track/sad-idea">Sad Idea by Pats</a></iframe>
            </div>
        </div>
    )
}

export default AboutMe