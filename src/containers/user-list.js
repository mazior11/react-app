import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser, removeUser, editUser, updateUser, userClicked} from '../actions/index';


class UserList extends Component {

  defaultUser = {firstName: '', lastName: '', id: '-1'};

  constructor(props){
    super(props);
    this.state = {
      editUser: Object.assign({}, this.defaultUser)
    }
  }

  _setUserName = function(e, prop){
    let newEditUser = Object.assign(this.state.editUser, {[prop]: e.target.value});
    this.setState({editUser: newEditUser});
  }

  _setEditUser = function(id) {
    let index = this.props.users.findIndex(x => x.id == id);
    let user = this.props.users[index];
    this.setState({editUser: user})
  }

  _resetUser = function(){
    this.setState({editUser: this.defaultUser})
  }

  createListItmHtml(user) {
    console.log(this.props.editedUser.id);
        if(this.props.editedUser.id === user.id)
        {
            return(
              <div>
                {user.id}.
                <input type="text" defaultValue={this.props.editedUser.firstName} onChange={(e) => {this._setUserName(e, 'firstName').bind(this) }} />
                <input type="text" defaultValue={this.props.editedUser.lastName}  onChange={(e) => {this._setUserName(e, 'lastName').bind(this) }} />
                <input type='button' onClick={(e) => { this.props.userClicked(e, Object.assign({ },this.state.editUser)); this._resetUser().bind(this); }} value="update" />
              </div>
            );
        }
        return(
          <div>
            <div>
              {user.id}. {user.firstName} {user.lastName}
            </div>
            <div>
              <button onClick={(e) => {this._setEditUser(user.id); this.props.editUser(e, user.id); }}>edit</button>
              <button onClick={(e) => this.props.removeUser(e, user.id)}>remove</button>
            </div>
          </div>
        )
  }

  createListItem() {
    return this.props.users.map((user) => {
      return (
        <li
        onClick={(e) => this.props.selectUser(e, user, (this.state.editUser.id > 0))}
        key={user.id}>
          {this.createListItmHtml(user)}
        </li>
      );
    });
  }

  render() {
    return (
      <ul
        style={{"width": "400px","margin" : "0 auto"}}>
        {this.createListItem()}
      </ul>
    );
  }
}

function mapStateToProps(state){
  return {
    users: state.users,
    editedUser: state.editedUser
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators(
    {
      selectUser: selectUser,
      removeUser: removeUser,
      editUser: editUser,
      updateUser: updateUser,
      userClicked: userClicked
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);
