export default function handler(lambda) {
  return function (evt, ctx) {
    return Promise.resolve()
      .then(() => lambda(evt, ctx))
      .then(responseBody => [200, responseBody])
      .catch(e => {
        return [500, { error: e.message }];
      })
      .then(([statusCode, body]) => ({
        statusCode,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify(body),
      }));
  };
};