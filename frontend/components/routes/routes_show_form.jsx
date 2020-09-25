import React from 'react';
import MarkerManager from '../../util/marker_manager';



const myLatlng = { lat: 40.6602, lng: -73.9690 };

const getCoordsObj = latLng =>({
    lat: latLng.lat(),
    lng: latLng.lng()
});



class RouteShow extends React.Component{
    constructor(props){
        super(props);
        this.points = [];
        

        
       
        this.createRoute.bind(this);
        this.registerListeners.bind(this);
        this.addMarker.bind(this);
        this.addLatLang.bind(this);
    }

    componentDidMount(){
        this.map = new google.maps.Map(
            this.mapdiv,
            {zoom:14, center: myLatlng}
        );
        
        this.poly = new google.maps.Polygon({
            strokeColor: '#FFFFFF',
            strokeOpacity: 1.0,
            strokeWeight: 3,
            zIndex:1,
            
        });
        const border = {
            strokeColor:'#FF4500',
            strokeOpacity: 0.5,
            strokeWeight: 7,
        
        };

        this.directionsService = new google.maps.DirectionsService();
        this.directionsRenderer = new google.maps.DirectionsRenderer({
            draggable: true,
            map: this.map,
            preserveViewport:true,
            suppressMarkers:true, 
            polylineOptions: border
        });
        const map = this.map;
        this.directionsRenderer.setMap(map);
        this.registerListeners();
        
  
    
    }
    handleClick(coords){

    }
  
    registerListeners() {
        
       
        google.maps.event.addListener(this.map, 'click', (event)=>{
            this.addLatLang(event.latLng);
            this.addMarker();
            this.createRoute();
        });



      }

    addMarker(){
        const map  = this.map;
        const marker = this.points[this.points.length -1];
        const position = {
            lat: marker.location.lat(),
            lng: marker.location.lng()
        };
        new google.maps.Marker({
            position: position,
            map: map,
            icon:{
                path:google.maps.SymbolPath.CIRCLE,
                scale:4,
                strokeWeight: 3,
                fillColor:'white',
                strokeColor:'#D3D3D3'
            },
        });
        this.createRoute();
        }

        addLatLang(location){

            this.points.push({
                location:location
            });
            
        }
        createRoute(){
            const _self = this;
            const waypnt = this.points.slice(1);
            const request ={
                origin: this.points[0].location,
                destination: this.points[this.points.length -1],
                waypoints: waypnt.map(point => ({location: point.location})),
                travelMode: 'BICYCLING'
            };

            this.directionsService.route(request, function(result,status){
                if(status === 'OK'){
                    _self.directionsRenderer.setDirections(result);
                }
            });
        }
     

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


