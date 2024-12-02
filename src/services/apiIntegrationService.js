import fetch from 'node-fetch';


export const fetchExternalApiData = async () => {
	try {
		// Fazer a requisição GET para a API
		const response = await fetch('https://jsonplaceholder.typicode.com/posts');

		// Verificar se o status da resposta é 2xx
		if (!response.ok) {
			throw new Error(`Erro ao buscar dados: Status ${response.status}`);
		}

		// Retornar os dados convertidos para JSON
		return await response.json();
	} catch (error) {
		// Lidar com erros (lançar para o chamador tratar)
		throw new Error(`Erro na requisição: ${error.message}`);
	}
};