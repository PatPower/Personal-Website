import React from 'react';
import './aboutMe.css'

const AboutMe = () => {
    return (
        <div className='aboutMe-container' id='about-me'>
            <h1 className='gradient__text'>
                About Me
            </h1>
            <p>
                Hi, I'm a software developer working at General Motors Canada. I'm also currently working on a project called Hacking Game and it is still on the early stages of development.
                You can learn more about the game <a href="/hackinggame">here</a>.
                
                <br/>
                <br/>
                I grew up programming modifications for PC games and that sprouted my passion for creating games. I have used several game engines such as Unity, Unreal Engine, Game Maker Studio, Godot and more.
                <br/>
                <br/>
                In my spare time, I create music for my games using FL Studio, rock climb, play board games, or just work on more random games.
            
                
            </p>

        </div>
    )
}

export default AboutMe