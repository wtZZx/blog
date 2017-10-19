import React, { Component } from 'react'
import request from 'superagent'

class Login extends Component {
    constructor (props) {
        super(props)
        this.state = {
            userName: '',
            userPwd: '',
            userLogin: request.post('http://localhost:3888/api/login')
        }
        this.handleUserNameChange = this.handleUserNameChange.bind(this)
        this.handleUserPwdChange = this.handleUserPwdChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillMount () {
        console.log('WillMount')
    }

    handleUserNameChange (event) {
        this.setState({ 'userName': event.target.value })
    }

    handleUserPwdChange (event) {
        this.setState({ 'userPwd': event.target.value })
    }

    handleSubmit (event) {
        console.log('handleSubmit')
        this.state.userLogin.send({"userName": this.state.userName, "userPwd": this.state.userPwd}).end((err, data) => {
            console.log(data.body)
            sessionStorage.setItem('userToken', data.body.token)
        })
        event.preventDefault()
    }

    render () {
        return (
            <article>
                <header>
                    <h2>登录</h2>
                </header>
                <section>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="user-name"></label>
                            <input type="text" placeholder="用户名" classID="user-name" value={this.state.userName} onChange={this.handleUserNameChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="user-pwd"></label>
                            <input type="password" placeholder="密码" classID="user-pwd" value={this.state.userPwd} onChange={this.handleUserPwdChange}/>
                        </div>
                        <div>
                            <button type="submit">确认</button>
                        </div>
                    </form>
                </section>
            </article>
        )
    }
}

export default Login