const router = require('express').Router();
const path = require('path');
const axios = require('axios');

// Ruta raíz para mostrar el campo de búsqueda
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Titulo dinamico'
    });
});

// Ruta para la página busqueda
router.get('/searchs', (req, res) => {
    res.render('searchs');
});

// Ruta para manejar el inicio de sesión
router.get('/login', (req, res) => {
    res.render('login');
});

// Ruta para la página de registro
router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/search', (req, res) => {
  const query = req.body.query; 
  const date = new Date();
  date.setDate(date.getDate() - 1);
  const dateString = date.toISOString().split('T')[0];
  const url = 'https://newsapi.org/v2/everything?' +
              'q=' + query + '&' +
              'from=' + dateString + '&' + 
              'sortBy=popularity&' +
              'apiKey=' + process.env.NEWS_API_KEY;

  axios.get(url)
      .then(response => {
          res.render('news', { articles: response.data.articles });
      })
      .catch(error => {
          console.log(error);
      });
});

module.exports = router;
