import HPPmodel from '../assets/images/HPPmodel.png';
import HomePage from '../assets/images/HomePage.png';
import codeorbit from '../assets/images/upcomingproject.png';
import '../assets/styles/Project.scss';

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
                <a href="https://github.com/AgniAditya/CodeOrbit-Online-IDE" target="_blank" rel="noreferrer"><img src={codeorbit} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/AgniAditya/User-Authentication-System" target="_blank" rel="noreferrer"><h2>CodeOrbit Online IDE</h2></a>
                <p>A zero-install, browser-based code editor with GitHub OAuth, SQLite persistence, Monaco editor, and real-time collaboration coming in later days.</p>
            </div>
            <div className="project">
                <a href="https://github.com/AgniAditya/User-Authentication-System" target="_blank" rel="noreferrer"><img src={HomePage} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/AgniAditya/CodeOrbit-Online-IDE" target="_blank" rel="noreferrer"><h2>User Authantication System</h2></a>
                <p>A lightweight, end-to-end user authentication stack using Node.js, Express, Prisma, and SQLite for the backend, with vanilla HTML/CSS/JS for the frontend.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;