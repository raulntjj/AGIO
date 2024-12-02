import axios from 'axios';

export const fetchExternalApiData = async () => {
  try {
    // Faz a requisição GET para a API
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

    // Retorna os dados no campo `data`
    return response.data;
  } catch (error) {
    // Lança um erro com a mensagem apropriada e o status se disponível
    throw new Error(
      `Erro na requisição: ${error.response?.status} - ${error.message}`
    );
  }
};
