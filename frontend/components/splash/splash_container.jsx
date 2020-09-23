import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SplashForm from './splash';

const mapStateToProps = () => ({
    user:{
        email: 'email@email.com',
        password:'hunter12'}
});

const mapDispatchToProps = dispatch => ({
    login: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashForm);