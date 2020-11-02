# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Route.delete_all
Workout.delete_all

test = User.create!(
    email: 'email@email.com',
    password: 'hunter12',
    first_name: 'Test',
    last_name: 'Person',
    id: 1,
    gender: 'f',
    age: 32,
    weight: 155,
    height: 177,
    birthday: '1988-02-26',
    location_lat: 71.79964,
    location_long: -58.23725
)

test_user_1 = User.create!(
    email: 'email@gmail.com',
    password: 'password',
    first_name: 'Hubert',
    last_name: 'Testly',
    id: 2,
    gender: 'm',
    age:25,
    weight:120,
    height: 150,
    birthday: '1995-05-04',
    location_lat:33.5112809,
    location_long:-117.7298717

)

test_route  = Route.create!(
    id:1,
    origin_lat:40.66706791877082,
    origin_lng:-73.95885210401839,
    destination_lat:40.66706791877082,
    destination_lng:-73.95885210401839,
    route_name: 'short run',
    activity_type:'WALKING',
    description:'went for a short run',
    distance: 1371,
    user_id:1,
    elevation:500,
    estimated_time:360,
    encoded_polyline:'_xewF|`lbMUhB`AVxA^TFBYRwA\qC@Wr@_GAUHaDl@_Zf@uTqDO_@hPQvJOnGIzDMbGAj@nD~@lBd@l@PzA^b@?pCM~Hg@lQ{@vHa@rCQVxJRtI~AYlAOEQCYIkD]_NsCNqId@}G\wQ~@mEVaCLMCsBg@qHmB_J}B?Vs@xFq@fFE`@nD~@Hu@',
    image_url:'https://maps.googleapis.com/maps/api/staticmap?size=200x200&path=color:red|weight:2|enc:_xewF|`lbMUhB`AVxA^TFBYRwA\qC@Wr@_GAUHaDl@_Zf@uTqDO_@hPQvJOnGIzDMbGAj@nD~@lBd@l@PzA^b@?pCM~Hg@lQ{@vHa@rCQVxJRtI~AYlAOEQCYIkD]_NsCNqId@}G\wQ~@mEVaCLMCsBg@qHmB_J}B?Vs@xFq@fFE`@nD~@Hu@&key=',
)

test_route2 = Route.create!(
    id:2,
    origin_lat:40.66706791877082,
    origin_lng:-73.95193464447037,
    destination_lat:40.697204686018445,
    destination_lng:-73.95193464447037,
    route_name:'grocery run',
    activity_type:'BICYCLING',
    description:'went to Mr.Melons!',
    distance:1856,
    user_id:1,
    elevation:327,
    estimated_time: 500,
    encoded_polyline: 'eukwFvvjbM_@eHUgD}Ej@kC\kAPMoBaAuPs@{LI{Be@}HqAqJ}@{GcAqGe@kCaD`AeCbAk@cF',
    image_url: 'https://maps.googleapis.com/maps/api/staticmap?size=200x200&path=color:red|weight:2|enc:eukwFvvjbM_@eHUgD}Ej@kC\kAPMoBaAuPs@{LI{Be@}HqAqJ}@{GcAqGe@kCaD`AeCbAk@cF&key='
)

test_workout1 = Workout.create!(
    id:1,
    route_id: 1, 
    user_id: 1, 
    workout_name:'training',
    duration: 67,
    elevation:475,
    activity_type:"Ride",
    description:'Went on a morning bike ride',
    distance:5321
)

test_workout2 = Workout.create!(
    id:2,
    route_id: 2, 
    user_id: 1, 
    workout_name:'marathon run',
    duration: 92, 
    elevation:-150, 
    activity_type:'Run',
    description: 'day one of marathon training',
    distance: 2400
)