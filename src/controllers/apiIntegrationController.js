import fetchExternalApiData from '../services/apiIntegrationService.js';

export const getExternalApiData = async (req, res) => {
  try {
    const data = await fetchExternalApiData();
    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar dados da API externa.',
      error: error.message, 
    });
  }
};
