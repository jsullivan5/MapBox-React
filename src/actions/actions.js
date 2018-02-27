import constants from '../constants';

export const setActiveStore = store => ({
  type: constants.SET_ACTIVE_STORE,
  payload: store,
});

export const setMap = map => ({
  type: constants.SET_MAP,
  payload: map,
});
