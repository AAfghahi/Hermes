import React from 'react';
import {Link} from 'react-router-dom';
import RouteIndexItem from './route_index_item';

class RouteIndex extends React.Component{
    componentDidMount(){
        this.props.fetchRoutes();
    }

    render(){
        return(
            <div className='my-routes'>
                <div className='index-list-title' > 
                    <h1 className='index-title'>My Routes</h1>
                    <Link className='new_route_link' to='/routes/create'><button className='new_route_button'>Create New Route</button></Link>
                </div>
           
            <ul className='index-list'>
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