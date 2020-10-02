import React from 'react';
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
        <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                <h1>{formType}</h1>
                <button type="submit">Save</button>
                </div>
               
                <label>Title
                    <input 
                        type="text"
                        value={workout_name}
                        onChange={this.update('workout_name')}/>
                </label>
                <label>Description
                    <textarea
                        value={description}
                        onChange={this.update('description')}/>
                </label>
            </form>

        <div>
            <ul>
                <li>
                    Date
                </li>
                <li>
                    Distance
                </li>
                <li>
                    Time
                </li>
                <li>
                    Elevation
                </li>
            </ul>

            <ul>
                <li>
                    {created_at}
                </li>
                <li>
                    {Math.round((this.props.workout.distance/5280)*100)/100} mi
                </li>
                <li>
                {Math.round(this.props.workout.estimated_time/60)}hr {('0'+this.props.workout.estimated_time%60).slice(-2)} m
                </li>

                <li>
                {this.props.workout.elevation} ft
                </li>
            </ul>
        </div>
        </div>
       
      );
    }
  }

  export default EditWorkoutForm;