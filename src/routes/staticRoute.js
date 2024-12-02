import staticController from '../controllers/staticController';

export const staticRoutes = async (app) => {
  app.get('/static', staticController);
};