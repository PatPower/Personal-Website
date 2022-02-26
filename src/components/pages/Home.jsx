import React from 'react'
import '../../App.css'
import Footer from '../Footer';
import HeroSection from '../HeroSection'
import { AboutMe, Projects } from '../../containers'
import Skills from '../../containers/skills/Skills';

function Home() {
    return (
        <>
            <HeroSection />
            <Projects/>
            <Skills/>
            <AboutMe/>
            <Footer />
        </>
    )
}

export default Home;