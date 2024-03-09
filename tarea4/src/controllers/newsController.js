const axios = require('axios');
async function getNews(query) {
  try {
    const apiKey = process.env.NEWS_API_KEY;
    const apiUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;
    const response = await axios.get(apiUrl);
    return response.data.articles;
  } catch (error) {
    console.error('Error al obtener noticias:', error.message);
    return [];
  }
}

module.exports = { getNews };
