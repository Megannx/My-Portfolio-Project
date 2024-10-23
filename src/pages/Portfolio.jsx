import projects from '../data/projects'; // Adjust the path as necessary
import './Portfolio.css'; // Ensure the CSS file for styling is imported
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; // Import GitHub icon

const Portfolio = () => {
    return (
        <div className="portfolio">
            <h2>My Projects</h2>
            <div className="portfolio-grid">
                {projects.map((project, index) => (
                    <div className="project" key={index}>
                        <div className="image-container">
                            <img src={project.image} alt={project.title} />
                            <div className="overlay">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} className="github-icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
