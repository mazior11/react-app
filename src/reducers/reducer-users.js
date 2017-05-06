var users = [
  {
    id: 1,
    firstName: "Jan",
    lastName: "Kowalski"
  },
  {
    id: 2,
    firstName: "Piotr",
    lastName: "Nowak",
  }
];

users.CurrId = 2;

users.GetId = function(){
  return ++users.CurrId;
}

export default function(state=users, action)  {
  switch (action.type) {
    case "NEW_USER":
        return [
          ...state,
          {
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
            id: users.GetId()
          }
        ]
        break;
      case "REMOVE_USER":
        let index = state.findIndex(x => x.id == action.payload);
        state.splice(index, 1);
        return [...state];
      case "UPDATE_USER":
        let i = state.findIndex(x => x.id == action.payload.id);
        let oldUser = users[i];
        oldUser.firstName = action.payload.firstName;
        oldUser.lastName = action.payload.lastName;
        return [...state];
  }
  return state
};

export function ActiveUserReducer(state={}, action) {
  switch (action.type) {
    case "USER_SELECTED":
        return Object.assign({}, action.payload);
      break;
  }
  return state
}

export function NewUser(state={firstName:'', lastName:''}, action) {
  switch (action.type) {
    case "NEW_USER":
        return {firstName:'', lastName:''};
        break;
    case "NEW_USER_SAVE":
      return Object.assign({}, state);
      break;
  }
  return state
}

export function EditUser(state={id: -1}, action){
  switch(action.type){
    case "EDIT_USER":
      let i = users.findIndex(x => x.id == action.payload);
      let user = users[i];
      if(user)
        return user;
    case "UPDATE_USER":
      return {id: -1};
  }
  return state;
}
