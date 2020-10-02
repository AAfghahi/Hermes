import {connect} from 'react-redux';
import WorkoutIndex from './workout_index';
import {
    fetchWorkouts,  
    deleteWorkout
} from '../../actions/workout_actions';


const mapStateToProps = state => ({
    workouts: Object.values(state.entities.workouts)
});

const mapDispatchToProps = dispatch => ({
    fetchWorkouts: () => dispatch(fetchWorkouts()),
    deleteWorkout: (workoutId) => dispatch(deleteWorkout(workoutId))
});

export default connect(mapStateToProps,mapDispatchToProps)(WorkoutIndex);