import React, { Component } from 'react'
import request from 'superagent'
import markdownit from 'markdown-it'
import moment from 'moment'
import config from '../config'

import './NewPost.css'

class NewPost extends Component {

    constructor(props) {
        super(props)
        this.state = {
            token: '',
            editArea: '',
            editTitle: '',
            tag: '',
            conect: request.post(`${config.dev}/api/post`),
            who: ''
        }
        this.handleEditAreaChange = this.handleEditAreaChange.bind(this)
        this.handleEditTitleChange = this.handleEditTitleChange.bind(this)
        this.createNewPost = this.createNewPost.bind(this)
        this.handleTagChange = this.handleTagChange.bind(this)
        this.handleWhoChange = this.handleWhoChange.bind(this)
    }

    // componentWillMount() {
    //     console.log('checkToken')
    // }

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

    handleWhoChange(event) {
        this.setState({ who: event.target.value })
    }

    createNewPost() {
        if (this.state.editTitle && this.state.editArea) {
            this.state.conect.send({
                title: this.state.editTitle,
                markdownContent: this.state.editArea,
                content: this.state.editArea,
                createDate: moment().format('YYYY-MM-DD hh:mm:ss'),
                tags: this.state.tag.split('、'),
                who: this.state.who,
                status: 1
            }).end((err, res) => {
                console.log(res.body)
            })
        } else {
            return false
        }
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
                    <div className="form-group">
                        <input className="form-control" placeholder="标题" value={this.state.editTitle} onChange={this.handleEditTitleChange}></input>
                    </div>
                    
                    <div className="form-group">
                        <textarea rows="20" className="form-control" placeholder="内容 （markdown)" value={this.state.editArea} onChange={this.handleEditAreaChange}></textarea>
                    </div>

                    <div className="form-group">
                        <input className="form-control" placeholder="Tag" value={this.state.tag} onChange={this.handleTagChange}></input>
                    </div>

                    <div className="form-group">
                        <input className="form-control" placeholder="Who are you ???" value={this.state.who} onChange={this.handleWhoChange}></input>
                    </div>

                    <div className="form-group">
                        <button onClick={this.createNewPost} className="btn btn-default">创建新文章</button>
                    </div>
                    
                    
                </article>

                
            </div>
        )
    }
}

export default NewPost