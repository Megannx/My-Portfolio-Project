import './Resume.css'
const Resume = () => {
    return (
        <section id="resume" className="resume-section">
            <h2>Resume</h2>
            <p>
                As a Full Stack Developer, I have a diverse skill set that allows me to build and maintain web applications from end to end. Here are some of my key skills:
            </p>

            <h3>Frontend Skills</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Responsive Web Design</li>
                <li>Version Control (Git)</li>
            </ul>

            <h3>Backend Skills</h3>
            <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>APIs (RESTful and GraphQL)</li>
                <li>Database Management (SQL, MongoDB)</li>
                <li>Authentication and Authorization</li>
                <li>Testing and Debugging</li>
            </ul>
        </section>
    );
};

export default Resume;
