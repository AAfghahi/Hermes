import React from 'react';
import WorkoutIndexItem from './workout_index_item';

class WorkoutIndex extends React.Component{

    componentDidMount(){
        this.props.fetchWorkouts();
    
    }


    render(){
        return(
            <div>
                <h1 className='route-title'> My Activities</h1>

                <p className='activity-number'>{this.props.workouts.length} Activities</p>
            <table className='activities-table'>
                <thead className='activity-columns'>
                    <tr>
                        <th className='column-titles'>Sport</th>
                        <th className='column-titles'>Date</th>
                        <th className='column-titles'>Title</th>
                        <th className='column-titles'>Time</th>
                        <th className='column-titles'>Distance</th>
                        <th className='column-titles'>Elevation</th>
                        <th className='column-titles'></th>
                        <th className='column-titles'></th>
                    </tr>
                </thead>
                <tbody className='activity-body'>
                    {this.props.workouts.map(workout=>
                        <WorkoutIndexItem
                            workout= {workout}
                            delete = {this.props.deleteWorkout}
                            key= {workout.id}
                            />
                            )}
                </tbody>
                    
            </table>
            </div>
        )
    }
}

export default WorkoutIndex;