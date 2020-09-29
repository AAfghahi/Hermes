import React from 'react';

class CreateRoute extends React.Component{
    constructor(props){
        super(props);
        this.points = [];
        this.state = this.props.route;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createPath = this.createPath.bind(this);
        this.registerListeners = this.registerListeners.bind(this);
        this.addMarker = this.addMarker.bind(this);
        this.addLatLang = this.addLatLang.bind(this);
        this.listenforChange = this.listenForChange.bind(this);
        this.createStaticUrl = this.createStaticUrl.bind(this);
        this.findDistanceAndTime = this.findDistanceAndTime.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
       
  
    }

    componentDidMount(){
        let myLatlng = {};
        let decodedPath = [];
        if(this.state.encoded_polyline !== ''){
            decodedPath = google.maps.geometry.encoding.decodePath(this.state.encoded_polyline);
        }
        
        if(this.state.encoded_polyline !== '') {  
            this.points.push({location:decodedPath[0]});
            this.points.push({location:decodedPath[Math.floor(decodedPath.length/3)]});
            this.points.push({location:decodedPath[Math.floor(decodedPath.length * 0.66)]});
            this.points.push({location:decodedPath[decodedPath.length -1]});    
        }
        if(this.state.origin_lat === 0){
            myLatlng = { lat: 40.6602, lng: -73.9690 };
        }else{
            myLatlng = {lat: this.points[0].location.lat(), lng:this.points[0].location.lng()};
        }

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
        if(typeof this.points[0] !== 'undefined') this.createPath();
        this.directionsRenderer.setMap(map);
        this.registerListeners();
        this.listenForChange();
    }
  
  
    registerListeners() {
        google.maps.event.addListener(this.map, 'click', (event)=>{
            this.addLatLang(event.latLng);
            this.addMarker();
            this.createPath();
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
                    origin_lat: this.points[0].location.lat(),
                    origin_lng: this.points[0].location.lng()
                });
            }else{
                this.setState({
                    destination_lat: this.points[this.points.length -1].location.lat(),
                    destination_lng: this.points[this.points.length -1].location.lng()
                })
            }  
            
        }

        createPath(){
            const _self = this;
            const waypnt = this.points.slice(1);
          
            const request ={
                origin: this.points[0].location,
                destination: this.points[this.points.length -1].location,
                waypoints: waypnt.map(point => ({location: point.location})),
                travelMode: 'BICYCLING'
            };
            debugger
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
            const enc_polyline = `enc:${route.overview_polyline}`;
            const polyline = route.overview_polyline;
            const key = `&key=${window.key}`;
            image += color + enc_polyline + key;
            this.setState({
                image_url: image,
                encoded_polyline: polyline
            }); 
              
        }

        findDistanceAndTime(directions){
            const route = directions.routes[0];
            let duration = this.state.estimated_time + Math.floor(route.legs[0].duration.value/60);
            let distance = this.state.distance + route.legs[0].distance.value;
            this.setState({
                estimated_time: duration,
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

        update(field){
            return e => this.setState({
                [field]: e.target.value
            });
        }
       
        handleSubmit(e){
            e.preventDefault();
            this.props.action(this.state).then(() => this.props.history.push('/routes'));
            
        }

        handleButtonClick(){
            this.setState({
                show: !this.state.show
            });
        }
        
    render(){
        
        return(
            <div className='route_show_container'>
                <div className='fake_modal_container'>
                    <button className='fake_modal' onClick={this.handleButtonClick}>Save</button>
                        {this.state.show && (
                        <div className='Dropdown'>
                                    <h3>My Route</h3>
                                    <form onSubmit={this.handleSubmit}>
                                        <label> <div className="modal-text">Route name:</div>
                                            
                                            <input type="text" value={this.state.route_name} placeholder="Route name" onChange={this.update('route_name')}/>
                                        </label>
                                        <label> <div className="modal-text">Description:</div>
                                            <textarea value={this.state.description} placeholder="Add a description of your route!" onChange={this.update('description')}></textarea>
                                        </label>
                                        <div className="modal-buttons">
                                        <button onClick={this.handleButtonClick}>Edit Route</button>  
                                        <button type="submit" >Save to My Routes</button> 
                                        </div>
                                    </form>
                        </div>
                        )}
                   

                </div>
                <div className='sidebar'>
                    <h1>this will be the sidebar</h1>
                </div>
        
                
                <div className='map' ref={(el)=> this.mapdiv = el }>
                
                
                </div>
                
            </div>
            
        )
    }
}




export default CreateRoute;


