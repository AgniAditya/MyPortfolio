import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";
import {
  faArrowsToCircle,
  faCode,
  faDatabase,
  faScrewdriverWrench,
  faServer,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";

const languages = ["Java", "JavaScript", "SQL"];

const frontend = ["React.js", "TailwindCSS", "Redux Toolkit"];

const backend = ["Spring Boot", "Spring Data JPA", "REST API Design"];

const database = ["PostgreSQL", "Redis", "Apache Kafka"];

const tools_and_devOps = [
  "Git",
  "Github",
  "Postman",
  "Maven",
  "Event-Driven Architecture",
  "Rate Limiting",
  "Idempotency",
  "Microservices",
  "System Design",
];

const concepts = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faLaptopCode} size="3x" />
            <h3>Languages</h3>
            <div className="flex-chips">
              {/* <span className="chip-title">Tech stack:</span> */}
              {languages.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faCode} size="3x" />
            <h3>Frontend</h3>
            <div className="flex-chips">
              {/* <span className="chip-title">Tech stack:</span> */}
              {frontend.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faServer} size="3x" />
            <h3>Backend</h3>
            <div className="flex-chips">
              {/* <span className="chip-title">Tech stack:</span> */}
              {backend.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faDatabase} size="3x" />
            <h3>Databases, Cache & Messaging</h3>
            <div className="flex-chips">
              {/* <span className="chip-title">Tech stack:</span> */}
              {database.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faScrewdriverWrench} size="3x" />
            <h3>Dev Tools & Concepts</h3>
            <div className="flex-chips">
              {/* <span className="chip-title">Tech stack:</span> */}
              {tools_and_devOps.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faArrowsToCircle} size="3x" />
            <h3>CS Fundamentals</h3>
            <div className="flex-chips">
              {/* <span className="chip-title">Tech stack:</span> */}
              {concepts.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
