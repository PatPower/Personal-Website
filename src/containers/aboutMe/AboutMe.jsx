import React from 'react';
import './aboutMe.css'

const AboutMe = () => {
    return (
        <div className='aboutMe-container' id='about-me'>
            <div className='aboutMe-content-box'>
                <h1 className='gradient__text'>
                    About Me
                </h1>
                <p>
                    Hi, I’m a software developer passionate about creating engaging experiences through games and applications. I’m currently working on a personal project, which is still in its early stages and will post more about it soon on here.
                    <br /><br />
                    My programming journey began in 2015, when I started building mods and server plugins for PC games. Since then, I’ve explored game development with engines like Unity, Unreal Engine, Game Maker Studio, and Godot.
                    <br /><br />
                    Outside of coding, I compose music for my games using FL Studio, experiment with new technologies, maintain a home lab, enjoy board games, and brainstorm new game ideas for fun.
                </p>
            </div>
        </div>
    )
}

export default AboutMe