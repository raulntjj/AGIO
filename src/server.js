import fastify from 'fastify';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import prisma from './libs/prisma.js';
import swagger from './libs/swagger.js';
import jwtPlugin from './libs/jwt.js';
import utilityRoutes from './routes/utilityRoutes.js';

const app = fastify({ logger: true });

// Libs
app.register(prisma);
app.register(jwtPlugin);
app.register(swagger);

// Routes
app.register(utilityRoutes);
app.register(authRoutes, { prefix: '/auth/v1' });
app.register(userRoutes, { prefix: '/api/v1' });

const start = async () => {
	try {
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