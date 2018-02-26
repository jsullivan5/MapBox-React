import constants from '../constants';

export default (state = '', action) => {
  switch (action.type) {
    case constants.SET_ACTIVE_STORE:
      return action.payload;
    default:
      return state;
  }
};
