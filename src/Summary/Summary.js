import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import request from 'superagent'

import util from '../util'

import './Summary.css'


class Summary extends Component {

    constructor(props) {
        super(props)
        console.log(this.props, this)
        this.state = {
            post: [],
            getPosts: request.get(`http://localhost:3888/api/post`)
        }
    }

    // 初始化时调用此钩子
    componentWillMount () {
        this.state.getPosts.end((err, data) => {
            if (data.body) {
                this.setState({ post: data.body.body })
            }
        })
    }

    render() {
        // console.log(this.state.post)
        let articleItems = this.state.post.map((item) =>
            <article className="s-post" key={item._id}>
                <header>
                    <h1 className="s-post-title">
                        <Link to={`post/${item._id}`}>{item.title}</Link>
                    </h1>
                    <p className="s-post-meta">
                        <span>Posted on</span> {item.createDate}  |  <a className="s-post-comment-link">{item.commentCount} 条评论</a>
                    </p>
                </header>
                <section className="s-post-desc" dangerouslySetInnerHTML={util.createHtmlFromMarkdown(item.markdownContent)}></section>
            </article>
        )

        return (
            <section className="s-posts-wrap">
                {articleItems}
            </section>
        )
    }
}

export default Summary