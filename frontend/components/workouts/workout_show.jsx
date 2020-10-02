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
            <div>
                <div>
                    <button>edit</button>
                </div>
                <div>
                    <div>
                        <h1>{this.props.user.first_name} {this.props.user.last_name} - Workout</h1>
                    </div>
                    <div>
                        <div>
                            <p>{this.props.workout.created_at}</p>
                            <h1>{this.props.workout.workout_name}</h1>
                            <textarea>
                                {this.props.workout.description}
                            </textarea>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <p>{this.props.workout.distance} mi </p>
                                    <p>Distance</p>
                                </li>
                                <li>
                                    <p>{this.props.workout.duration}</p>
                                    <p>Duration</p>
                                </li>

                                <li>
                                    <p>{this.props.workout.distance}/{this.props.workout.duration} mi/h</p>
                                    <p>Speed</p>
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