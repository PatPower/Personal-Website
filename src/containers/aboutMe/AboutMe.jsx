import React from 'react';
import './aboutMe.css'

const AboutMe = () => {
    return (
        <div className='aboutMe-container' id='about-me'>
            <h1 className='gradient__text'>
                About Me
            </h1>
            <p>
                Hi, I'm a software developer with 3 years of professional experience at General Motors Canada, where I work on Android-based in-vehicle infotainment apps. I’m also currently developing a personal project called Hacking Game, which is still in its early stages — you can learn more about it <a href="/hackinggame">here</a>.
                <br /><br />
                My passion for programming started in 2015, creating mods and server plugins for PC games. Since then, I’ve built games using a variety of engines including Unity, Unreal Engine, Game Maker Studio, and Godot.
                <br /><br />
                In my spare time, I compose music for my games using FL Studio, explore new tech stacks, maintain a home lab, play board games, or work on new game ideas for fun.
            </p>

        </div>
    )
}

export default AboutMe