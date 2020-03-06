const updateUser = (state = { name: '', email: '' }, action) => {
  switch (action.type) {
    case 'update':
      state.name = action.payload.display_name;
      state.email = action.payload.email;
      return state;
    default:
      return state;
  }
};

export default updateUser;
