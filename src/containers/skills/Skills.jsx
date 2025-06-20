import React from 'react';
import './skills.css'
import SkillsBox from '../../components/SkillsBox/SkillsBox';

const Skills = () => {
    return (
        <div className='skills-container' id='skills'>
            <div className='skills-content-box'>
                <h1 className='gradient__text'>
                    Skills
                </h1>
                <div className="skills-big-container">
                    <div className="skills-container-categories">
                        <SkillsBox
                            category='Programming Languages'
                            skills={[
                                { name: 'Kotlin', url: 'https://kotlinlang.org' },
                                { name: 'Java', url: 'https://www.oracle.com/java' },
                                { name: 'C#', url: 'https://docs.microsoft.com/en-us/dotnet/csharp' },
                                { name: 'Python', url: 'https://www.python.org' },
                                { name: 'SQL', url: 'https://www.w3schools.com/sql' },
                                { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
                                { name: 'C++', url: 'https://isocpp.org' },
                                { name: 'Swift', url: 'https://swift.org' },
                                { name: 'R', url: 'https://www.r-project.org' },
                                { name: 'LaTeX', url: 'https://www.latex-project.org' },
                                { name: 'HTML/CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' }
                            ]}
                        />
                        <SkillsBox
                            category='Frameworks'
                            skills={[
                                { name: 'Espresso', url: 'https://developer.android.com/training/testing/espresso' },
                                { name: 'JUnit', url: 'https://junit.org' },
                                { name: 'Node.js', url: 'https://nodejs.org' },
                                { name: 'React', url: 'https://react.dev' },
                                { name: 'Socket.IO', url: 'https://socket.io' },
                                { name: 'jQuery', url: 'https://jquery.com' },
                                { name: 'Dagger', url: 'https://dagger.dev' }
                            ]}
                        />
                        <SkillsBox
                            category='Tools'
                            skills={[
                                { name: 'Git', url: 'https://git-scm.com' },
                                { name: 'Android Studio', url: 'https://developer.android.com/studio' },
                                { name: 'Xcode', url: 'https://developer.apple.com/xcode' },
                                { name: 'Jenkins', url: 'https://www.jenkins.io' },
                                { name: 'Jira', url: 'https://www.atlassian.com/software/jira' },
                                { name: 'Docker', url: 'https://www.docker.com' },
                                { name: 'Unity', url: 'https://unity.com' },
                                { name: 'Game Maker Studio', url: 'https://gamemaker.io' },
                                { name: 'Unreal Engine', url: 'https://www.unrealengine.com' },
                                { name: 'Vehicle Spy', url: 'https://www.intrepidcs.com/products/software/vehicle-spy' },
                                { name: 'Postman', url: 'https://www.postman.com' }
                            ]}
                        />
                        <SkillsBox
                            category='Other'
                            skills={[
                                { name: 'CI/CD', url: 'https://about.gitlab.com/topics/ci-cd' },
                                { name: 'REST API', url: 'https://restfulapi.net' },
                                { name: 'OAuth 2.0', url: 'https://oauth.net/2' },
                                { name: 'Agile (Scrum)', url: 'https://www.scrum.org' },
                                { name: 'Google Cloud Platform', url: 'https://cloud.google.com' },
                                { name: 'Firebase', url: 'https://firebase.google.com' },
                                { name: 'Github Projects', url: 'https://docs.github.com/en/issues/planning-and-tracking-with-projects' },
                                { name: 'Cloudflare Zero Trust', url: 'https://www.cloudflare.com/zero-trust' },
                                { name: 'FL Studio', url: 'https://www.image-line.com' },
                                { name: 'Lightroom', url: 'https://www.adobe.com/products/photoshop-lightroom.html' }
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills