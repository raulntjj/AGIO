import * as apiIntegrationService from '../services/apiIntegrationService.js';

export const getExternalApiData = async (request, response) => {
  try {
    const data = await apiIntegrationService.fetchExternalApiData();
    response.status(200).send({
      statusCode: 200,
      message: 'Dados recuperados com sucesso!',
      payload: data,
    });
  } catch (error) {
    const statusCode = error.response?.status || 500;
    response.status(statusCode).send({
      statusCode,
      message: error.message || 'Erro interno do servidor.',
    });
  }
};
