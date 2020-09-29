import React from "react";
import { connect } from 'react-redux';
import { updateRoute, fetchRoute } from '../../actions/routes_actions';
import RouteForm from './route_form';
import {withRouter} from 'react-router-dom';

class EditRouteForm extends React.Component{

componentDidMount(){
    this.props.fetchRoute(this.props.match.params.id);
}

render(){
    const {action, route, history } = this.props;

    if (!route) return null;
    return(
        <RouteForm
            action={action}
            route= {route}
            history= {history}/>
    );
}

}

const mapStateToProps = (state, ownProps)=>{
    return({
        route: state.entities.routes[ownProps.match.params.id],

    });
};

const mapDispatchToProps = dispatch => ({
    fetchRoute: routeId => dispatch(fetchRoute(routeId)),
    action: route => dispatch(updateRoute(route)) 
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditRouteForm));