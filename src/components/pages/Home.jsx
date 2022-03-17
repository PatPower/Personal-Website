import React from 'react'
import '../../App.css'
import Footer from '../Footer';
import HeroSection from '../HeroSection'
import { AboutMe, Projects, Skills } from '../../containers'

function Home() {
    return (
        <>
            <HeroSection />
            <AboutMe />
            <Projects />
            <Skills />
            <Footer />
        </>
    )
}

export default Home;