import {connect} from 'react-redux';
import React from 'react';
import SessionForm from './session_form';
import {login} from '../../actions/session_actions';

const mapStateToProps = ({errors}) =>({
    errors: errors.session,
    formType: 'login',
    navLink: <Link to="/signup">sign up</Link>,
});

const mapDispatchToProps = dispatch =>({
    processForm: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);