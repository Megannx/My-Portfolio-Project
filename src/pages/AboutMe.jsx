import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; 
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 
import './am.css'
const AboutMe = () => {
    return (
        <div className="about-me">
            <div className="icon-container">
                <FontAwesomeIcon icon={faUser} size="4x" className="user-icon" />
            </div>
            <h2>About Me</h2>
            <p>
                I am Megan White, a passionate full stack developer with a keen interest in building scalable web applications. My expertise lies in both frontend and backend technologies, enabling me to create seamless user experiences.
            </p>
            <p>
                With experience in various programming languages and frameworks, I am committed to writing clean, maintainable code. I enjoy collaborating with teams to deliver high-quality software solutions that meet business needs.
            </p>
            <div className="social-icons">
                <a href="https://github.com/Megannx?ocid=AIDcmmcwpj1e5v_SEM__k_CjwKCAjw-O6zBhASEiwAOHeGxYWsnufzDsMt2lQCBuUPF1ANdwO81tXSKlDjA16OjTDVdWfn_7UnGBoCqd4QAvD_BwE_k_" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="2x" className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/in/megannx/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" className="social-icon" />
                </a>
            </div>
        </div>
    );
};

export default AboutMe;
