import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faArrowsToCircle, faCode, faDatabase, faInfinity, faScrewdriverWrench, faServer } from "@fortawesome/free-solid-svg-icons";
import { faReact } from '@fortawesome/free-brands-svg-icons';

const languages = [
    "Python",
    "Java",
    "JavaScript"
]

const frontend = [
    "HTML",
    "CSS",
    "JavaScripts"
]

const backend = [
    "Node.js",
    "Express.js",
    "FastAPI",
    "REST APIs",
]

const database = [
    "MySQL",
    "SQLite"
]

const tools_and_devOps = [
    "Git", 
    "GitHub", 
    "Docker", 
    "Docker Hub", 
    "GitHub Actions", 
    "Prisma"
]

const mlops_lib = [
    "MLflow", 
    "DVC", 
    "Scikit-learn", 
    "Pandas", 
    "NumPy", 
    "Matplotlib", 
    "ZenML"
]

const concepts = [
    "Data Structures & Algorithms", 
    "Object Oriented Programming (OOP)", 
]

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                
                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>Languages</h3>
                    <p>Comfortable with core programming concepts including object-oriented and functional programming, with experience writing clean, maintainable code across various projects.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {languages.map((label, index) => (
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
                        {backend.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={faInfinity} size="3x"/>
                    <h3>MLOps</h3>
                    <p>Built and deployed real-world ML projects with full MLOps integration. Implemented automated pipelines, model versioning, containerization, and deployed models as APIs and web apps. Focused on creating scalable, production-ready solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {mlops_lib.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={faScrewdriverWrench} size="3x"/>
                    <h3>Tools & DevOps</h3>
                    <p>Familiar with version control systems, containerization, and continuous integration/deployment workflows. Experienced in using development tools to improve productivity and maintain code quality. Basic understanding of cloud services and infrastructure management.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {tools_and_devOps.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Database</h3>
                    <p>Familiar with working on both relational and non-relational databases, including basic schema design, data handling, and simple query writing.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {database.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Frontend</h3>
                    <p>Basic understanding of building responsive user interfaces and working with modern UI frameworks. Able to create simple, user-friendly web pages and currently exploring component-based development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {frontend.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={faArrowsToCircle} size="3x"/>
                    <h3>Core Concepts</h3>
                    <p>Strong foundation in data structures and algorithms, object-oriented programming principles, and system design fundamentals. Able to apply these concepts to solve problems efficiently and design scalable software systems.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {concepts.map((label, index) => (
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