export default (state = '', action) => {
  switch (action.type) {
    case 'SET_ACTIVE_STORE':
      return action.payload;
    default:
      return state;
  }
};
