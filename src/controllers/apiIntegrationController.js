import fetchExternalApiData from '../services/apiIntegrationService.js';

export const getExternalApiData = async (req, res) => {
  try {
    const data = await fetchExternalApiData();
    res.status(200).json({
      success: true,
      data,
    });
	} catch (error) {
		const statusCode = error.statusCode || 500;
		return response.status(statusCode).send({
			statusCode: statusCode,
			message: error.message || 'Erro interno do servidor.',
		});
	}
};
