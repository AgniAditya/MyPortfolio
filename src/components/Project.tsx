import HPPmodel from '../assets/images/HPPmodel.png';
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
        </div>
    </div>
    );
}

export default Project;