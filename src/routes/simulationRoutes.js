export default async (app) => {
	// 200 OK
	app.post('/200', async (request, response) => {
		return response.status(200).send({
			statusCode: 200,
			message: 'Requisição bem-sucedida!',
		});
	});

	// 301 Moved Permanently
	app.post('/301', async (request, response) => {
		return response.status(301).redirect('https://google.com');
	});

	// Not Found
	app.post('/404', async (request, response) => {
		return response.status(404).send({
			statusCode: 404,
			message: 'Recurso não encontrado!',
		});
	});
};