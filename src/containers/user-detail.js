import React, { Component } from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component {

  render(){
    return (
      <div>
        <h1>{this.props.user.firstName} {this.props.user.lastName}</h1>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.activeUser
  }
}

export default connect(mapStateToProps)(UserDetail);
