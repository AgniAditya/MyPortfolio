import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faInfinity, faServer } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "Python",
    "scikit-learn",
    "Pandas",
    "NumPY",
    "Matplotlib",
    "ZenML",
    "MLflow",
    "Docker",
    "FastAPI",
    "Git",
    "GitHub Actions"
];

const labelsSecond = [
    "Python",
    "FastAPI",
    "Docker"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faInfinity} size="3x"/>
                    <h3>MLOps</h3>
                    <p>Built and deployed real-world ML projects with full MLOps integration. Implemented automated pipelines, model versioning, containerization, and deployed models as APIs and web apps. Focused on creating scalable, production-ready solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faServer} size="3x"/>
                    <h3>Backend</h3>
                    <p>Designed and built robust backend systems with a focus on clean architecture, RESTful APIs, and integration with databases and external services. Experience in building scalable, secure, and production-ready APIs.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;