import { getSingleCharacter } from '@/api/getSingleCharacter';
import mockRes from '@/__mocks__/people.json';

describe('getSingleCharacter', () => {
  let mockId;

  beforeAll(() => {
    mockId = Math.floor(Math.random() * mockRes.results.length);
  });

  test('should be called successfully', async () => {
    global['mockAxios'].onGet(/people\/*/).reply(200, mockRes.results[mockId]);
    const res = await getSingleCharacter({ id: 1 });
    expect(res?.data).toEqual(mockRes.results[mockId]);
  });
});
