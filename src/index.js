import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Hello from "./Hello"
import Header from "./Header"
import Footer from "./Footer"
import About from "./About.jsx"
import Projects from "./Projects"
import './css/tailwind.css'

const App = () => {
    return (
        <div className="min-h-screen">
            <div className="flex flex-col w-full fixed pin-l pin-y">
                <Header />
                <div className="px-4 pt-4 flex-1 overflow-y-scrol">
                    <Switch>
                        <Route exact path='/' component={Hello}></Route>
                        <Route exact path='/about' component={About}></Route>
                        <Route exact path='/projects' component={Projects}></Route>
                    </Switch>
                </div>
                <Footer />
            </div >
        </div >
    )
};

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById("app"))