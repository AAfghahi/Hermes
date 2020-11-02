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
        let feet = parseInt(this.state.miles)*5280;
        let hourSeconds = parseInt(this.state.hours) * 3600;
        hourSeconds += parseInt(this.state.minutes) *60 + parseInt(this.state.seconds);
    
        this.props.action({
            duration:feet, 
            activity_type: _self.activity_type,
            duration: hourSeconds, 
            description: _self.description, 
            distance: feet, 
            workout_name:_self.workout_name,
            elevation: _self.elevation
        }).then(()=>this.props.history.push('/workouts'));
    }


    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <h1 className='create-title'>{this.props.formType}</h1>
                <div className='all-inputs'>
                        <div className='top container'>
                            <ul className='metrics-input'>
                                <li className='metrics-li'>
                                    <p className='workout-descriptors'>Distance</p>
                                       <div className='duration-container'>

                                            <input 
                                            type="number"
                                            className='distance-input'
                                            step='0.01'
                                            onChange={this.update('miles')}
                                            />
                                            <div className='number-inputs'>
                                            miles
                                            </div> 
                                       </div>
                                </li>
                                <li className='metrics-li'>
                                    <p className='workout-descriptors'> Duration</p>
                                   <div className= 'duration-container'>
                                        <div className='time-inputs'>
                                            <input 
                                            className='time-submit'
                                            type="number"
                                            placeholder='00 hrs'
                                            maxLength='2'
                                            onChange={this.update('hours')}
                                            /> 
                                        </div>
                                        <div className= 'time-inputs'>
                                            <input
                                                className='time-submit'
                                                type="number"
                                                placeholder='00 min'
                                                min='0'
                                                max='60'
                                                onChange={this.update('minutes')}
                                                />
                                        </div>
                                        <div className='time-inputs'>
                                            <input 
                                                className='time-submit'
                                                type="number"
                                                placeholder='00 s'
                                                min='0'
                                                max='60'
                                                onChange={this.update('seconds')}
                                            />
                                        </div>
                                   </div>
                                </li>
                                <li className='metrics-li'>
                                    <p className='workout-descriptors'>Elevation</p>
                                    <div className='duration-container'>

                                        <input type="number"
                                        className='distance-input'
                                        onChange={this.update('elevation')}
                                        />
                                        <div className='number-inputs'>
                                            feet
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            
                        </div>
                        <br/>
                        <div className='sports-choice'>
                            <label>Sport</label>
                                <select onChange={this.update('activity_type')} value={this.state.activity_type}>
                                    <option  value="Ride">Ride</option>
                                    <option value="Run">Run</option>
                                    <option value="Walk">Walk</option>
                                </select>

                            <label>Title</label>
                                <input 
                                    type="text" 
                                    value={this.state.workout_name}
                                    onChange={this.update('workout_name')}
                                    />
                        </div>
                    
                        
                        <label>Description</label>
                            <textarea
                                value={this.state.description}
                                onChange={this.update('description')}
                                />
                </div>    
              
                <button className='workout-submit' type="submit">Create</button>
                <Link to='/workouts'>Cancel</Link>
            </form>
            </div>
            
        )
    }
}

export default WorkoutForm;