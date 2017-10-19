import React, { Component } from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

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
            <div className="App">
                <Nav></Nav>
                <Router>
                    <div>
                        {routes.map((route, i) => (
                            <Route exact key={i} {...route} />
                        ))}
                        
                        <Route exact path="/" component={Summary} />
                    </div>
                </Router>
                <Footer></Footer>
            </div>
        );
    }
}

export default App;
