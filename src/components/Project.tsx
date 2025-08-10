import HPPmodel from '../assets/images/HPPmodel.png';
import HomePage from '../assets/images/HomePage.png';
import '../assets/styles/Project.scss';
import YouTubeBackendClone from '../assets/images/YouTube Backend Clone.png';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/AgniAditya/EndToEnd-MLOps-HousePricePrediction" target="_blank" rel="noreferrer"><img src={HPPmodel} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/AgniAditya/EndToEnd-MLOps-HousePricePrediction" target="_blank" rel="noreferrer"><h2>House Price Prediction</h2></a>
                <p>Built an end-to-end house price prediction system with ZenML, MLflow, Docker, featuring CI/CD pipelines, cloud integration, and real-time database support.</p>
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