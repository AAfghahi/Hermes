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
                                    <p>Distance</p>
                                       
                                    <div className='number-inputs'>
                                        <input type="number"
                                        className='distance-input'
                                        step='0.01'
                                        value={this.state.miles}
                                        onChange={this.update('miles')}
                                        />
                                        mi
                                    </div> 
                                </li>
                                <li className='metrics-li'>
                                    <p> Duration</p>
                                   
                                    <div className='number-inputs'><input type="number"
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
                                    <div className='number-inputs'>
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
                                <li className='metrics-li'>
                                    <p>Elevation</p>
                                    
                                    <div className='number-inputs'>
                                        <input type="number"
                                        value={this.state.elevation}
                                        onChange={this.update('elevation')}
                                        />
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
              
                <button type="submit">Create</button>
                <Link to='/workouts'>Cancel</Link>
            </form>
            </div>
            
        )
    }
}

export default WorkoutForm;