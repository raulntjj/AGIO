import * as apiIntegrationController from '../controllers/apiIntegrationController.js';

export default async (app) => {
    app.get('/integration', apiIntegrationController.getExternalApiData);
};