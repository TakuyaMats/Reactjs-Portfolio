import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
// import MenuAppBar from './components/Navbar/Navbar';
// import About from './components/AboutSection/AboutSection';
// import Skill from './components/SkillSection/SkillSection';
// import Project from './components/ProjectSection/ProjectSection';
// import Contact from './components/Footer/Footer';

function App() {
    return (
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    );
};

export default App;