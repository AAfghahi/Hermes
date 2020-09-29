import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CreateRouteForm from '../routes/create_route_modal';

import {createRoute} from '../../actions/routes_actions';


class Modal extends React.Component{
  
  render(){
    const { closeModal, modal, routeData, routeInfo } = this.props;
    if (!modal) {
      return null;
    }

    let component;
    switch (modal) {
      case 'create':
        component = <CreateRouteForm route={routeData} route_name={routeInfo} closeModal={closeModal}/>;
        break;
      case 'update':
        component = <UpdateRouteContainer route={routeData} route_name={routeInfo} closeModal={closeModal}/>;
        break;
      default:
        return null;
    }
    return (
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
    );  
  }
}

const mapStateToProps = state => {
    return {
      modal: state.ui.modal,
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      closeModal: () => dispatch(closeModal())
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Modal);