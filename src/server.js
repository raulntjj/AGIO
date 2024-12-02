import fastify from 'fastify';
import userRoutes from './routes/userRoutes.js';
import staticRoutes from './routes/staticRoutes.js';
import apiIntegration from './routes/apiIntegration.js';
import prisma from './libs/prisma.js';
import swagger from './libs/swagger.js';

const app = fastify({ logger: true });

// Libs
app.register(prisma);
app.register(swagger);

// Routes
app.register(staticRoutes, { prefix: '/api/v1' });
app.register(apiIntegration, { prefix: '/api/v1' });
app.register(authRoutes, { prefix: '/api/v1' });
app.register(userRoutes, { prefix: '/api/v1' });

const start = async () => {
	try {
		// Configuracoes de portas do servidor
		const port = process.env.PORT || 3000;
		const host = process.env.PORT || '0.0.0.0';
		await app.listen({ port, host });
		console.log('Servidor rodando na porta ' + port);
	} catch (error) {
		app.log.error(error);
		process.exit(1);
	}
};

start();