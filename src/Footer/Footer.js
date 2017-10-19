import React, { Component } from 'react'
import './Footer.css'

// import { Link } from 'react-router-dom'

import siteInfo from '../config'

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            siteInfo: siteInfo
        }
    }

    render() {
        return (
            <div className="s-footer">
                <p className="s-cprt">{siteInfo.cprt}</p>
            </div>
        )
    }

}

export default Footer