import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { Redirect } from 'react-router-dom';

class Login extends Component {
	constructor(props) {
		super(props)

		this.handleSubmit = this.handleSubmit.bind(this);
		this.redirectUrl = { pathname: '/' };
	}

	handleSubmit(values) {
		this.props.loginAction(values);
	}

	render() {
		if (this.props.isLoggedIn) return <Redirect to={this.redirectUrl} />

		return (
			<LoginForm onSubmit={this.handleSubmit} inProgress={this.props.request} />
		)
	}
}

export default Login;