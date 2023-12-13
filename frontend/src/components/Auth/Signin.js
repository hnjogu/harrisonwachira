import React, { Component } from 'react'
import Outernavbar from '../header/outernavbar.component'
 import axios from 'axios';
import { Navigate  } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap"


export default class Login extends Component {
    constructor(props) {
        super(props)
        const udata = localStorage.getItem('user')
        let loggedIN = true
        if (udata == null){
          loggedIN = false
        }
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            email: '',
            password: '',
            loggedIN
        }
    }

    onChangeUserEmail(e) {
        this.setState({ email: e.target.value })
    }
    onChangePassword(e) {
        this.setState({ password: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
       

        const userObject = {
            email: this.state.email,
            password: this.state.password
        };
        axios.post('http://127.0.0.1:8003/api/user-login', userObject)
            .then((res) => {
               if(res.status=== 200){
                this.setState({
                  loggedIN : true
                })
                localStorage.setItem('user', JSON.stringify(res.data))
               }
            }).catch((error) => {
                console.log(error)
                alert("Wrong email or password")
            });
        this.setState({ email: '', password: ''})
    }

  render() {
    if (this.state.loggedIN){
      return <Navigate  to="/home"/>
    }
    return (
        <div className='App'>
            <Outernavbar/>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs={6} md={4}>
                            <Form className="shadow p-4 bg-white rounded" onSubmit={this.onSubmit}>
                                <h3>Sign In</h3>
                                <p className="forgot-password text-right">
                                    Don't have account <a href="/sign-up">join us?</a>
                                </p>
                                <div className="mb-3">
                                    <label>Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter email"
                                        onChange={this.onChangeUserEmail}
                                        name="email"
                                        value={this.state.email}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Enter password"
                                        onChange={this.onChangePassword}
                                        name="password"
                                        value={this.state.password}
                                    />
                                </div>
                                <div className="mb-3">
                                    <div className="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="customCheck1"
                                        />
                                        <label className="custom-control-label" htmlFor="customCheck1">
                                        Remember me
                                        </label>
                                    </div>
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary" >
                                    Login
                                    </button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
       </div>
    )
  }
}