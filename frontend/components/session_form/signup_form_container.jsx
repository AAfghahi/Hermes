import {connect} from 'react-redux';
import React from 'react';
import SignupForm from './signup_form';
import {signup} from '../../actions/session_actions';

const mapStateToProps = ({errors}, state) =>({
    errors: errors.session,
    formType: 'signup'
});

const mapDispatchToProps = dispatch =>({
    processForm: user => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);