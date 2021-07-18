const express = require('express');
const app = express();

// Configuración
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// Rutas
const groupsRouter = require('./routes/groups');
const usersRouter = require('./routes/users');

app.get('/', (req, res) => res.redirect('/groups/'));
app.get('/', (req, res) => res.redirect('/users/'));
app.use('/groups', groupsRouter);
app.use('/users', usersRouter);

// Servidor
app.listen(5000, () => { console.log('Servidor funcionando en el puerto 5000.') })