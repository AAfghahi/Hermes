import React from 'react';
import WorkoutIndexItem from './workout_index_item';

class WorkoutIndex extends React.Component{

    componentDidMount(){
        this.props.fetchWorkouts();
    
    }

    render(){
        return(
            <table>
                <thead>
                    <tr>
                        <th>Sport</th>
                        <th>Date</th>
                        <th>Title</th>
                        <th>Time</th>
                        <th>Distance</th>
                        <th>Elevation</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.workouts.map(workout=>
                        <WorkoutIndexItem
                            workout= {workout}
                            delete = {this.props.deleteWorkout}
                            key= {workout.id}
                            />
                            )}
                </tbody>
                    
            </table>
        )
    }
}

export default WorkoutIndex;