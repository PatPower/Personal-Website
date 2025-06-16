import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div className='footer-container'>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <div className="social-logo">
                            Patent Li
                        </div>
                        <p>2025</p>
                    </div>
                    <p></p>
                    <div className="social-icons">
                        <a className="social-icon-link linkedin" href='https://www.linkedin.com/in/patentli/' target="_blank" rel="noopener noreferrer" aria-label='Linkedin'>
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a className="social-icon-link github" href='https://github.com/PatPower/' target="_blank" rel="noopener noreferrer" aria-label='Github'>
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer