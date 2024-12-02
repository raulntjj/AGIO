import * as staticController from '../controllers/staticController.js';

export default async (app) => {
  app.get('/static', staticController.getStaticData);
};