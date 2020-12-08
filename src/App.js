import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./screens/Home";
import './global.css';
import Menu from "./screens/Menu"

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