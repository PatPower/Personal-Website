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
                <Card title='Multiplayer Game' videoUrl='./videos/video-multiplayer-game.mp4' body='body text' skills={['Node.js', 'Javascript', 'HTML', 'CSS']} link='/multiplayer-game' githubUrl='https://github.com/PatPower/MultiplayerGame-Node.js' demoUrl='https://patlands.herokuapp.com/'/>
                <Card title='Hacking Game' videoUrl='./images/img-home.jpg' body='My hacking gameMy hacking gameMy hacking game' skills={['Unity', 'C#']} link='/' website='/hackinggame'/>
                <Card title='Duo Dungeon' videoUrl='./images/img-home.jpg' skills={['Unity', 'C#']} body='Game Jam Project' link='/' githubUrl='https://github.com/PatPower/Duo-Dungeon' />
            </div>
        </div>
    )
}

export default Projects