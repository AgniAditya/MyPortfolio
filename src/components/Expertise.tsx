import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faArrowsToCircle, faCode, faDatabase, faScrewdriverWrench, faServer } from "@fortawesome/free-solid-svg-icons";

const languages = [
    "Python",
    "Java",
    "JavaScript"
]

const backend = [
    "Node.js",
    "Express.js",
    "REST APIs",
]

const database = [
    "MySQL",
    "MongoDB"
]

const tools_and_devOps = [
    "Git",
    "Docker", 
    "GitHub",
    "Postman",
]

const concepts = [
    "DSA", 
    "OOP", 
    "DBMS",
    "OS",
    "CN"
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
                    <p>Skilled in core programming concepts with experience writing clean, maintainable code.</p>
                    <div className="flex-chips">
                        {/* <span className="chip-title">Tech stack:</span> */}
                        {languages.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={faServer} size="3x"/>
                    <h3>Backend</h3>
                    <p>Built robust backend systems with clean architecture, scalable and secure RESTful APIs, and seamless integrations.</p>
                    <div className="flex-chips">
                        {/* <span className="chip-title">Tech stack:</span> */}
                        {backend.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Database</h3>
                    <p>Familiar with relational and non-relational databases, including schema design and query writing.</p>
                    <div className="flex-chips">
                        {/* <span className="chip-title">Tech stack:</span> */}
                        {database.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={faScrewdriverWrench} size="3x"/>
                    <h3>Tools & DevOps</h3>
                    <p>Familiar with version control, containerization, and API testing concepts, with a basic understanding of development workflows.</p>
                    <div className="flex-chips">
                        {/* <span className="chip-title">Tech stack:</span> */}
                        {tools_and_devOps.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={faArrowsToCircle} size="3x"/>
                    <h3>Core Concepts</h3>
                    <p>Strong in DSA, OOP, DBMS, OS, and CN with ability to build efficient solutions.</p>
                    <div className="flex-chips">
                        {/* <span className="chip-title">Tech stack:</span> */}
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