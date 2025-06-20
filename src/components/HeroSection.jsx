import React, { useEffect, useRef } from 'react';
import './HeroSection.css'
import '../App.css'


function HeroSection() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const stars = [];
        const shootingStars = [];

        let globalRotation = 0;
        const earthRotationSpeed = 0.0016;

        class Star {
            constructor() {
                const poleX = canvas.width * 0.5;
                const poleY = canvas.height * 1.2;

                const corners = [
                    { x: 0, y: 0 },
                    { x: canvas.width, y: 0 },
                    { x: 0, y: canvas.height },
                    { x: canvas.width, y: canvas.height }
                ];

                const maxDistance = Math.max(...corners.map(corner => {
                    const dx = corner.x - poleX;
                    const dy = corner.y - poleY;
                    return Math.sqrt(dx * dx + dy * dy);
                }));

                const bufferDistance = maxDistance * 1.8;

                this.polarRadius = Math.sqrt(Math.random()) * bufferDistance;
                this.polarAngle = Math.random() * Math.PI * 2;

                this.poleX = poleX;
                this.poleY = poleY;

                this.baseSize = Math.random() * 2.5 + 0.8;
                this.brightness = Math.random() * 0.8 + 0.4;

                this.size = this.baseSize;
                this.twinkleSpeed = Math.random() * 0.015 + 0.003;
                this.twinkleOffset = Math.random() * Math.PI * 2;
                this.color = this.getStarColor();

                this.updatePosition();
            }

            getStarColor() {
                const colors = [
                    'rgba(255, 255, 255',
                    'rgba(255, 248, 220',
                    'rgba(200, 220, 255',
                    'rgba(255, 255, 200',
                    'rgba(240, 248, 255',
                    'rgba(255, 240, 240'
                ];
                return colors[Math.floor(Math.random() * colors.length)];
            }

            updatePosition() {
                const currentAngle = this.polarAngle + globalRotation;

                this.x = this.poleX + Math.cos(currentAngle) * this.polarRadius;
                this.y = this.poleY + Math.sin(currentAngle) * this.polarRadius;

                const distanceFactor = this.polarRadius / (Math.min(canvas.width, canvas.height) * 0.45);
                this.perspectiveScale = 1 - (distanceFactor * 0.3);
            }

            update() {
                this.updatePosition();

                const time = Date.now() * 0.001;
                const twinkle = Math.sin(time * this.twinkleSpeed + this.twinkleOffset);
                this.size = Math.max(0.1, (this.baseSize + twinkle * 0.4) * this.perspectiveScale);
                this.currentBrightness = Math.max(0, this.brightness + twinkle * 0.3);
            }

            draw() {
                const scrollY = window.scrollY;
                const scrollFactor = Math.min(scrollY / (window.innerHeight * 0.5), 1);
                const alpha = Math.max(0, this.currentBrightness * (1 - scrollFactor * 0.7));

                const buffer = 50;
                const isVisible = this.x >= -buffer &&
                    this.x <= canvas.width + buffer &&
                    this.y >= -buffer &&
                    this.y <= canvas.height + buffer;

                if (isVisible && this.size > 0 && alpha > 0.01) {
                    ctx.save();

                    ctx.fillStyle = `${this.color}, ${alpha})`;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();

                    ctx.restore();
                }
            }
        }

        class ShootingStar {
            constructor() {
                this.reset();
            }

            reset() {
                const side = Math.floor(Math.random() * 4);
                switch (side) {
                    case 0:
                        this.x = Math.random() * canvas.width;
                        this.y = -50;
                        this.angle = Math.random() * Math.PI * 0.5 + Math.PI * 0.25;
                        break;
                    case 1:
                        this.x = canvas.width + 50;
                        this.y = Math.random() * canvas.height;
                        this.angle = Math.random() * Math.PI * 0.5 + Math.PI * 0.75;
                        break;
                    case 2:
                        this.x = Math.random() * canvas.width;
                        this.y = canvas.height + 50;
                        this.angle = Math.random() * Math.PI * 0.5 + Math.PI * 1.25;
                        break;
                    case 3:
                        this.x = -50;
                        this.y = Math.random() * canvas.height;
                        this.angle = Math.random() * Math.PI * 0.5 - Math.PI * 0.25;
                        break;
                    default:
                        this.x = Math.random() * canvas.width;
                        this.y = Math.random() * canvas.height;
                        this.angle = Math.random() * Math.PI * 2;
                        break;
                }

                this.size = Math.random() * 3 + 1;
                this.speed = Math.random() * 4 + 3;
                this.tailLength = Math.floor(Math.random() * 15) + 8;
                this.trail = [];
                this.alpha = 1;
                this.life = 1;
                this.decay = Math.random() * 0.008 + 0.003;

                const colors = [
                    'rgba(255, 255, 255',
                    'rgba(255, 200, 100',
                    'rgba(100, 200, 255',
                    'rgba(255, 150, 150',
                    'rgba(200, 255, 200'
                ];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.x += Math.cos(this.angle) * this.speed;
                this.y += Math.sin(this.angle) * this.speed;

                this.trail.push({
                    x: this.x,
                    y: this.y,
                    alpha: this.alpha,
                    size: this.size
                });

                if (this.trail.length > this.tailLength) {
                    this.trail.shift();
                }

                this.life -= this.decay;
                this.alpha = Math.max(0, this.life);

                if (this.alpha <= 0 || this.isOffScreen()) {
                    this.reset();
                }
            }

            isOffScreen() {
                const buffer = 100;
                return (this.x < -buffer || this.x > canvas.width + buffer ||
                    this.y < -buffer || this.y > canvas.height + buffer);
            }

            draw() {
                const scrollY = window.scrollY;
                const scrollFactor = Math.min(scrollY / (window.innerHeight * 0.5), 1);
                const globalAlpha = 1 - scrollFactor;

                if (this.alpha <= 0 || globalAlpha <= 0) return;

                ctx.save();

                for (let i = 0; i < this.trail.length - 1; i++) {
                    const current = this.trail[i];
                    const next = this.trail[i + 1];
                    const trailAlpha = (i / this.trail.length) * this.alpha * globalAlpha;
                    const trailSize = (i / this.trail.length) * this.size;

                    if (trailAlpha > 0.01) {
                        ctx.strokeStyle = `${this.color}, ${trailAlpha})`;
                        ctx.lineWidth = Math.max(0.5, trailSize);
                        ctx.lineCap = 'round';

                        ctx.beginPath();
                        ctx.moveTo(current.x, current.y);
                        ctx.lineTo(next.x, next.y);
                        ctx.stroke();
                    }
                }

                if (this.trail.length > 0) {
                    const head = this.trail[this.trail.length - 1];
                    const headAlpha = this.alpha * globalAlpha;

                    ctx.fillStyle = `${this.color}, ${headAlpha})`;
                    ctx.beginPath();
                    ctx.arc(head.x, head.y, this.size, 0, Math.PI * 2);
                    ctx.fill();

                    const glowGradient = ctx.createRadialGradient(
                        head.x, head.y, 0,
                        head.x, head.y, this.size * 3
                    );
                    glowGradient.addColorStop(0, `${this.color}, ${headAlpha * 0.5})`);
                    glowGradient.addColorStop(1, `${this.color}, 0)`);

                    ctx.fillStyle = glowGradient;
                    ctx.beginPath();
                    ctx.arc(head.x, head.y, this.size * 3, 0, Math.PI * 2);
                    ctx.fill();
                }

                ctx.restore();
            }
        }

        const initializeStars = () => {
            const scrollY = window.scrollY;
            const scrollFactor = Math.min(scrollY / (window.innerHeight * 0.5), 1);
            const targetStarCount = Math.floor(2000 * (1 - scrollFactor * 0.3))

            while (stars.length < targetStarCount) {
                stars.push(new Star());
            }

            while (stars.length > targetStarCount) {
                stars.pop();
            }
        };

        for (let i = 0; i < 2000; i++) {
            stars.push(new Star());
        }

        for (let i = 0; i < 3; i++) {
            shootingStars.push(new ShootingStar());
        }

        setInterval(() => {
            if (Math.random() < 0.01 && shootingStars.length < 2) {
                shootingStars.push(new ShootingStar());
            }
        }, 6000);

        window.addEventListener('scroll', () => {
            initializeStars();
        });

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const scrollY = window.scrollY;
            const scrollFactor = Math.min(scrollY / (window.innerHeight * 0.5), 1);

            const currentRotationSpeed = earthRotationSpeed * (1 - scrollFactor * 0.6);
            globalRotation += currentRotationSpeed;

            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            const darkness = scrollFactor * 1.2;
            gradient.addColorStop(0, `rgba(${Math.max(0, 10 - darkness * 20)}, ${Math.max(0, 15 - darkness * 25)}, ${Math.max(0, 35 - darkness * 35)}, 1)`);
            gradient.addColorStop(0.5, `rgba(${Math.max(0, 5 - darkness * 15)}, ${Math.max(0, 10 - darkness * 20)}, ${Math.max(0, 25 - darkness * 30)}, 1)`);
            gradient.addColorStop(1, `rgba(${0}, ${Math.max(0, 5 - darkness * 12)}, ${Math.max(0, 15 - darkness * 20)}, 1)`);

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.strokeStyle = `rgba(100, 150, 200, ${0.1 * (1 - scrollFactor * 0.5)})`;
            ctx.lineWidth = 1;
            for (let i = 0; i < stars.length; i++) {
                for (let j = i + 1; j < stars.length; j++) {
                    const dx = stars[i].x - stars[j].x;
                    const dy = stars[i].y - stars[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 120 && Math.random() > 0.98) {
                        const alpha = (120 - distance) / 120 * 0.1 * (1 - scrollFactor * 0.5);
                        ctx.strokeStyle = `rgba(100, 150, 200, ${alpha})`;
                        ctx.beginPath();
                        ctx.moveTo(stars[i].x, stars[i].y);
                        ctx.lineTo(stars[j].x, stars[j].y);
                        ctx.stroke();
                    }
                }
            }

            stars.forEach(star => {
                star.update();
                star.draw();
            });

            shootingStars.forEach(shootingStar => {
                shootingStar.update();
                shootingStar.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className='hero-container' id='home'>
            <canvas
                ref={canvasRef}
                className="hero-animation-canvas"
            />
            <div className="hero-container-main">
                <div className="hero-container-left">
                    <h1 className='gradient__text'>PATENT LI</h1>
                    <p>University of Toronto graduate with 3 years’ experience in Android development at General Motors. Skilled in scalable architecture, clean code, and teamwork. Passionate about building impactful software and growing as a developer, with game development experience in Unity and Unreal Engine.</p>
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
                                <a className='send-mail-btn' href='mailto:lipatented@gmail.com'>
                                    <i className="card fa fa-envelope"></i>
                                </a>
                                <div className="send-mail-text">
                                    <p>lipatented@gmail.com</p>
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
    navigator.clipboard.writeText(('lipatented@gmail.com'));
    console.log('Copied to clipboard: ', 'lipatented@gmail.com');

    document.getElementById("clipboard-icon").className = "clipboard-icon-clicked fa fa-clipboard";

    document.querySelector('.tooltip').classList.add('active');
    setTimeout(function () {
        document.querySelector('.tooltip').classList.remove('active');
    }, 1500);
}

export default HeroSection