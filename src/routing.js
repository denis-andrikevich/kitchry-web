import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Home from './layouts/Home/Home';
import Clients from './layouts/Clients/Clients';
import Login from './components/Login/LoginContainer';

class CoreRouting extends Component{
	render(){
		return(
			<Router>
		        <div>
		        	<Route path="/" component={Home} exact/>
		        	<Route path="/clients" component={Clients}/>
		        	<Route path="/login" component={Login}/>
		        </div>
	    	</Router>
		)
	}
}

export default CoreRouting;