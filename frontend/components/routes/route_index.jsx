import React from 'react';
import {Link} from 'react-router-dom';
import RouteIndexItem from './route_index_item';

class RouteIndex extends React.Component{
    componentDidMount(){
        this.props.fetchRoutes();
    }

    render(){
        return(
            <div>
            <h1>My Routes</h1>
            <Link className='new_route_link' to='/routes/create'><button className='new_route_button'>Create New Route</button></Link>
            <ul>
                {this.props.routes.map(route=>(
                    <RouteIndexItem
                        route={route}
                        key={route.id}
                        updateRoute={this.props.updateRoute}
                    />
                )
        
            )}
            </ul>
        </div>
        )    
    }
}
   

export default RouteIndex;