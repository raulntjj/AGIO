export const getExternalApiData = async (request, response => {
	try {
		const api_url = process.env.API_URL;
		return response.status(201).send({
			statusCode: 201,
			message : 'Dados estáticos mockados recuperado com sucesso!',
			payload : data
		});
	} catch (error) {
		const statusCode = error.statusCode || 500;
		return response.status(statusCode).send({
				statusCode: statusCode,
				message: error.message || 'Erro interno do servidor.',
		});
	}
});
  