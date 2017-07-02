import { connect } from 'react-redux';
import { logoutAction } from '../../kitchry-core/redux/login/LoginActions';

import Wrapper from './Wrapper';

const mapStateToProps = ( state ) => {
    return state.login
};

const WrapperContainer = connect(
    null,
    { logoutAction }
) (Wrapper);

export default WrapperContainer;