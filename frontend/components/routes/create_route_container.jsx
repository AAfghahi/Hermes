import { connect } from 'react-redux';
import { openModal, closeModal, closeAndSaveModal } from '../../actions/modal_actions'
import { createRoute } from '../../actions/routes_actions';
import RouteForm from './route_form';
import {withRouter} from 'react-router-dom';



const mapStateToProps = state =>({
  route:{
      route_name:'',
      description:'',
      activity_type:'BICYCLING',
      image_url:'',
      estimated_time: 0,
      distance: 0,
      elevation: 500,
      encoded_polyline: '',
      origin_lat:0,
      origin_lng: 0,
      destination_lat:0,
      destination_lng: 0,
      show:false
  },
});

const mapDispatchToProps = dispatch =>({
  action: route => dispatch(createRoute(route))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RouteForm));

