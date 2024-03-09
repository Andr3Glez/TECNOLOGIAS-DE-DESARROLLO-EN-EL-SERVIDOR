
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { engine } = require('express-handlebars');
const path = require('path');
const routes = require('./src/routes');
const app = express();


app.engine('handlebars', engine({
  layoutsDir: path.join(__dirname, 'src', 'views', 'layouts'),
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'src', 'views', 'partials'));

app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión a MongoDB exitosa'))
  .catch(err => console.error('Error al conectar a MongoDB', err));

app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

const port = process.env.PORT || 3000; 
app.listen(port, () => {
  console.log(`Conectado en el puerto ${port}`);
});
