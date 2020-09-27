import * as RouteAPIUtil from '../util/route_api_util';

export const RECEIVE_ROUTES = 'RECEIVE_ROUTES';
export const RECEIVE_ROUTE = 'RECEOUVE_ROUTE';
export const REMOVE_ROUTE = 'REMOVE_ROUTE';

const receiveRoutes = routes =>{
    return({
        type: RECEIVE_ROUTES,
        routes
    });
};

const receiveRoute = route =>{
    return({
        type: RECEIVE_ROUTE, 
        route
    });
};

const removeRoute = routeId =>{
    return({
        type: REMOVE_ROUTE,
        routeId
    });
};

export const fetchRoutes = () => dispatch => {
    return RouteAPIUtil.fetchRoutes()
        .then(routes => dispatch(receiveRoutes(routes)));
};

export const fetchRoute = (routeId) => dispatch => {
    return RouteAPIUtil.fetchRoute(routeId)
        .then(route => dispatch(receiveRoute(route)));
};

export const createRoute = (route) => dispatch =>{
    return RouteAPIUtil.createRoute(route)
        .then(route => dispatch(receiveRoute(route)));
};

export const updateRoute = (route) => dispatch => {
    return RouteAPIUtil.updateRoute(route)
        .then(route => dispatch(receiveRoute(route)));
};

export const deleteRoute = (routeId) => dispatch => {
    return RouteAPIUtil.deleteRoute(routeId)
        .then(routeId => dispatch(removeRoute(routeId)));
};