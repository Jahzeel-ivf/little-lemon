import '@testing-library/jest-dom';

beforeAll(() => {
  if (typeof window !== 'undefined' && !window.fetchAPI) {
    window.fetchAPI = jest.fn((date) => {
      return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    });
  }

  if (typeof window !== 'undefined' && !window.submitAPI) {
    window.submitAPI = jest.fn((formData) => {
      return true;
    });
  }
});

afterEach(() => {
  jest.clearAllMocks();
});