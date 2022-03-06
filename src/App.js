import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import MenuAppBar from './components/Navbar/Navbar';
import About from './components/AboutSection/AboutSection';
import Skill from './components/SkillSection/SkillSection';
import Project from './components/ProjectSection/ProjectSection';
import Contact from './components/Footer/Footer';

function App() {
    return (
        <BrowserRouter>
            <MenuAppBar />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/skill" component={Skill}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/project" component={Project}/>
                <Route exact path="/contact" component={Contact}/>
            </Switch>
        </BrowserRouter>
    );
};

export default App;