import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'
import moment from 'moment'

import './Archive.css'

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
            this.setState({ posts: res.body.body })

            let timeMap = {}

            this.state.posts.forEach((val) => {
                let year = moment(val.createDate, 'YYYY-MM-DD').year(),
                    month = moment(val.createDate, 'YYYY-MM-DD').month();

                if (!timeMap[year]) {
                    timeMap[year] = {}
                }

                if (!Array.isArray(timeMap[year][month + 1])) {
                    timeMap[year][month + 1] = []
                }

                timeMap[year][month + 1].push(val)
            })

            this.setState({ archive: timeMap })

        })
    }


    render () {
        function getList (mp) {
            let list = [];
            for (let yk in mp) {
                for (let mk in mp[yk]) {
                    list.push(
                        <div key={yk} className="arcive_box">
                            <h2 className="arcive_year">{yk}</h2>
                            <ul className="arcive_ul">
                                {
                                    mp[yk][mk].map((pv) => {
                                        return (<li className="arcive-list" key={pv._id}>
                                                    <Link to={`post/${pv._id}`}>{pv.title}</Link>
                                                </li>)
                                    })
                                }
                            </ul>
                        </div>)
                }
            }
            return list
        }

        return (
            <div key="archive" className="archive_content">{getList(this.state.archive)}</div>
        )
    }
}

export default Archive