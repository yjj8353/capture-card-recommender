import { HttpLoggingMiddleware } from './http-logging.middleware';

describe('HttpLoggingMiddleware', () => {
  it('should be defined', () => {
    expect(new HttpLoggingMiddleware()).toBeDefined();
  });
});
