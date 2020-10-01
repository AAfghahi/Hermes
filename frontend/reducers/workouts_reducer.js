import {
    RECEIVE_WORKOUTS,
    RECEIVE_WORKOUT, 
    REMOVE_WORKOUT
} from '../actions/workout_actions';

const workoutReducer = (oldState = {}, action) =>{
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch(action.type){
        case RECEIVE_WORKOUTS:
            return action.workouts;
        case RECEIVE_WORKOUT:
            newState[action.workout.id] = action.workout;
            return newState;
        case REMOVE_WORKOUT:
            delete newState[action.workoutId];
            return newState;
        default:
            return oldState;
    }
};

export default workoutReducer;