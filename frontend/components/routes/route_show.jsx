import React from 'react';
import {Link} from 'react-router-dom';
import {formatDate} from '../../util/date_utils';

class RouteShow extends React.Component{

    componentDidMount(){

        this.props.fetchRoute(this.props.match.params.routeId);
    }

    render(){

       if (typeof this.props.route === 'undefined'){
           return null;
       }else{
        return(
        <div>
            <h1>{this.props.route.route_name}</h1>
            <Link to={`/routes/${this.props.route.id}/edit`}><button>Edit</button></Link>
            <button onClick={()=> this.props.deleteRoute(this.props.route.id)}>Delete</button>
            <div>
                <img src={this.props.route.image_url}/>
                <div>
                    <label>By {this.props.user.first_name} {this.props.user.last_name}
                    <p>Created on {formatDate(this.props.route.created_at)}</p>
                    </label>
                    <ol>
                        <li>{Math.round((this.props.route.distance/5280)*100)/100}mi</li>
                        <li>{this.props.route.elevation}ft</li>
                    </ol>
                    <ol>
                        <li>Distance</li>
                        <li>Elevation Gain</li>
                    </ol>

                <text>{this.props.route.description}</text>
                </div>
            </div>
        </div>
        )
       }
    }
}

export default RouteShow;