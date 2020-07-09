import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Home} from "./Components/Home/Home";
import {About} from "./Components/About/About";
import {Menu} from "./Components/Menu/Menu";
import {Contact} from "./Components/Contact/Contact";
import NavBar from "./Components/Navbar/NavBar";

export default function App() {
    return (
        <Router>
            <div>
                <NavBar/>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/menu">
                        <Menu />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
