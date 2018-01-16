import React, { Component } from 'react'
import './Nav.css'

import { Link } from 'react-router-dom'

import siteInfo from '../config'


class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            siteInfo: siteInfo
        }
    }

    render() {

        let listItem = siteInfo.siteMenu.map((item) =>
            <li key={item.id}>
                <Link to={`${item.url}`}>{item.name}</Link>
            </li>
        )

        return (
            <header className="main-header no-cover">
                <div className="vertical">
                    <div className="main-header-content inner">
                        <h1 className="page-title">{siteInfo.siteName}</h1>
                        <h3 className="page-description">{siteInfo.siteDescription}</h3>
                    </div>
                </div>
                <div className="h-nav">
                    <div className="h-nav-box">
                        <ul>
                            {listItem}
                        </ul>
                    </div>

                </div>
            </header>
        )
    }
}

export default Nav