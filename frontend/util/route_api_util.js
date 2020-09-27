
export const fetchRoutes = routes => {
    return $.ajax({
        url:'/api/routes',
        data: {routes}
    });
}; 


export const fetchRoute = routeId =>{
   return $.ajax({
        url: `/api/routes/${routeId}`
    });
};

export const createRoute = route =>{
    return $.ajax({
        url:'/api/routes',
        method:'POST',
        data: {route}
    });
};

export const updateRoute = route => {
    return $.ajax({
        url:`/api/routes/${route.id}`,
        method: 'PATCH',
        data: {route}
    });
};

export const deleteRoute = (routeId) =>{
    return $.ajax({
        url:`/api/routes/${routeId}`
    });
};



