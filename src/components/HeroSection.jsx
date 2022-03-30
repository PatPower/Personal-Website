import React from 'react';
import './HeroSection.css'
import '../App.css'


function HeroSection() {
    return (
        <div className='hero-container' id='home'>
            <video src="/videos/video-hero.mp4" autoPlay loop muted />
            <div className="hero-container-main">
                <div className="hero-container-left">
                    <h1 className='gradient__text'>PATENT LI</h1>
                    <p>Recently graduated from the University of Toronto. I have been programming for 7+ years and created small personal games using several game engines and programming languages such as Unity, Unreal Engine, Game Maker Studio, Java, C#, and JavaScript. Started out in 2015 creating server plugins games and moved on to creating real playable games.</p>
                    <div className="social-links">
                        <div className="hero-btns">
                            <a className="hero-social-icon hero-github" href='https://github.com/PatPower/' target="_blank" rel="noopener noreferrer" aria-label='Github'>
                                <i className="card fab fa-github"></i>
                                <p>Github</p>
                            </a>
                        </div>
                        <div className="hero-btns">
                            <a className="hero-social-icon hero-linkedin" href='https://www.linkedin.com/in/patentli/' target="_blank" rel="noopener noreferrer" aria-label='Linkedin'>
                                <i className="card fab fa-linkedin"></i>
                                <p>Linkedin</p>
                            </a>
                        </div>

                        <div className="hero-btns">
                            <div className="hero-mail">
                                <a className='send-mail-btn' href='mailto:patent.li@mail.utoronto.ca'>
                                    <i className="card fa fa-envelope"></i>
                                </a>
                                <div className="send-mail-text">
                                    <p>patent.li@mail.utoronto.ca</p>
                                </div>
                                <div className="copy-btn tooltip" onClick={copyToClipboard}>
                                    <i id="clipboard-icon" className="clipboard-icon fa fa-clipboard"></i>
                                    <div class="tooltiptext">
                                        <span >Copied

                                        </span>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="hero-btns">
                            <a className="hero-social-icon hero-resume" href='/resume' target="_blank" rel="noopener noreferrer" aria-label='Linkedin'>
                                <i className="card fa fa-file"></i>
                                <p> My Resume</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="hero-container-right">

                </div>
            </div>
        </div >
    )
}
function copyToClipboard() {
    navigator.clipboard.writeText(('patent.li@mail.utoronto.ca'));
    console.log('Copied to clipboard: ', 'patent.li@mail.utoronto.ca');

    document.getElementById("clipboard-icon").className = "clipboard-icon-clicked fa fa-clipboard";

    document.querySelector('.tooltip').classList.add('active');
    setTimeout(function () {
        document.querySelector('.tooltip').classList.remove('active');
    }, 1500);
}



export default HeroSection