const express = require('express');
const mongoose = require('mongoose');

require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/tarea-3', require('./src/routes'));
app.use(express.json());

async function start() {
    try {
        await mongoose.connect(process.env.DB_MONGO);
        app.listen(PORT, () => {
            console.log('Corriendo en el puerto ' + PORT);
        });
    } catch (error) {
        console.error('Error al conectarse a la base de datos:', error);
    }
}

start();
