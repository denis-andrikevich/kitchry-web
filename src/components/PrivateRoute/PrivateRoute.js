import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => {
    const renderFn = props => {
        const redirectUrl = {
            pathname: '/login',
            from: props.location
        };
        if (!isLoggedIn) return <Redirect to={redirectUrl} />
        return <Component {...props} />
    };

    return <Route {...rest} render={ renderFn } />
}

export default PrivateRoute;