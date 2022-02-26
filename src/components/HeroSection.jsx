import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'

function HeroSection() {
    return (
        <div className='hero-container' id='home'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1 className='gradient__text'>PAT WEBSITE</h1>
            <p>pat</p>
            <div className="hero-btns">
                <Button className='btns' buttonStle='btn--outline' buttonSize='btn--large'>
                    Pat Button
                </Button>
                <Button className='btns' buttonStle='btn--primary' buttonSize='btn--large'>
                    Second Button <i className='fa fa-gamepad' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection