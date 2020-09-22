import { logOut } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut()),
});


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
