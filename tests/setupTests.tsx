/* eslint-disable @next/next/no-img-element */
import '@testing-library/jest-dom/extend-expect';
import server from './testinghelpers/mockBackendServer';

jest.setTimeout(12000);

jest.mock(
  'next/image',
  () =>
    function mockNextImage({ src, alt }) {
      return <img src={src} alt={alt} />;
    }
);

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '',
      pathname: '',
      query: {},
      asPath: '',
      push: jest.fn()
    };
  },
  push: jest.fn(),
  query: {}
}));

// MSW Server for actual API Call mocking instead of global.fetch method.
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
