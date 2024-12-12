const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'biblioteca'
});

db.connect(err => {
  if (err) {
    console.error('Error al conectar con la base de datos:', err);
    return;
  }
  console.log('');
});

app.get('/', (req, res) => {
  res.send('API de Biblioteca funcionando.');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
const usuariosRoutes = require('./routes/usuarios');
app.use('/usuarios', usuariosRoutes);

const autoresRoutes = require('./routes/autores');
app.use('/autores', autoresRoutes);

const librosRoutes = require('./routes/libros');
app.use('/libros', librosRoutes);

const autorlibroRoutes = require('./routes/autor_libro');
app.use('/autor_libro', autorlibroRoutes);

const prestamosRoutes = require('./routes/prestamos');
app.use('/prestamos', prestamosRoutes);