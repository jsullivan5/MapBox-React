import reducer from '../mapReducer';
import constants from '../../constants';

describe('store reducer', () => {
  it('should retun initial state', () => {
    const expectedState = {};
    expect(reducer(undefined, {})).toEqual(expectedState);
  });
  it('should return stores when fired', () => {
    const expectedState = { mock: 'store' };
    const mockAction = {
      type: constants.SET_MAP,
      payload: expectedState,
    };
    expect(reducer({}, mockAction)).toEqual(expectedState);
    expect(reducer(expectedState, mockAction)).toEqual(expectedState);
  });
});
