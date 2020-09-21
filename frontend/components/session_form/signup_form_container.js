import {connect} from 'react-redux';
import React from 'react';
import SessionForm from './session_form';
import {signup} from '../../actions/session_actions';

const mapStateToProps = ({errors}) =>({
    errors: errors.session,
    formType: 'signup'
    navLink: <Link to="/login">Log In</Link>
});

const mapDispatchToProps = dispatch =>({
    processForm: user => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);