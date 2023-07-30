import mockRouter from 'next-router-mock';
import { createDynamicRouteParser } from 'next-router-mock/dynamic-routes';
import { axios } from './src/helpers/axios';
import MockAdapter from 'axios-mock-adapter';

beforeAll(() => {
  global.mockAxios = new MockAdapter(axios);
});

afterEach(() => global.mockAxios.reset());
jest.mock('next/navigation', () => require('next-router-mock'));

mockRouter.useParser(createDynamicRouteParser(['/[id]']));
