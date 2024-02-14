const express = require('express');
const dotenv = require('dotenv');
const usersRoutes = require('./routes/usersRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/users', usersRoutes);

app.listen(PORT, () => {
  console.log(`Corriendo en el puerto ${PORT}`);
});
