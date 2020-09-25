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
        this.snappedCoordinates = [];
    }

    componentDidMount(){
       
        this.poly = new google.maps.Polyline({
            strokeColor: '#FFFFFF',
            strokeOpacity: 1.0,
            strokeWeight: 3,
            zIndex:1,
            path:this.snappedCoordinates
        });

        this.border = new google.maps.Polyline({
            strokeColor:'#FF4500',
            strokeOpacity: 0.5,
            strokeWeight: 7,
            path:this.snappedCoordinates
        });


        this.map = new google.maps.Map(
            this.mapdiv,
            {zoom:14, center: myLatlng}
        );

        const map = this.map;
        
        this.registerListeners();
        this.setState({});
        this.border.setMap(map);
        this.poly.setMap(map);
    
    }
    handleClick(coords){

    }
  
    registerListeners() {
        
       
        google.maps.event.addListener(this.map, 'click', (event)=>{
            this.addMarker(event.latLng, this.map);
            this.addLatLang(event);
        });



      }

    addMarker(location= google.maps.LatLngLiteral, map=google.maps.Map){
        const point = {
            url:window.circleURL,
            scaledSize: new google.maps.Size(10,10)
            
        };

        new google.maps.Marker({
            position: location,
            label: '',
            map: map,
            icon:{
                path:google.maps.SymbolPath.CIRCLE,
                scale:4,
                strokeWeight: 3,
                fillColor:'white',
                strokeColor:'#D3D3D3'
            },
            draggable:true
        });
        }

        addLatLang(event){

            const borderPath = this.border.getPath();
            const path = this.poly.getPath();
            borderPath.push(event.latLng);
            path.push(event.latLng);
            
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


