import fastify from 'fastify';
import userRoutes from './routes/userRoutes.js';
import staticRoutes from './routes/staticRoutes.js';
import apiIntegrationRoutes from './routes/apiIntegrationRoutes.js';
import simulationRoutes from './routes/simulationRoutes.js';
import prisma from './libs/prisma.js';
import dotenv from 'dotenv';
dotenv.config();

const app = fastify({ logger: true });

// Libs
app.register(prisma);

// Routes
app.register(staticRoutes, { prefix: '/api/v1' });
app.register(simulationRoutes, { prefix: '/api/v1' });
app.register(apiIntegrationRoutes, { prefix: '/api/v1' });
app.register(userRoutes, { prefix: '/api/v1' });

// Rota para testar resposta da API
app.get('/ping', (request, response) => {
	return response.code(200).send({
		ping : 'pong',
	})
});

// Rota raiz
app.get('/', (request, response) => {
	return response.code(200).send({
    status : 'OK',
    route : '/',
  	method : 'GET',
    api : 'Fastify',
		version : '1.0.0 (v1)',
	})
});

const start = async () => {
	try {
		// Configuracoes de portas do servidor
		const port = process.env.PORT;
		await app.listen({ port });
		console.log('Servidor rodando na porta ' + port);
	} catch (error) {
		app.log.error(error);
		process.exit(1);
	}
};

start();