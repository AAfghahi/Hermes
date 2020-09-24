import React from 'react';
import MarkerManager from '../../util/marker_manager';


const myLatlng = { lat: 40.6602, lng: -73.9690 };

const getCoordsObj = latLng =>({
    lat: latLng.lat(),
    lng: latLng.lng()
});

class RouteShow extends React.Component{

    componentDidMount(){
        
        this.map = new google.maps.Map(
            this.mapdiv,
            {zoom:14, center: myLatlng}
        );
        const map = this.map;
        new google.maps.Marker({
            position: myLatlng,
            map, 
            title: 'Thanks Gaylynn'
        });
        this.MarkerManager = new MarkerManager(this.map);
        this.setState({});
        // add event listener here
    }
    handleClick(){

    }
  
    // registerListeners() {
    //     google.maps.event.addListener(this.map, 'idle', () => {
    //       const { north, south, east, west } = this.map.getBounds().toJSON();
    //       const bounds = {
    //         northEast: { lat:north, lng: east },
    //         southWest: { lat: south, lng: west } };
    //       this.props.updateFilter('bounds', bounds);
    //     });
    //     google.maps.event.addListener(this.map, 'click', (event) => {
    //       const coords = getCoordsObj(event.latLng);
    //       this.handleClick(coords);
    //     });
    //   }

    render(){
     
        return(
            <div className='route_show_container'>
                <div className='sidebar'>
                    <h1>this will be the sidebar</h1>
                </div>
                <div className='map' ref={(el)=> this.mapdiv = el }>
                
                </div>
            </div>
            
        )
    }
}

export default RouteShow;