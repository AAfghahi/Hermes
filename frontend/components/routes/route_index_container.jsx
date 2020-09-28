import {connect} from 'react-redux';
import { updateRoute, fetchRoutes } from '../../actions/routes_actions';
import RouteIndex from './route_index';

const mapStateToProps = state =>({
    routes: Object.values(state.entities.routes)
});

const mapDispatchToProps = dispatch => ({
    updateRoute: (route)=>dispatch(updateRoute(route)),
    fetchRoutes: ()=> dispatch(fetchRoutes())
});

export default connect(mapStateToProps, mapDispatchToProps)(RouteIndex);