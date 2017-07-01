import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({isLoggedIn: state.login.isLoggedIn});

export default withRouter(
    connect(mapStateToProps)(PrivateRoute)
)