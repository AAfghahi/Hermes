![alt text](https://github.com/AAfghahi/Hermes/blob/master/app/assets/images/logo.png)

Hermes is a clone of the Strava app. As such it is best utilized to track your physical exercise and allows you to make customized routes using Google maps. 

## Technologies
Technologies stack:
+ Ruby on Rails
+ PostgreSQL Database
+ JavaScript
+ React/Redux
+ Google Maps Javascript API
+ Google Maps Directions Service


## Features

### Routes
Using the Google Maps API, Hermes allows you to:
+ Create a custom route, with google map directions. 
+ Edit an existing route
+ Custom markers for every stop
+ A dynamic caluclator that shows distance and estimated time for every marker added. 

![alt text](https://github.com/AAfghahi/Hermes/blob/master/app/assets/images/hermes2.gif)

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
        
 + Everytime that a route is created, a static url is also automatically created.
 
 
 ![alt text](https://github.com/AAfghahi/Hermes/blob/master/app/assets/images/map-image.png)
 
 
 The code for this was:
 ```
 createStaticUrl(directions){
            const route = directions.routes[0];
            let image = `https://maps.googleapis.com/maps/api/staticmap?size=200x200`;
            const color = `&path=color:red|weight:2|`
            const enc_polyline = `enc:${route.overview_polyline}`;
            const polyline = route.overview_polyline;
            image += color + enc_polyline + '&key=';
            this.setState({
                image_url: image,
                encoded_polyline: polyline
            }); 
              
        }
 ```
 + This uses the encoded polyline that is provided through the Google Maps API. This encoded polyline is also used in the update feature, which maps a previous route and lets you change it. 
 ###Workouts
 + You can add a workout manually
 + After a workout is added you can easily edit it. 
 
 ![alt text](https://github.com/AAfghahi/Hermes/blob/master/app/assets/images/hermes4.gif)
 
 
 
 ## Future Additions
 + I will be adding a user's dashboard soon as well as user profile pictures. 
 + Users will be able to friend each other and see their friends' workouts on their page. 
 + Users can comment on each other's workouts. 
