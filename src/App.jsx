import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import EditUsers from "./components/EditUsers";
import Home from "./components/Home";
import TabMgr from "./components/TabMgr";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/edit" component={EditUsers} />
                <Route path="/tasks/:user" component={TabMgr} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
