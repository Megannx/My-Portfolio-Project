import './Home.css'; // Ensure you create this CSS file for styling

const Home = () => {
    return (
        <div className="home">
            <div className="hero-section">
                <h1 className="hero-title">Welcome</h1>
                <p className="hero-subtitle">Seeking opportunities to contribute my skills to exciting projects!</p>
                <a href="/portfolio" className="cta-button">Explore</a>
            </div>
        </div>
    );
};

export default Home;
