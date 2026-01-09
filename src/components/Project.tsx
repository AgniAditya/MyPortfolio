import HPPmodel from '../assets/images/HPPmodel.png';
import HomePage from '../assets/images/HomePage.png';
import '../assets/styles/Project.scss';
import YouTubeBackendClone from '../assets/images/YouTube Backend Clone.png';
import AIResumeBuilder from '../assets/images/AI-Resume-Builder.png'

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/AgniAditya/AI-Resume-Builder" target="_blank" rel="noreferrer"><img src={AIResumeBuilder} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/AgniAditya/AI-Resume-Builder" target="_blank" rel="noreferrer"><h2>AI Resume Builder</h2></a>
                <p>AI Resume Builder is a full-stack web application that uses AI to generate professional, job-ready resumes from user-provided information through a cloud-hosted backend and modern React frontend.</p>
            </div>
            <div className="project">
                <a href="https://github.com/AgniAditya/Youtube-Backend-Building" target="_blank" rel="noreferrer"><img src={YouTubeBackendClone} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/AgniAditya/Youtube-Backend-Building" target="_blank" rel="noreferrer"><h2>Youtube Backend Clone</h2></a>
                <p>Developed a scalable backend API for a YouTube-like platform using Node.js, Express, and MongoDB. Features include user authentication, video upload and management, subscriptions, and modern backend best practices.</p>
            </div>
            <div className="project">
                <a href="https://github.com/AgniAditya/User-Authentication-System" target="_blank" rel="noreferrer"><img src={HomePage} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/AgniAditya/User-Authentication-System" target="_blank" rel="noreferrer"><h2>User Authantication System</h2></a>
                <p>A lightweight, end-to-end user authentication stack using Node.js, Express, Prisma, and SQLite for the backend, with vanilla HTML/CSS/JS for the frontend.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;