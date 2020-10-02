import {connect} from 'react-redux';
import WorkoutShow from './workout_show';
import {fetchWorkout, updateWorkout, deleteWorkout} from '../../actions/workout_actions';


const mapStateToProps = (state, ownProps) =>{
    
    return({
        user: state.entities.users[state.session.id],
        workout:state.entities.workouts[ownProps.match.params.id]
    });
};

const mapDispatchToProps = dispatch => ({
    fetchWorkout: workoutId => dispatch(fetchWorkout(workoutId)),
    updateWorkout: workout => dispatch(updateWorkout(workout)),
    deleteWorkout: workoutId => dispatch(deleteWorkout(workoutId))
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutShow);
