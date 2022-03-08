import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
function Footer() {
    return (
        <div className='footer-container'>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            Pat <i className="fab fa-typo3"></i>
                        </Link>
                    </div>
                    <div className="social-icons">
                        <Link className="social-icon-link linkedin" to="/" target="_blank" aria-label='Linkedin'>
                            <i className="fab fa-linkedin"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer