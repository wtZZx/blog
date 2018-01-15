import React, { Component } from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import { AnimatedSwitch } from 'react-router-transition'

import './App.css'

import '../atom-one-dark.css'

import routes from '../routes'
import Summary from '../Summary/Summary'
import Footer from '../Footer/Footer'


import Nav from '../Nav/Nav'

class App extends Component {

    constructor (props) {
        super(props)
        console.log(this.props, this)
    }
    
    render() {
        return (
            <Router>
                <div className="App">
                    <Nav></Nav>
                    <AnimatedSwitch
                        atEnter={{ opacity: 0 }}
                        atLeave={{ opacity: 0 }}
                        atActive={{ opacity: 1 }}
                    >
                        {routes.map((route, i) => (
                            <Route exact key={i} {...route} />
                        ))}

                        <Route exact path="/" component={Summary} />
                    </AnimatedSwitch>
                    <Footer></Footer>
                </div>
            </Router>
        );
    }
}

export default App;
