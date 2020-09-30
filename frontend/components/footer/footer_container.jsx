import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Footer from './footer';

const mapStateToProps = ({ session, entities: { routes } }) => {
  return {
    route: state.entities.routes[ownProps.match.params.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Footer);