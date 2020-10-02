import React from 'react';
import {Link} from 'react-router-dom';
import {formatDate} from '../../util/date_utils';

class WorkoutIndexItem extends React.Component{

    render(){
        const {activity_type, workout_name, duration, distance, elevation, created_at} = this.props.workout;
        return(
            <tr className="activity">
                <th className='activity-item'>{activity_type}</th>
                <th className='activity-item'>{formatDate(created_at)}</th>
                <th className='activity-item-title'><Link className='activity-link' to={`/workouts/${this.props.workout.id}`}>{this.props.workout.workout_name}</Link></th>
                <th className='activity-item'>{(Math.round(duration/3600))}:{('0'+ Math.round(duration/60)%60).slice(-2)}:{('0'+duration%60).slice(-2)}</th>
                <th className='activity-item'>{Math.round((distance/5280)*100)/100} mi</th>
                <th className='activity-item'>{elevation} ft</th>
                <th className='activity-item'><Link className='activity-link' to={`/workouts/${this.props.workout.id}/edit`}>Edit</Link></th>
                <th className='activity-item'><button className='activity-button' onClick={()=> this.props.delete(this.props.workout.id)}>Delete</button></th>
            </tr>
        )
    }
}

export default WorkoutIndexItem;