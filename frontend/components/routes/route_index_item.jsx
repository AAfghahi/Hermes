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
                <div>
                    <ul className='item-list'>
                        <li className='info-box'>
                            <h1 className='item-numbers'>{Math.round((distance/5280)*100)/100} mi</h1> 
                            <h1 className='item-descriptor'>Distance</h1> 
                        </li>

                        <li className='info-box'>
                            <div>
                                <h1 className='item-numbers'>{elevation} ft</h1>
                                <h1 className='item-descriptor'>Elevation Gain</h1> 
                            </div>
                        </li>
                    </ul>
                </div>
              
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