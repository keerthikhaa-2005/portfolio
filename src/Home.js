import React from 'react';

const Home = () => {
    return (
        <div className="home">
            <header>
                <h2>Welcome to My Portfolio</h2>
                <p>Hello! I'm KEERTHIKHAA K R, a passionate and enthusiastic youngster focused on creating  innovative solutions. </p>
            </header>
            <section className="intro">
                <h3>About Me</h3>
                <p>
                    I  am currently pursuing 2nd year B tech Artificial intelligence and Data Science in Sri Eshwar College of Engineering.
                </p>
                <p>
                    I'm constantly seeking new  opportunities to grow, collaborate, and make a difference in the tech world.
                </p>
            </section>
            <section className="highlights">
                <h3>Key Highlights</h3>
                <ul>
                    <li>Knowledge  in front-end technologies like React, HTML, CSS, and JavaScript.</li>
                    <li>Collaborative and hardworking team member who is interested in solving more problems.</li>
                    <li>Constantly learning and exploring new tools and technologies.</li>
                </ul>
            </section>
            <section className="call-to-action">
                <h3>Let's Connect!</h3>
                <p>If you're interested in working together  feel free to reach out. We will bring out better projects and impactful solutions in tech world </p>
                <a href="/contact" className="cta-button">Contact Me</a>
            </section>
        </div>
    );
};

export default Home;