import * as userController from '../controllers/userController.js';

export default async (app) => {
    app.get('/users', userController.getUsers);
};