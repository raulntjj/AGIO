import axios from 'axios';

export const fetchExternalApiData = async () => {
  try {
		// Api selecionada foi: Json Placholder
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

    return response.data;
  } catch (error) {
    throw new Error(
      `Erro na requisição: ${error.response?.status} - ${error.message}`
    );
  }
};
