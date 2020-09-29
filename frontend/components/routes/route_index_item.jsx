import React from 'react';
import {Link} from 'react-router-dom';
import {formatDate} from '../../util/date_utils';

class RouteIndexItem extends React.Component{
    render(){
        const {image_url, distance, estimated_time, route_name, elevation, created_at, updated_at} = this.props.route;
        return(
            <li className='index-item'>
                <img className='index-image' src={image_url + window.key}/>
                <div>
                <Link to={`/routes/${this.props.route.id}`} className='index-item-link'> {route_name} </Link>
                <p>
                    <ul className='item-list'>
                        <li className='info-box'>
                            <p className='item-numbers'>{Math.round((distance/5280)*100)/100} mi</p> 
                            <p className='item-descriptor'>Distance</p> 
                        </li>

                        <li className='info-box'>
                            <li>
                                <p className='item-numbers'>{elevation} ft</p>
                                <p className='item-descriptor'>Elevation Gain</p> 
                            </li>
                        </li>
                    </ul>
                </p>
              
                <p className='item-descriptor'>Est.Moving Time</p> 
        <p className='index-item-time'>{Math.round(estimated_time/60)}:{('0'+estimated_time%60).slice(-2)}</p>
                </div>
                <section className='creation-time'>
                    Created at {formatDate(this.props.route.created_at)}
                </section>
                                  
            </li>
        )
    }
}

export default RouteIndexItem;