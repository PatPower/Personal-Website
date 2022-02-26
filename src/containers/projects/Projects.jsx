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
                <Card title='Card Title' imageUrl='./images/img-home.jpg' body='body text' />
                <Card title='Card Title' imageUrl='./images/img-home.jpg' body='body text' />
                <Card title='Card Title' imageUrl='./images/img-home.jpg' body='body text' />
                <Card title='Card Title' imageUrl='./images/img-home.jpg' body='body text' />
            </div>
        </div>
    )
}

export default Projects