import {connect} from 'react-redux';
import RouteShow from './route_show';
import {fetchRoute, updateRoute, deleteRoute} from '../../actions/routes_actions';

const mapStateToProps = (state, ownProps) =>{
   
    return({
        user: state.entities.users[state.session.id],
        route: state.entities.routes[ownProps.match.params.id],
        
    });
    
};

const mapDispatchToProps = dispatch => ({
    fetchRoute: routeId => dispatch(fetchRoute(routeId)),
    updateRoute: route => dispatch(updateRoute(route)),
    deleteRoute: routeId => dispatch(deleteRoute(routeId))
});

export default connect(mapStateToProps, mapDispatchToProps)(RouteShow);