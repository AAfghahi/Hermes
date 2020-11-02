import {
    RECEIVE_ROUTES, 
    RECEIVE_ROUTE, 
    REMOVE_ROUTE
} from '../actions/routes_actions';

const routeReducer = (oldState = {}, action) =>{
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_ROUTES:
            action.routes.forEach(route => newState[route.id]= route)
            return newState;
        case RECEIVE_ROUTE:
            newState[action.route.id]=action.route;
            return newState;
        case REMOVE_ROUTE:
            delete newState[action.routeId];
            return newState;
        default:
            return oldState;
    }

};

export default routeReducer;