import userController from '../controllers/userController';

export const staticRoutes = async (app) => {
    app.get('/static', staticController);
};