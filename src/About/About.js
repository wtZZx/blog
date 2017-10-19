import React, { Component } from 'react'

import AboutMD from './About.md'

import util from '../util'

class About extends Component {
    render () {

        console.log(util, AboutMD)

        return (
            <div dangerouslySetInnerHTML={util.createHtmlFromMarkdown(AboutMD)}></div>
        )
    }
}

export default About