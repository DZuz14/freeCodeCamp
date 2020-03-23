import { wrapHandledError } from '../utils/create-handled-error';

export default function bootStatus(app) {
  const api = app.loopback.Router();

  // DEBUG ROUTE
  api.get('/status/ping', (req, res) => {
    throw Error('debuging sentry');
  });
  api.get('/status/pang', (req, res) => {
    throw wrapHandledError(Error('debuging sentry, wrapped'), {
      type: 'info',
      message: 'debugmessage',
      redirectTo: `a/page`
    });
  });
  app.use(api);
}
