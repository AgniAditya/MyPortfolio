import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faArrowsToCircle, faCode, faDatabase, faScrewdriverWrench, faServer, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const languages = [
    "Java",
    "JavaScript",
    "TypeScript"
]

const frontend = [
    "React.js",
    "HTML",
    "CSS",
    "TailwindCSS"
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
    "GitHub",
    "Postman",
    "Vite"
]

const concepts = [
    "DSA", 
    "OOP", 
    "OS"
]

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                
                <div className="skill">
                    <FontAwesomeIcon icon={faLaptopCode} size="3x"/>
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
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>Frontend</h3>   
                    <p>Skilled in building responsive user interfaces using React.js, Tailwind CSS, and Vite with clean and efficient frontend development practices.</p>
                    <div className="flex-chips">
                        {/* <span className="chip-title">Tech stack:</span> */}
                        {frontend.map((label, index) => (
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
                    <p>Familiar with version control, and API testing concepts, with a basic understanding of development workflows.</p>
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
                    <p>Strong in DSA, OOP, and OS with ability to build efficient solutions.</p>
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