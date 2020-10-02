import { connect } from "react-redux";
import {fetchWorkout, updateWorkout} from '../../actions/workout_actions';
import EditWorkoutForm from './edit_workout_form';
import {withRouter} from 'react-router-dom';


  const mapStateToProps = (state, ownProps) => {

    return({
        workout: state.entities.workouts[ownProps.match.params.id],
        formType: 'Edit Activity'
    });
  };

  const mapDispatchToProps = dispatch => ({
      fetchWorkout: workoutId => dispatch(fetchWorkout(workoutId)),
      action: workout => dispatch(updateWorkout(workout))
  });

  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditWorkoutForm));