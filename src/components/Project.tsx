import HomePage from "../assets/images/HomePage.png";
import SnakeGame from "../assets/images/SnakeGame.png";
import KanbanBoard from "../assets/images/KanbanBoard.png";
import NotesApp from "../assets/images/NotesApp.png";
import YouTubeBackendClone from "../assets/images/YouTube Backend Clone.png";
import AIResumeBuilder from "../assets/images/AI-Resume-Builder.png";
import MediaSearchApp from "../assets/images/MediaSearchApp.png";
import NotificationService from "../assets/images/NotificationService.webp";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://github.com/AgniAditya/react-js/tree/main/13-redux-project"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={NotificationService}
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </a>
          <a
            href="https://github.com/AgniAditya/react-js/tree/main/13-redux-project"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Notification Service</h2>
          </a>
          <p>
            Architected an event-driven notification pipeline supporting Email,
            SMS, and Push channels via dedicated Kafka topics and isolated
            consumer groups, ensuring channel failures don’t cascade across
            delivery types
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/AgniAditya/react-js/tree/main/13-redux-project"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={MediaSearchApp}
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </a>
          <a
            href="https://github.com/AgniAditya/react-js/tree/main/13-redux-project"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Media Search</h2>
          </a>
          <p>
            Built a responsive media search app using React.js, Redux Toolkit,
            and TailwindCSS that integrates Unsplash, Pexels, and GIPHY APIs
            with infinite scroll, lazy loading, and persistent collections via
            localStorage.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/AgniAditya/react-js/tree/main/09-notes-app"
            target="_blank"
            rel="noreferrer"
          >
            <img src={NotesApp} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/AgniAditya/react-js/tree/main/09-notes-app"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Notes App</h2>
          </a>
          <p>
            A lightweight React.js web application for creating, editing, and
            managing colorful sticky notes. Built with Vite and Tailwind CSS, it
            uses React Context API for state management and browser localStorage
            for persistent data storage. Features a clean, responsive UI with
            multi-colored notes and full CRUD functionality.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/AgniAditya/kanban-board"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={KanbanBoard}
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </a>
          <a
            href="https://github.com/AgniAditya/kanban-board"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Kanban Board</h2>
          </a>
          <p>
            Kanban Board is an interactive task management application built
            with vanilla JavaScript, CSS, and HTML that allows users to organize
            and track their work through a visual board interface with
            drag-and-drop functionality.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/AgniAditya/snake-game-js"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={SnakeGame}
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </a>
          <a
            href="https://github.com/AgniAditya/snake-game-js"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Snake Game</h2>
          </a>
          <p>
            snake game is a JavaScript-based implementation of the classic Snake
            game with a live demo deployed on Vercel. Built with vanilla
            JavaScript, HTML, and CSS, it's a lightweight web project.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/AgniAditya/AI-Resume-Builder"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={AIResumeBuilder}
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </a>
          <a
            href="https://github.com/AgniAditya/AI-Resume-Builder"
            target="_blank"
            rel="noreferrer"
          >
            <h2>AI Resume Builder</h2>
          </a>
          <p>
            AI Resume Builder is a full-stack web application that uses AI to
            generate professional, job-ready resumes from user-provided
            information through a cloud-hosted backend and modern React
            frontend.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/AgniAditya/Youtube-Backend-Building"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={YouTubeBackendClone}
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </a>
          <a
            href="https://github.com/AgniAditya/Youtube-Backend-Building"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Youtube Backend Clone</h2>
          </a>
          <p>
            Developed a scalable backend API for a YouTube-like platform using
            Node.js, Express, and MongoDB. Features include user authentication,
            video upload and management, subscriptions, and modern backend best
            practices.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/AgniAditya/User-Authentication-System"
            target="_blank"
            rel="noreferrer"
          >
            <img src={HomePage} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/AgniAditya/User-Authentication-System"
            target="_blank"
            rel="noreferrer"
          >
            <h2>User Authantication System</h2>
          </a>
          <p>
            A lightweight, end-to-end user authentication stack using Node.js,
            Express, Prisma, and SQLite for the backend, with vanilla
            HTML/CSS/JS for the frontend.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
