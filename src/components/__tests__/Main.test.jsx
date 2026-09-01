import { initializeTimes, updateTimes } from '../Main';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn()
}));

global.fetchAPI = jest.fn();

describe('Main reducers and helper functions', () => {
  test('initializeTimes returns the expected initial times array', () => {
    const mockTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    global.fetchAPI = jest.fn().mockReturnValue(mockTimes);
    const result = initializeTimes();
    expect(global.fetchAPI).toHaveBeenCalled();
    expect(result.length).toBeGreaterThan(0);
    expect(result).toEqual(mockTimes);
  });

  test('updateTimes returns the same state when given an unknown action', () => {
    const initialState = ['17:00', '18:00', '19:00'];
    const unknownAction = { type: 'SOME_UNKNOWN_ACTION' };

    const result = updateTimes(initialState, unknownAction);
    expect(result).toEqual(initialState);
  });

  test('updateTimes updates times when a date is selected', () => {
    const initialState = ['17:00', '18:00', '19:00'];
    const newTimes = ['20:00', '21:00', '22:00'];
    global.fetchAPI = jest.fn().mockReturnValue(newTimes);
    const action = {
      type: 'UPDATE_TIMES',
      payload: '2026-09-15'
    };

    const result = updateTimes(initialState, action);
    expect(global.fetchAPI).toHaveBeenCalled();
    expect(result).toEqual(newTimes);
    expect(result.length).toBeGreaterThan(0);
  });
});