import reducer from '../activeStoreReducer';
import constants from '../../constants';

describe('active store reducer', () => {
  it('should retun initial state', () => {
    const expectedState = '';
    expect(reducer(undefined, {})).toEqual(expectedState);
  });
  it('should handle SET_ACTIVE_STORE action', () => {
    const expectedState = 'Fake Store';
    const mockAction = {
      type: constants.SET_ACTIVE_STORE,
      payload: expectedState,
    };
    expect(reducer('', mockAction)).toEqual(expectedState);
    expect(reducer('other store', mockAction)).toEqual(expectedState);
  });
});
