import {connect} from 'react-redux';
import {createWorkout} from '../../actions/workout_actions';
import CreateWorkoutForm from'./workout_create_form';

const mapStateToProps = state => ({
    workout:{
        elevation:0,
        activity_type: 'Ride',
        description: '',
        distance:0,
        duration:0,
        workout_name:'',
        hours:0,
        minutes:0,
        seconds:0,
        miles:0
       },
    formType:'Manual Entry'
});

const mapDispatchToProps = dispatch => ({
    action: (workout) => dispatch(createWorkout(workout))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateWorkoutForm);