import React from 'react'
import '../../App.css'
import './home.css'
import Footer from '../Footer';
import HeroSection from '../HeroSection'
import {Projects, Skills, AboutMe} from '../../containers'

function Home() {
    return (
        <>
            <HeroSection />
            <AboutMe/>
            <div className="project-skills-box">
                <Projects />
                <Skills />
            </div>
            <Footer />
        </>
    )
}

export default Home;