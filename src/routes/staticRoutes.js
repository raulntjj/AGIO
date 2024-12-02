import staticController from '../controllers/staticController';

export default async (app) => {
  app.get('/static', staticController);
};