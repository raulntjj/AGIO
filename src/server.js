import fastify from 'fastify';
import userRoutes from './routes/userRoutes.js';
import staticRoutes from './routes/staticRoutes.js';
import apiIntegrationRoutes from './routes/apiIntegrationRoutes.js';
import simulationRoutes from './routes/simulationRoutes.js';
import prisma from './libs/prisma.js';
import dotenv from 'dotenv';
dotenv.config();

// import swagger from './libs/swagger.js';

const app = fastify({ logger: true });

// Libs
app.register(prisma);
// app.register(swagger);

// Routes
app.register(staticRoutes, { prefix: '/api/v1' });
app.register(simulationRoutes, { prefix: '/api/v1' });
app.register(apiIntegrationRoutes, { prefix: '/api/v1' });
// app.register(authRoutes, { prefix: '/api/v1' });
app.register(userRoutes, { prefix: '/api/v1' });

app.get('/ping', (request, response) => {
	return response.code(200).send({
		ping : 'pong',
	})
});

app.get('/', (request, response) => {
	return response.code(200).send({
		API : 'AGIO Teste',
	})
});

const start = async () => {
	try {
		// Configuracoes de portas do servidor
		const port = process.env.PORT || 3002;
		await app.listen({ port : 3002 });
		console.log('Servidor rodando na porta ' + port);
	} catch (error) {
		app.log.error(error);
		process.exit(1);
	}
};

start();