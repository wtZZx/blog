import React, { Component } from 'react'

import request from 'superagent'
import markdownit from 'markdown-it'

import './NewPost.css'

class NewPost extends Component {

    constructor(props) {
        super(props)
        this.state = {
            token: '',
            editArea: '',
            editTitle: '',
            tag: '',
            conect: request.post('http://localhost:3888/api/post')
        }
        this.handleEditAreaChange = this.handleEditAreaChange.bind(this)
        this.handleEditTitleChange = this.handleEditTitleChange.bind(this)
        this.createNewPost = this.createNewPost.bind(this)
        this.handleTagChange = this.handleTagChange.bind(this)
    }

    componentWillMount() {
        console.log('checkToken')
    }

    handleEditAreaChange(event) {
        console.log(event.target.value)
        this.setState({ editArea: event.target.value })
    }

    handleEditTitleChange(event) {
        this.setState({ editTitle: event.target.value })
    }

    handleTagChange(event) {
        this.setState({ tag: event.target.value })
    }

    createNewPost() {
        this.state.conect.send({
            title: this.state.editTitle,
            markdownContent: this.state.editArea,
            content: this.state.editArea,
            createDate: new Date().toLocaleDateString(),
            tags: this.state.tag.split('、')
        }).end((err, res) => {
            console.log(res.body)
        })
    }

    createHtmlFromMarkdown(post) {
        const md = new markdownit()
        const content = md.render(post)
        return { __html: content }
    }


    render() {
        return (
            <div>
                <article className="edit-area">
                    <div>
                        <input value={this.state.editTitle} onChange={this.handleEditTitleChange}></input>
                    </div>
                    
                    <div>
                        <textarea value={this.state.editArea} onChange={this.handleEditAreaChange}></textarea>
                    </div>

                    <div>
                        <input value={this.state.tag} onChange={this.handleTagChange}></input>
                    </div>
                    
                    
                </article>

                <article>
                    <section dangerouslySetInnerHTML={this.createHtmlFromMarkdown(this.state.editArea)}></section>
                </article>

                <button onClick={this.createNewPost}>Add new</button>
            </div>
        )
    }
}

export default NewPost