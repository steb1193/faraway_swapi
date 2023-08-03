import mockRes from '@/__mocks__/people.json';
import { getIdFromUrlString } from '@/helpers/getIdFromUrlString';

describe('getIdFromUrlString', () => {
  let mockId: number;

  beforeAll(() => {
    mockId = Math.floor(Math.random() * mockRes.results.length);
  });

  test('should return id', async () => {
    expect(getIdFromUrlString(mockRes.results[mockId].url)).toBe(
      `${mockId + 1}`,
    );
  });

  test('should return empty', async () => {
    expect(getIdFromUrlString('asdasd')).toBe('');
  });
});
