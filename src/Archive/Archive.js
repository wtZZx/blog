import React, { Component } from 'react'

import request from 'superagent'

import moment from 'moment'

class Archive extends Component {

    constructor (props) {
        super(props)
        this.state = {
            getPosts: request.get('http://localhost:3888/api/post'),
            posts: [],
            archive: {}
        }
    }

    componentWillMount () {
        this.state.getPosts.end((err, res) => {
            this.setState({ posts: res.body })
            console.log(this.state.posts)

            this.state.posts.forEach((val) => {
                let year = moment(val.createDate, 'YYYY-MM-DD').year()
                console.log(year)
            })

            console.log(this.state.archive)
        })
    }

    render () {
        return (
            <div>123</div>
        )
    }
}

export default Archive