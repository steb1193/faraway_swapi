import { AxiosAdapter, AxiosRequestConfig } from 'axios';

type CallbackResponseSpecFunc = (
  config: AxiosRequestConfig,
) => unknown[] | Promise<unknown[]>;

type ResponseSpecFunc = <T = unknown>(
  statusOrCallback: number | CallbackResponseSpecFunc,
  data?: T,
  headers?: unknown,
) => MockAdapter;

declare namespace MockAdapter {
  export interface RequestHandler {
    reply: ResponseSpecFunc;
    replyOnce: ResponseSpecFunc;
    passThrough(): MockAdapter;
    abortRequest(): MockAdapter;
    abortRequestOnce(): MockAdapter;
    networkError(): MockAdapter;
    networkErrorOnce(): MockAdapter;
    timeout(): MockAdapter;
    timeoutOnce(): MockAdapter;
  }
}

interface AsymmetricMatcher {
  asymmetricMatch: VoidFunction;
}

interface RequestDataMatcher {
  [index: string]: unknown;
  params?: {
    [index: string]: unknown;
  };
}

interface HeadersMatcher {
  [header: string]: string;
}

type AsymmetricHeadersMatcher = AsymmetricMatcher | HeadersMatcher;

type AsymmetricRequestDataMatcher = AsymmetricMatcher | RequestDataMatcher;

type RequestMatcherFunc = (
  matcher?: string | RegExp,
  body?: string | AsymmetricRequestDataMatcher,
  headers?: AsymmetricHeadersMatcher,
) => MockAdapter.RequestHandler;

declare interface MockAdapter {
  adapter(): AxiosAdapter;
  reset(): void;
  resetHandlers(): void;
  resetHistory(): void;
  restore(): void;

  history: { [method: string]: AxiosRequestConfig[] };

  onGet: RequestMatcherFunc;
  onPost: RequestMatcherFunc;
  onPut: RequestMatcherFunc;
  onHead: RequestMatcherFunc;
  onDelete: RequestMatcherFunc;
  onPatch: RequestMatcherFunc;
  onList: RequestMatcherFunc;
  onOptions: RequestMatcherFunc;
  onunknown: RequestMatcherFunc;
  onLink: RequestMatcherFunc;
  onUnlink: RequestMatcherFunc;
}

declare global {
  let mockAxios: MockAdapter;
}
