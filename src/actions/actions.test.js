import * as actions from './actions';
import constants from '../constants';

describe('actions', () => {
  it('should create an action to set an active store', () => {
    const mockStore = 'mock store';
    const expectedAction = {
      type: constants.SET_ACTIVE_STORE,
      payload: mockStore,
    };
    expect(actions.setActiveStore(mockStore)).toEqual(expectedAction);
  });
  it('should create an action to set a map', () => {
    const mockMap = { mock: 'map' };
    const expectedAction = {
      type: constants.SET_MAP,
      payload: mockMap,
    };
    expect(actions.setMap(mockMap)).toEqual(expectedAction);
  });
});
