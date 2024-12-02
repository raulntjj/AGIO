import getStaticData from '../controllers/static.controller';

export const staticRoutes = async (app) => {
  app.get('/static', getStaticData);
};