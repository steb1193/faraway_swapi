import MockAdapter from 'axios-mock-adapter';

declare module NodeJS {
  interface global {
    mockAxios: typeof MockAdapter;
  }
}
