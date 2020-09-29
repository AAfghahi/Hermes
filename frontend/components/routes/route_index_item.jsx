import React from 'react';
import {Link} from 'react-router-dom';
import {formatDate} from '../../util/date_utils';

class RouteIndexItem extends React.Component{
    render(){
        const {image_url, distance, estimated_time, route_name, elevation, created_at, updated_at} = this.props.route;
        return(
            <li>
                <img src={image_url + 'AIzaSyBL2hA828NMLjUGVbZlOC3SFjBxGF1P0gs'}/>
                <div>
                <Link to={`/routes/${this.props.route.id}`}> {route_name} </Link>
                <p>{Math.round((distance/5280)*100)/100}mi {elevation}ft </p>
                <p>distance elevation</p>
                <p>Est.Moving Time {Math.round(estimated_time/60)}:{('0'+estimated_time%60).slice(-2)}</p>
                </div>
                <section>
                    Created at {formatDate(this.props.route.created_at)}
                </section>
                                  
            </li>
        )
    }
}

export default RouteIndexItem;