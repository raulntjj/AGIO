export const getStaticData = async (request, response) => {
  try {
    const data = [
			{ id: 1, name: "Item 1" },
			{ id: 2, name: "Item 2" },
		];

    return response.status(200).send({
      statusCode: 200,
      message : 'Dados estáticos mockados recuperados com sucesso!',
      payload : data
    });
	} catch (error) {
		const statusCode = error.statusCode || 500;
		return response.status(statusCode).send({
			statusCode: statusCode,
			message: error.message || 'Erro interno do servidor.',
		});
	}
};
