import * as userService from '../services/userService.js';

// Funcao controladora para listar todos usuários
export const getUsers = async (request, response) => {
	try {
		const users = await userService.listUsers();
		return response.send({
			statusCode: 200,
			message : 'Usuários recuperados com sucesso!',
			payload : users
		});
	} catch (error) {
		const statusCode = error.statusCode || 500;
		return response.status(statusCode).send({
			statusCode: statusCode,
			message: error.message || 'Erro interno do servidor.',
		});
	}
};
  