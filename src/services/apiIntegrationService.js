export const fetchExternalApiData = async () => {
	try {
		// API externa selecionada foi a JSON Placeholder
		const response = await fetch('https://jsonplaceholder.typicode.com/posts');
		if (!response.ok) {
			throw new Error('Erro ao buscar dados');
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Erro no serviço:', error.message);
		throw error;
	}
};
  