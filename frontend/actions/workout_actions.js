import * as WorkoutAPIUtil from '../util/workout_api_util';

export const RECEIVE_WORKOUTS = 'RECEIVE_WORKOUTS';
export const RECEIVE_WORKOUT = 'RECEIVE_WORKOUT';
export const REMOVE_WORKOUT = 'REMOVE_WORKOUT';

const receiveWorkouts = workouts => {
    return({
        type: RECEIVE_WORKOUTS,
        workouts 
    });
};

const receiveWorkout = workout => {
    return({
        type:RECEIVE_WORKOUT,
        workout
    });
};

const removeWorkout = workoutId =>{
    return({
        type:REMOVE_WORKOUT,
        workoutId
    });
};

export const fetchWorkouts = () => dispatch => {
    return WorkoutAPIUtil.fetchWorkouts()
        .then(workouts => dispatch(receiveWorkouts(workouts)));
};

export const fetchWorkout = (workoutId) => dispatch => {
    return WorkoutAPIUtil.fetchWorkout(workoutId)
        .then(workout => dispatch(receiveWorkout(workout)));
};

export const createWorkout = (workout) => dispatch => {
    return WorkoutAPIUtil.createWorkout(workout)
        .then(workout => dispatch(receiveWorkout(workout)));
};

export const updateWorkout = (workout) => dispatch => {
    return WorkoutAPIUtil.updateWorkout(workout)
        .then(workout => dispatch(receiveWorkout(workout)));
};

export const deleteWorkout = (workoutId) => dispatch => {
    return WorkoutAPIUtil.deleteWorkout(workoutId)
        .then(workoutId => dispatch(removeWorkout(workoutId)));
};

