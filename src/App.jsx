// src/App.js
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';  
import Home from './pages/Home';
import './App.css';

const App = () => {
    const location = useLocation(); // Get the current location
    const [fade, setFade] = useState(false); // State to control fade effect

    // Effect to handle fade in/out on route change
    useEffect(() => {
        setFade(true); // Trigger fade-in when route changes
        return () => {
            setFade(false); // Trigger fade-out when the component unmounts
        };
    }, [location]); // Dependency array contains location

    return (
        <div className={`app-container ${fade ? 'fade-active' : 'fade'}`}>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} /> {/* Home component */}
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/portfolio" element={<Portfolio />} /> {/* Portfolio component */}
            </Routes>
            <Footer />
        </div>
    );
};

// Wrap App with Router in a separate component to keep App clean
export default function WrappedApp() {
    return (
        <Router>
            <App />
        </Router>
    );
}
