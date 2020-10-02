import React from 'react';
import {Link} from 'react-router-dom';
import {formatDate} from '../../util/date_utils';

class WorkoutIndexItem extends React.Component{

    render(){
        const {activity_type, workout_name, duration, distance, elevation, created_at} = this.props.workout;
        return(
            <tr>
                <th>{activity_type}</th>
                <th>{created_at}</th>
                <th><Link to='/workouts'>{this.props.workout.workout_name}</Link></th>
                <th>{duration}</th>
                <th>{distance}</th>
                <th>{elevation}</th>
                <th><Link to={`/workouts/${this.props.workout.id}/edit`}>Edit</Link></th>
                <th><button>Delete</button></th>
            </tr>
        )
    }
}

export default WorkoutIndexItem;