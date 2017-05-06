import {combineReducers} from 'redux';
import UserReducer, {ActiveUserReducer, NewUser, EditUser} from './reducer-users';

const reducers = combineReducers({
  users: UserReducer,
  activeUser: ActiveUserReducer,
  newUser: NewUser,
  editedUser: EditUser,
});

export default reducers;
