import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./screens/Home";
import Menu from "./screens/Menu";
import './global.css';

const App = () => {

    return (
    <BrowserRouter>
        <Menu />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
        </Switch>
    </BrowserRouter>
    )
};

export default App;