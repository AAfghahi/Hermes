import React from 'react';
import {Link} from 'react-router-dom';
import {formatDate} from '../../util/date_utils';

class RouteShow extends React.Component{
  

    componentDidMount(){

        this.props.fetchRoute(this.props.match.params.id);
    }
   
    render(){
     
       if (typeof this.props.route === 'undefined'){
           return null;
       }else{
        return(
        <div>
            <h1 className='route-title'>{this.props.route.route_name}</h1>
            <Link to={`/routes/${this.props.route.id}/edit`}><button className='navbutton'>Edit</button></Link>
            <Link to='/routes'><button className='navbutton' onClick={()=> this.props.deleteRoute(this.props.route.id)}>Delete</button></Link>
            <div className='show-container'>
                <img className='map-pic' src={this.props.route.image_url + window.key}/>
                <div className='words-container'>
                    <div className='top-container'>
                        <p className='user-title'>By {this.props.user.first_name} {this.props.user.last_name}</p>
                        <p className='creation-time'>Created on {formatDate(this.props.route.created_at)}</p>
                    </div>
                    
                    <ul className='item-list-container'>
                        <li className='info-items'>
                            <p className='item-numbers'>{Math.round((this.props.route.distance/5280)*100)/100} mi</p>
                            <p className='item-descriptor'>Distance</p>
                        </li>
                        <li className='info-items'>
                            <p className='item-numbers'>{this.props.route.elevation} ft</p>
                            <p className='item-descriptor'> Elevation Gain</p>
                        </li>
                    </ul>

                    <p className='index-item-time-show'>{Math.round(this.props.route.estimated_time/60)}:{('0'+this.props.route.estimated_time%60).slice(-2)}</p>
                    <p className='item-descriptor-bottom'>Est.Moving Time</p> 

                    <textarea readOnly className='item-description'>{this.props.route.description}</textarea>
                </div>
            </div>
        </div>
        )
       }
    }
}

export default RouteShow;