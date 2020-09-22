import {signUp, logIn, logOut} from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = currentUser =>{
    return({
        type: RECEIVE_CURRENT_USER,
        currentUser
    });
};

export const logoutCurrentUser = () =>{
    return({
        type: LOGOUT_CURRENT_USER
    });
};

export const receiveSessionErrors = errors =>{
    return({
        type: RECEIVE_SESSION_ERRORS,
        errors
    });
};

export const login = user => dispatch => logIn(user)
    .then(user => {
        return(
            dispatch(receiveCurrentUser(user))
        );
    }
    );

export const logout = () => dispatch => logOut()
    .then(()=> dispatch(logoutCurrentUser()));

export const signup = user => dispatch => signUp(user)
    .then(user=> dispatch(receiveCurrentUser(user)));