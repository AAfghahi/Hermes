import {connect} from 'react-redux';
import React from 'react';
import SignupForm from './signup_form';
import {signup, clearErrors} from '../../actions/session_actions';

const mapStateToProps = ({errors}, state) =>({
    errors: errors.session,
    formType: 'Sign Up'
});

const mapDispatchToProps = dispatch =>{
    
    return{
        
    processForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
    }
;}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);