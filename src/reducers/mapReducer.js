import constants from '../constants';

export default (state = {}, action) => {
  switch (action.type) {
    case constants.SET_MAP:
      return action.payload;
    default:
      return state;
  }
};
