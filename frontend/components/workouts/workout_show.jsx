import React from 'react';
import {Link} from 'react-router-dom';
import {formatDate} from '../../util/date_utils';

class WorkoutShow extends React.Component{
    componentDidMount(){
        this.props.fetchWorkout(this.props.match.params.id);
    }

    render(){
        if (typeof this.props.workout === 'undefined'){
            return null;
        }else{
            return(
            <div className='workout-show-container'>
                <div className='workout-icons'>
                    <Link to={`/workouts/${this.props.workout.id}/edit`}><img className='edit-pencil' src={window.pencilURL}/></Link>
                </div>
                <div className='workout-container'>
                    <div className='workout-title-container'>
                        <h1 className='workout-title'>{this.props.user.first_name} {this.props.user.last_name} - Workout</h1>
                    </div>
                    <div className='workout-show-container'>
                        <div className='workout-info-container'>
                            <p className="workout-creation-time">{formatDate(this.props.workout.created_at)}</p>
                            <h1 className='workout-show-title'>{this.props.workout.workout_name}</h1>
                            <textarea className='workout-textarea'>
                                {this.props.workout.description}
                            </textarea>
                        </div>
                        <div className='stats-container'>
                            <ul className='stats'>
                                <li className='individual-stats'>
                                    <p className='ind-stats-info'>{Math.round((this.props.workout.distance/5280)*100)/100} mi </p>
                                    <p class='stats-identifier'>Distance</p>
                                </li>
                                <li className='individual-stats'>
                                    <p className='ind-stats-info'>{(Math.round(this.props.workout.duration/3600))}:{('0'+ Math.round(this.props.workout.duration/60)%60).slice(-2)}:{('0'+this.props.workout.duration%60).slice(-2)}</p>
                                    <p class='stats-identifier'>Duration</p>
                                </li>

                                <li className='individual-stats'>
                                    <p className='ind-stats-info'>{(this.props.workout.distance/this.props.workout.duration).toFixed(2)} mi/h</p>
                                    <p class='stats-identifier'>Speed</p>
                                </li>

                                <li className='individual-stats'>
                                    <p className='ind-stats-info'>{this.props.workout.elevation}</p>
                                    <p class='stats-identifier'>Elevation</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>


            </div>
            )

        }
    }
}

export default WorkoutShow;