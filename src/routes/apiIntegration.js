import userController from '../controllers/apiIntegrationController';

export default async (app) => {
    app.get('/static', staticController);
};