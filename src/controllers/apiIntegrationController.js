import * as apiIntegrationService from '../services/apiIntegrationService.js';

export const getExternalApiData = async (request, response) => {
  try {
    const data = await apiIntegrationService.fetchExternalApiData();
    response.status(200).json({
		statusCode: 200,
		message : 'Dados estáticos mockados recuperados com sucesso!',
	 	 payload : data
    });
	} catch (error) {
		const statusCode = error.statusCode || 500;
		return response.status(statusCode).send({
			statusCode: statusCode,
			message: error.message || 'Erro interno do servidor.',
		});
	}
};
