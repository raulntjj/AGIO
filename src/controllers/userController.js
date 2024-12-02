import * as userModels from '../models/userModels'´

export const getExternalApiData = async (request, response => {
	try {
		const users =  userModel.getAllUsers();
		return response.status(201).send({
			statusCode: 201,
			message : 'Dados estáticos mockados recuperado com sucesso!',
			payload : users
		});
	} catch (error) {
		const statusCode = error.statusCode || 500;
		return response.status(statusCode).send({
				statusCode: statusCode,
				message: error.message || 'Erro interno do servidor.',
		});
	}
});
  