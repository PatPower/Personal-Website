import React from "react";
import "./hackinggame.css";

function HackingGame() {
    // get a refrence to the canvas and its context
    const hGameCanvas = React.useRef();

    React.useEffect(() => {
        var spawnLineY = hGameCanvas.current.height;
        var spawnRate = 30;
        var spawnRateOfDescent = 2;
        // when was the last object spawned
        var lastSpawn = -1;
        // this array holds all spawned object
        var objects = [];
        var ctx = hGameCanvas.current.getContext("2d");
        // start animating
        animate();
        function spawnRandomObject() {
            // create the new object
            var object = {
                // set x randomly but at least 15px off the canvas edges
                x: Math.random() * hGameCanvas.current.width,
                // set y to start on the line where objects are spawned
                y: spawnLineY,
            };
            // add the new object to the objects[] array
            objects.push(object);
        }

        function animate() {
            // get the elapsed time
            var time = Date.now();

            // see if its time to spawn a new object
            if (time > lastSpawn + spawnRate) {
                lastSpawn = time;
                spawnRandomObject();
            }

            // request another animation frame
            requestAnimationFrame(animate);

            // clear the canvas so all objects can be
            // redrawn in new positions
            ctx.clearRect(
                0,
                0,
                hGameCanvas.current.width,
                hGameCanvas.current.height
            );

            // draw the line where new objects are spawned
            ctx.beginPath();
            ctx.moveTo(0, spawnLineY);
            ctx.lineTo(hGameCanvas.current.width, spawnLineY);
            ctx.stroke();

            // move each object down the canvas
            for (var i = 0; i < objects.length; i++) {
                var object = objects[i];
                object.y -= spawnRateOfDescent;
                ctx.beginPath();
                ctx.rect(object.x, object.y, 1, 1);
                ctx.closePath();
                if (object.y < 50) {
                    // Remove off screen pixels
                    if (object.y < 0) objects.shift();
                    ctx.fillStyle = "rgb(0, " + 80 * (object.y / 50) + ", 0)";
                } else {
                    ctx.fillStyle = "rgb(0, 80, 0)";
                }
                ctx.fill();
            }
        }
    }, []);
    return (
        <>
            <div className="hackinggame-container">
                <video
                    src="/videos/video-hackinggame.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    webkit-playsinline="true"
                    controls={false}
                    disablePictureInPicture
                />
                <h1>Hacking Game</h1>
                <p>Explore the web and hack your way to glory</p>
            </div>
            <div className="about-game">
                <video
                    src="/videos/video-hackinggame-aboutgame.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    webkit-playsinline="true"
                    controls={false}
                    disablePictureInPicture
                />
                <div className="about-game-description">
                    <p>
                        Scavenge the internet and discover the secrets of this
                        world but be careful, don't trust everything you see
                        online.
                    </p>
                    <br />
                    <ul>
                        <li>Explore the web</li>
                        <li>Find secrets embedded in the computer</li>
                        <li>
                            Make friends or enemies with people you meet online
                        </li>
                        <li>Dozens of applications to unlock</li>
                    </ul>
                </div>
            </div>
            <div className="hgame-features">
                <canvas className="hgame-canvas" ref={hGameCanvas} />
                <div className="hgame-horizontal">
                    <div className="game-feature-area">
                        <h1>Explore the Web</h1>
                        <video
                            src="/videos/hackinggame/video-webbrowser.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                            webkit-playsinline="true"
                            controls={false}
                            disablePictureInPicture
                        />
                        <p>
                            Explore what this world has to offer and find useful
                            information on the open web. Or risk it and take
                            your chances on the dark web.
                        </p>
                    </div>
                    <div className="game-feature-area">
                        <h1>Messaging</h1>
                        <video
                            src="/videos/hackinggame/video-hchat.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                            webkit-playsinline="true"
                            controls={false}
                            disablePictureInPicture
                        />

                        <p>
                            Chat with strangers. Make new friends, create long
                            lasting enemies, or just talk business.
                        </p>
                    </div>
                </div>
                <div className="hgame-horizontal">
                    <div className="game-feature-area">
                        <h1>File System</h1>
                        <video
                            src="/videos/hackinggame/video-file.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                            webkit-playsinline="true"
                            controls={false}
                            disablePictureInPicture
                        />
                        <p>Manage files that you have downloaded or found.</p>
                    </div>
                    <div className="game-feature-area">
                        <h1>Find Accounts</h1>
                        <video
                            src="/videos/hackinggame/video-loginaccount.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                            webkit-playsinline="true"
                            controls={false}
                            disablePictureInPicture
                        />
                        <p>Use tools and manipulate users to get their accounts for your own gain.</p>
                    </div>
                </div>
                <h1>Game is still in developement</h1>
                <p>
                    Demo out soon. Check back for updates.
                    <br />
                </p>
                <div className="unity-text">
                    <p>Made with</p>
                    <a href="https://unity.com/">
                        <img
                            className="unity-img"
                            src="/images/img-unity.png"
                            alt="Unity"
                        />
                    </a>
                </div>
            </div>
        </>
    );
}

export default HackingGame;
