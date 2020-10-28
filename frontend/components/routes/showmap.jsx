import React from 'react';

class ShowMap extends React.Component{
    constructor(props){
        super(props);
        this.points = [];
        this.center = {};
        this.decodedPath = this.decodedPath.bind(this);
    }

    componentDidMount(){
        this.decodedPath();
        this.map = new google.maps.Map(
            this.mapdiv,
            {zoom:14, center: this.center}
        );
        const border = {
            strokeColor:'#FF4500',
            strokeOpacity: 0.5,
            strokeWeight: 7,
        };
        this.directionsService = new google.maps.DirectionsService();
        this.directionsRenderer = new google.maps.DirectionsRenderer({
            draggable: false,
            map: this.map,
            preserveViewport:true,
            suppressMarkers:true,
            polylineOptions: border
        });
        this.service = new google.maps.DistanceMatrixService();
        const map = this.map;
        this.createPath();
        this.directionsRenderer.setMap(map);

    }

    decodedPath(){
        let decodedPath = google.maps.geometry.encoding.decodePath(this.props.route.encoded_polyline)
        this.points.push({location:decodedPath[0]});
        this.points.push({location:decodedPath[Math.floor(decodedPath.length/3)]});
        this.points.push({location:decodedPath[Math.floor(decodedPath.length * 0.66)]});
        this.points.push({location:decodedPath[decodedPath.length -1]}); 
        this.center = {lat: this.points[0].location.lat(), lng:this.points[0].location.lng()};  

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
        
        this.directionsService.route(request, function(result,status){
            if(status === 'OK'){
                _self.directionsRenderer.setDirections(result);
            }
        });
    }

    render(){
        return(
            <div className='showmap' ref={(el)=> this.mapdiv = el }>
                            
                        
            </div>
        )
    }
}

export default ShowMap;