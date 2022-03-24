import React, { useState, useEffect } from 'react';
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'
import { Projects } from '../containers'


function HeroSection() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <div className='hero-container' id='home'>
            <video src="/videos/video-hero.mp4" autoPlay loop muted />
            <div className="hero-container-main">
                <div className="hero-container-left">
                    <h1 className='gradient__text'>PAT WEBSITE</h1>
                    <p>I'm a recent university graduate. I have been programming for 7+ years and created small personal games using several game engines and programming languages such as Unity, Unreal Engine, Game Maker Studio, Java, C#, and JavaScript.</p>
                    <div className="hero-btns">
                        <a className="hero-social-icon hero-github" href='https://github.com/PatPower/' target="_blank" aria-label='Github'>
                            <i className="card fab fa-github"></i>
                            <p>Github</p>
                        </a>
                    </div>

                </div>
                <div className="hero-container-right">

                </div>
            </div>
        </div>
    )
}

export default HeroSection