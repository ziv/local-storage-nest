jest.mock('@xpr/local-storage');
import AsyncStorage from './async-storage';

describe('async-storage', () => {
  it('should create async storage', () => {
    expect(new AsyncStorage()).toBeInstanceOf(AsyncStorage);
  });

  it('should return request', () => {
    const asyncStorage = new AsyncStorage();
    expect(asyncStorage.request).toEqual({ id: 'req' });
  });

  it('should return response', () => {
    const asyncStorage = new AsyncStorage();
    expect(asyncStorage.response).toEqual({ id: 'res' });
  });

  it('should throws for not running in async context', () => {
    process.env.XPR_TEST_FAIL = '1';
    const asyncStorage = new AsyncStorage();
    expect(() => asyncStorage.request).toThrow();
  });

  it('should throws for not running in async context', () => {
    process.env.XPR_TEST_FAIL = '1';
    const asyncStorage = new AsyncStorage();
    expect(() => asyncStorage.response).toThrow();
  });
});
