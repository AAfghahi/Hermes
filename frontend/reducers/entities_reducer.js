import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import routeReducer from './routes_reducer';
import workoutReducer from './workouts_reducer';
  
export default combineReducers({
    users: usersReducer,
    routes: routeReducer,
    workouts: workoutReducer
});