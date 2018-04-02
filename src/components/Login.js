import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { AUTH_TOKEN } from '../constants'

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`
const SIGNUP = gql`
  mutation signup($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      token
    }
  }
`

class Login extends Component {
  state = {
    login: true, // switch between Login and SignUp
    email: '',
    password: '',
    name: ''
  }

  render() {
    return (
      <div style={{ margin: '3em' }}>
        <h4>{this.state.login ? 'Login' : 'Sign Up'}</h4>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {!this.state.login && (
            <input
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
              type="text"
              placeholder="Your name"
            />
          )}
          <input
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
            type="text"
            placeholder="Your email address"
          />
          <input
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
            type="password"
            placeholder="Choose a safe password"
          />
        </div>
        <div style={{ display: 'flex' }}>
          {this.state.login ? (
            <Mutation mutation={LOGIN}>
              {(login, { data }) => (
                <button onClick={() => this._login(login)}>Login</button>
              )}
            </Mutation>
          ) : (
            <Mutation mutation={SIGNUP}>
              {(signup, { data }) => (
                <button onClick={() => this._signup(signup)}>Signup</button>
              )}
            </Mutation>
          )}

          <div
            style={{ cursor: 'pointer', margin: '0 10px' }}
            onClick={() => this.setState({ login: !this.state.login })}
          >
            {this.state.login
              ? 'need to create an account?'
              : 'already have an account?'}
          </div>
        </div>
      </div>
    )
  }

  _login = async login => {
    const { email, password } = this.state
    const result = await login({ variables: { email, password } })
    const token = result.data.login.token
    this._saveUserData(token)
    this.props.history.push('/')
  }

  _signup = async signup => {
    const { name, email, password } = this.state
    const result = await signup({ variables: { name, email, password } })
    const token = result.data.signup.token
    this._saveUserData(token)
    this.props.history.push('/')
  }

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token)
  }
}

export default Login
