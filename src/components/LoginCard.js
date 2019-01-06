import Input from './Input';
import Button from './Button';
import React, { Component } from 'react';

const card = {
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '30px 50px 20px 50px',
    boxShadow: '0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12)',
    minWidth: '400px',
    boxSizing: 'border-box'
}

class LoginCard extends Component {
    constructor() {
      super()
      this.state = {
        email: '',
        password: ''
      }
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }

    onButtonClick = async (event) => {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allowed-Origin', '*');

        const data = {
            email: this.state.email,
            password: this.state.password
        }

        const options = {
            method: 'POST',
            headers,
            body: JSON.stringify(data)
        }

        const request = new Request('http://localhost:8000/login/username', options);
        const response = await fetch(request);
        console.log(response);
    }
    
    render() {
      return (        
        <div style={card}>
            <Input placeholder='Email' type="text" textChange={this.onEmailChange}/>
            <Input placeholder='Password' type="password" textChange={this.onPasswordChange}/>
            <Button text='Entrar' click={this.onButtonClick}/>         
            <div>
                Email: {this.state.email}
                Password: {this.state.password}
            </div>    
        </div>
      );
    }
}

export default LoginCard;