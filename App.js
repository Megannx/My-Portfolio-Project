// src/App.js

import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import './App.css'; // Import your CSS
import Header from './components/Header'; // Your header component
import Footer from './components/Footer'; // Your footer component
import Home from './components/Home'; // Your Home page component
import About from './components/About'; // Your About page component

function App() {
    const [fade, setFade] = useState(false);
    const location = useLocation(); // Get the current location

    useEffect(() => {
        setFade(true); // Trigger fade-in
        return () => {
            setFade(false); // Trigger fade-out on unmount
        };
    }, [location]); // Dependency on location to trigger on route change

    return (
        <div className={`app-container ${fade ? 'fade-active' : 'fade'}`}>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                {/* Add more routes here */}
            </Switch>
            <Footer />
        </div>
    );
}

// Export the App component wrapped in Router
export default function WrappedApp() {
    return (
        <Router>
            <App />
        </Router>
    );
}
