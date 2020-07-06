import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Home} from "./Components/Home";
import {About} from "./Components/About";
import {Menu} from "./Components/Menu";
import {Contact} from "./Components/Contact";
import NavBar from "./Components/NavBar";

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
