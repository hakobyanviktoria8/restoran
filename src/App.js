import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Home} from "./Components/Home";
import {About} from "./Components/About";
import {Menu} from "./Components/Menu";
import {Contact} from "./Components/Contact";

export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Logo</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/menu">Menu</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>

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
