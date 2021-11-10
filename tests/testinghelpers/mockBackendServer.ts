import { setupServer } from 'msw/node';

const server = setupServer();

export * from 'msw';
export default server;

/*
  In cases where the headers and other properties coming in a response from the backend are also required for processing, use the above server.

  Usage example:
  --------------

  import server, { rest } from 'tests/testServer';
  ....
  ....
  beforeEach(() => {
  server.use(
    rest.get(
      `${process.env.BACKEND_URL}${URLSLUG}`,
      async (req, res, ctx) => {
        return res(ctx.json(mockResponse)); // The response will contain all normal headers and properties as in a standard Node.js Backend server response.
      }
    )
  );
});

*/
