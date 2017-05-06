import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addUser, updateFirstName, updateLastName} from '../actions/index';

class UserAdd extends Component {

  render() {
    return (
      <div>
      <input type="text" value={this.props.user.firstName} onChange={(e) => this.props.updateFirstName(this.props.user, e.target.value)} />
      <input type="text" value={this.props.user.lastName} onChange={(e) => this.props.updateLastName(this.props.user, e.target.value)}  />
      <input type='button' onClick={() => this.props.addUser(this.props.user)} value="add" />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    user: state.newUser
  }
}

  function matchDispatchToProps(dispatch){
    return bindActionCreators(
      {
        addUser: addUser,
        updateFirstName: updateFirstName,
        updateLastName: updateLastName,
      }, dispatch)
  }

  export default connect(mapStateToProps, matchDispatchToProps)(UserAdd);
