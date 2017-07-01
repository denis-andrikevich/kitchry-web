import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import serialize from '../../helpers//serialize';


class Login extends Component {
	constructor(props) {
		super(props)

		this.handleSubmit = this.handleSubmit.bind(this);
		this.redirectUrl = { pathname: '/' };
		
		axios
			.post("/api/v2/mobile/login", serialize({
				userName: 'egank93@hotmail.com',
				password: '123456'
			}), {
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				}
			}).then(function (res) {
				console.log(res);
			})
	}

	handleSubmit(values) {
		this.props.loginAction(values);
	}

	// componentWillUpdate(nextProps){
	// 	if (nextProps.isLoggedIn){
	// 		window.location = '/';
	// 	}
	// }

	render() {
		if (this.props.isLoggedIn) return <Redirect to={this.redirectUrl} />

		return (
			<LoginForm onSubmit={this.handleSubmit} inProgress={this.props.request} />
		)
	}
}

export default Login;