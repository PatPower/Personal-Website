import React from 'react'
import '../../App.css'
import './home.css'
import Footer from '../Footer';
import HeroSection from '../HeroSection'
import { AboutMe, Projects, Skills } from '../../containers'

function Home() {
    return (
        <>
            <HeroSection />
            <div className="project-skills-box">
                <Projects />
                <Skills />
            </div>
        </>
    )
}

export default Home;