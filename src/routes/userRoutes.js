import userController from '../controllers/userController';

export default async (app) => {
    app.get('/static', staticController);
};