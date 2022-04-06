import React from 'react';
import './projects.css'
import Card from '../../components/Cards/Card'

const Projects = () => {
    return (
        <div className='projects-container' id='projects'>
            <h1 className='gradient__text '>
                Projects
            </h1>
            <div className="projects-container-cards">
                <Card title='Multiplayer Game' videoUrl='./videos/video-multiplayer-game.mp4' body='An open world multiplayer game. Played in the browser. Project is on hold.' skills={['Node.js', 'Javascript', 'jQuery', 'HTML']} link='/multiplayer-game' githubUrl='https://github.com/PatPower/MultiplayerGame-Node.js' demoUrl='https://patland.live/'/>
                <Card title='Hacking Game' videoUrl='./videos/video-hackinggame-card.mp4' body='Explore a strange operating system and browse the web in this mysterious world. Still in development' skills={['Unity', 'C#']} link='/' website='/hackinggame'/>
                <Card title='Duo Dungeon' videoUrl='./videos/video-duodungeon-card.mp4' skills={['Unity', 'C#']} body='Game Jam Project' link='/' githubUrl='https://github.com/PatPower/Duo-Dungeon' />
                <Card title='Clan Raids' videoUrl='./videos/video-minecraft-plugins.mp4' skills={['Java']} body='A Minecraft server plugin to allow clans to raid eachother in a unique way' link='/' githubUrl='https://github.com/PatPower/ClanRaids' website='https://www.spigotmc.org/resources/clan-raids.101048/'/>
            </div>
        </div>
    )
}

export default Projects