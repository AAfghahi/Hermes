import React from 'react';



const myLatlng = { lat: 40.6602, lng: -73.9690 };

class RouteShow extends React.Component{
    constructor(props){
        super(props);
        this.points = [];
        this.state ={
            imageUrl: '',
            duration: 0,
            distance: 0,
            elevation: 500,
            polyline: '',
            origin:[]
        };
        this.createRoute = this.createRoute.bind(this);
        this.registerListeners = this.registerListeners.bind(this);
        this.addMarker = this.addMarker.bind(this);
        this.addLatLang = this.addLatLang.bind(this);
        this.listenforChange = this.listenForChange.bind(this);
        this.createStaticUrl = this.createStaticUrl.bind(this);
        this.findDistanceAndTime = this.findDistanceAndTime.bind(this);
      
    }

    componentDidMount(){
        this.map = new google.maps.Map(
            this.mapdiv,
            {zoom:14, center: myLatlng}
        );

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
        this.service = new google.maps.DistanceMatrixService();
        const map = this.map;
        this.directionsRenderer.setMap(map);
        this.registerListeners();
        this.listenForChange();
    
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
        }

        addLatLang(location){
          
            this.points.push({
                location:location
            }); 
            if(this.points.length === 1){
                this.setState({
                    origin: [this.points[0].location.lat(), this.points[0].location.lng()]
                });
            }
            const state = this.state; //just to check 
          
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
        
        createStaticUrl(directions){
            const route = directions.routes[0];
            let image = `https://maps.googleapis.com/maps/api/staticmap?size=200x200`;
            const color = `&path=color:red|weight:2|`
            const polyline = `enc:${route.overview_polyline}`;
            const key = `&key=${window.key}`;
            image += color + polyline + key;
            this.setState({
                imageUrl: image,
                polyline: polyline
            });
            debugger
        }

        findDistanceAndTime(directions){
            const route = directions.routes[0];
            const duration = Math.floor(route.legs[0].duration.value/60);
            const distance = route.legs[0].distance.value;
            this.setState({
                duration: duration,
                distance: distance
            });
        
        }

        listenForChange(){
            const _self = this;
            this.directionsRenderer.addListener('directions_changed', function(){
                const directions = _self.directionsRenderer.getDirections();
                if(directions !== null){
                    _self.createStaticUrl(directions);
                    _self.findDistanceAndTime(directions);
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


