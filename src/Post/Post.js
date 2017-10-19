import React, { Component } from 'react'

import request from 'superagent'

import util from '../util'

import './Post.css'

class Post extends Component {

    constructor(props) {
        super(props)
        console.log(this, props)
        this.state = {
            post: [],
            getPost: request.get(`http://localhost:3888/api/post/${this.props.match.params.id}`)
        }
    }

    componentWillMount() {
        this.state.getPost.end((err, data) => {
            this.setState({ 'post': data.body })
        })
    }

    render() {
        // const { match } = this.props
        // const post = this.state.post
        console.log(this.state.post)

        let post = this.state.post.map((item) =>
            // console.log(item);
            <article className="s-post" key={item._id}>
                <header className="post-header">
                    <h1 className="post-title">{item.title}</h1>
                    <section className="post-meta">
                        <time className="post-data">Post on {item.createDate}</time>
                    </section>
                </header>
                <section className="post-content">
                    <section dangerouslySetInnerHTML={util.createHtmlFromMarkdown(item.markdownContent)}></section>
                </section>
            </article>
        )

        return (
            <main>
                {post}
            </main>
        )
    }
}



export default Post