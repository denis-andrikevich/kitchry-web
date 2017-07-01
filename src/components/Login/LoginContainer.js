import Login from './Login';
import { connect } from 'react-redux';
import { loginAction, logoutAction } from '../../kitchry-core/redux/login/LoginActions';

const mapStateToProps = ( state ) => {
    return state.login
};

const LoginContainer = connect(
    mapStateToProps,
    { loginAction, logoutAction }
) (Login);

export default LoginContainer;
