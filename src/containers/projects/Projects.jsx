import React from 'react';
import './projects.css'
import Card from '../../components/Cards/Card'

const Projects = () => {
    return (
        <div className='projects-container' id='projects'>
            <h1>
                Projects
            </h1>
            <div className="projects-container-cards">
                <Card title='Multiplayer Game' videoUrl='./videos/video-multiplayer-game.mp4' body='An open world multiplayer game. Played in the browser. Project is on hold.' skills={['Node.js', 'Javascript', 'HTML', 'CSS']} link='/multiplayer-game' githubUrl='https://github.com/PatPower/MultiplayerGame-Node.js' demoUrl='https://patlands.herokuapp.com/'/>
                <Card title='Hacking Game' videoUrl='./videos/video-hackinggame-card.mp4' body='Explore a strange operating system and browse the web in this strange world.' skills={['Unity', 'C#']} link='/' website='/hackinggame'/>
                <Card title='Duo Dungeon' videoUrl='./videos/video-duodungeon-card.mp4' skills={['Unity', 'C#']} body='Game Jam Project' link='/' githubUrl='https://github.com/PatPower/Duo-Dungeon' />
            </div>
        </div>
    )
}

export default Projects