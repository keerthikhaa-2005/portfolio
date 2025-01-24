import React from 'react';

const Projects = () => {
    return (
        <div className="projects">
            <header>
                <h2>My Projects</h2>
                <p>Below are some of the projects I have worked on. Each project reflects my passion for technology and problem-solving.</p>
            </header>
            <section className="project-list">
                <div className="project-item">
                    <h3>1. Email spam detection</h3>
                    <p>
                    This project focuses on identifying and filtering out spam or unsolicited emails from legitimate emails using machine learning techniques. The system analyzes email content and metadata to classify messages as either "Spam" or "Not Spam.".The model is trained on a labeled dataset containing examples of both spam and non-spam emails. It employs natural language processing (NLP) techniques to extract key features from the email body, subject line, and headers. Algorithms like Naive Bayes, Support Vector Machines (SVM), or advanced neural networks are used for classification.
                    </p>
                    <p><strong>Technologies used:</strong> Python,Naive Bayes, Jupyter Notebook</p>
                </div>

                <div className="project-item">
                    <h3>2. Personal Portfolio Website</h3>
                    <p>
                        I built this portfolio website to showcase my work and skills. The website is fully responsive, and I utilized React and modern web design techniques to create a user-friendly and visually appealing site. It highlights my technical expertise, my journey as a developer, and provides a way for people to get in touch with me.
                    </p>
                    <p><strong>Technologies used:</strong> React, JavaScript, CSS, HTML</p>
                </div>

                
                <div className="project-item">
                    <h3>3. Electricity Consumption Forecasting</h3>
                    <p>
                        I developed an electricity consumption forecasting model in data science to predict the future electricity usage.This project focuses on predicting future electricity consumption based on historical data. The goal is to develop a forecasting model that can provide accurate predictions, helping utilities and businesses plan their energy distribution, optimize energy production, and manage resources efficiently. By leveraging various data science techniques, the model can predict energy demands under different scenarios, ensuring cost-effective and sustainable electricity usage.
                    </p>
                    <p><strong>Technologies used:</strong> Machine Learning Models, Data Visualization, Statistical Analysis</p>
                </div>
            </section>
        </div>
    );
};

export default Projects;