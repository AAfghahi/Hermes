import React from 'react';
import {formatDate} from '../../util/date_utils';
class EditWorkoutForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.workout;
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){

      this.props.fetchWorkout(this.props.workout.id);
    }

    update(field){
        return e =>{
            this.setState({[field]:e.currentTarget.value});
        };
        
    }

    handleSubmit(){
        this.props.action(this.state).then(()=> this.props.history.push('/workouts'));
    }
    render() {
      // DO NOT MODIFY THIS FUNCTION
      const { action, formType, workout} = this.props;
        const {workout_name, description, created_at} = this.state;
        
      if (!workout) return null;
      return (
        <div className='edit-container'>
            <form onSubmit={this.handleSubmit}>
                <div className='edit-top-container'>
                <h1 className='edit-title'>{formType}</h1>
                <button className='save-button' type="submit">Save</button>
                </div>
               <div className='form-container'>
                    <div className='form-div'>
                        <label className='title-label'>Title </label>
                            <input 
                                className='title-input'
                                type="text"
                                value={workout_name}
                                onChange={this.update('workout_name')}/>
                       
                        <label className='description-label'>Description</label> 
                            <textarea 
                                className='description-input'
                                value={description}
                                onChange={this.update('description')}/>
                               
                    </div>

                    <div className='info-div'>
                        <ul className='stats-ul'>
                            <li className='stats-identity'>
                                Date
                            </li>
                            <li className='stats-identity'>
                                Distance
                            </li>
                            <li className='stats-identity'>
                                Time
                            </li>
                            <li className='stats-identity'>
                                Elevation
                            </li>
                        </ul>

                        <ul className='stats-ul'>
                            <li className='stats-info'>
                                {formatDate(created_at)}
                            </li>
                            <li className='stats-info'>
                                {Math.round((this.props.workout.distance/5280)*100)/100} mi
                            </li>
                            <li className='stats-info'>
                            {Math.round(this.props.workout.duration/60)}hr {('0'+this.props.workout.duration%60).slice(-2)} m
                            </li>

                            <li className='stats-info'>
                            {this.props.workout.elevation} ft
                            </li>
                        </ul>
                    </div>
                </div>
            </form>
        </div>
       
      );
    }
  }

  export default EditWorkoutForm;