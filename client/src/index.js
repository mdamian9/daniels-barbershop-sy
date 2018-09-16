import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import HomePage from "./components/HomePage/";
import Gallery from "./components/Gallery/";
import Appointments from "./components/Appointments/";
import Location from "./components/Location/";
import Contact from "./components/Contact";

import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/appointments" component={Appointments} />
            <Route exact path="/location" component= {Location}/>
            <Route exact path="/contact" component={Contact} />
        </div>
    </Router>, document.getElementById("root")
);

registerServiceWorker();
