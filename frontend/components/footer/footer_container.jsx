import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Footer from './footer';

const mapStateToProps = ({ session, entities: { routes } }) => {
  return {
    route: routes[]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Footer);