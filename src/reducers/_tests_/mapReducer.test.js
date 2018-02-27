import reducer from '../mapReducer';
import constants from '../../constants';

describe('map reducer', () => {
  it('should retun initial state', () => {
    const expectedState = {};
    expect(reducer(undefined, {})).toEqual(expectedState);
  });
  it('should handle SET_MAP action', () => {
    const expectedState = { mock: 'map' };
    const mockAction = {
      type: constants.SET_MAP,
      payload: expectedState,
    };
    expect(reducer({}, mockAction)).toEqual(expectedState);
    expect(reducer({ other: 'map' }, mockAction)).toEqual(expectedState);
  });
});
