import { getCharacters } from '@/api/getCharacters';
import mockRes from '@/__mocks__/people.json';

describe('getCharacters', () => {
  test('should be called without params', async () => {
    mockAxios.onGet('people').reply(200, mockRes);
    const res = await getCharacters();
    expect(res?.data).toEqual(mockRes);
  });

  test('should be called with params', async () => {
    mockAxios.onGet('people').reply(200, mockRes);
    await getCharacters({ search: 'asd', page: '1' });
    expect(mockAxios.history.get[0].params).toEqual({
      search: 'asd',
      page: '1',
    });
  });
});
