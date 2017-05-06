export const selectUser = (e, user, isEditMode) => {
  e.stopPropagation();
  if(isEditMode)
    return {
      type: "NO_USER_SELECTED",
      payload: null
    }
  return {
    type: "USER_SELECTED",
    payload: user
  }
}

export const addUser = (newUser) => {
  return {
    type: "NEW_USER",
    payload: newUser
  }
}

export const removeUser = (e, userId) => {
  e.stopPropagation();
  return {
    type: "REMOVE_USER",
    payload: userId,
  }
}

export const editUser = (e, userId) => {
  return {
    type: "EDIT_USER",
    payload: userId,
  }
}

export const updateUser = (e, user) => {
  e.stopPropagation();
  return {
    type: "UPDATE_USER",
    payload: user,
  }
}

export const updateFirstName = (newUser, firstName) => {
  if(!firstName)
    return;
  newUser.firstName = firstName;
  return {
    type: "NEW_USER_SAVE",
    payload: newUser
  }
}

export const updateLastName = (newUser, lastName) => {
  if(!lastName)
    return;
  newUser.lastName = lastName;
  return {
    type: "NEW_USER_SAVE",
    payload: newUser
  }
}

export const userClicked = (e, user) => {
  e.stopPropagation();
  return (dispatch) => {
    dispatch(updateUser(e, user));
    dispatch(selectUser(e, user, false));
  }
}
