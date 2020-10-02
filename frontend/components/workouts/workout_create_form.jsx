import React from 'react';
import {Link} from 'react-router-dom';

class WorkoutForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.workout;
        this.handleSubmit = this.handleSubmit.bind(this);
     
    }

    update(field){
        return e =>{
            this.setState({[field]:e.currentTarget.value});
        };
        
    }

    handleSubmit(){
        const _self = this.state;
        let feet = this.state.miles*5280;
        let hourSeconds = this.state.hours * 3600;
        hourSeconds += this.state.minutes *60 + this.state.seconds;
       
        this.props.action({
            duration:feet, 
            activity_type: _self.activity_type,
            duration: hourSeconds, 
            description: _self.description, 
            distance: feet, 
            workout_name:_self.workout_name,
            elevation: _self.elevation
        });
    }


    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <h1>{this.props.formType}</h1>
                <ul>
                    <li>
                        Distance
                        <div>
                            <input type="number"
                            step='0.01'
                            value={this.state.miles}
                            onChange={this.update('miles')}
                            />
                            mi
                        </div> 
                    </li>
                    <li>
                        Duration
                        <div><input type="number"
                            placeholder='01'
                            value={this.state.hours}
                            min='0'
                            onChange={this.update('hours')}
                            /> hr</div>
                        <div>
                        <input type="number"
                            placeholder='00'
                            value={this.state.minutes}
                            min='0'
                            max='59'
                            onChange={this.update('minutes')}
                            /> min
                        </div>
                        <div>
                            <input type="number"
                            placeholder='00'
                            min='0'
                            max='59'
                            value={this.state.seconds}
                            onChange={this.update('seconds')}
                            />
                            s
                        </div>
                    </li>
                    <li>
                        Elevation
                        <div>
                            <input type="number"
                            value={this.state.elevation}
                            onChange={this.update('elevation')}
                            />
                        </div>
                    </li>
                </ul>
                <label>Sport
                    <select onChange={this.update('activity_type')} value={this.state.activity_type}>
                        <option  value="Ride">Ride</option>
                        <option value="Run">Run</option>
                        <option value="Walk">Walk</option>
                    </select>
                </label>
                <label>Title
                    <input 
                        type="text" 
                        value={this.state.workout_name}
                        onChange={this.update('workout_name')}
                        />
                </label>
                <label>Description
                    <textarea
                        value={this.state.description}
                        onChange={this.update('description')}
                        />
                </label>
                <button type="submit">Create</button>
                <Link to='/workouts'>Cancel</Link>
            </form>
            </div>
            
        )
    }
}

export default WorkoutForm;