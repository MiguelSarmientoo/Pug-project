const express = require('express');
const app = express();

// Configuración de Pug
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

// Configuración de Handlebars (HBS)
// app.set('view engine', 'hbs');
// app.set('views', __dirname + '/views');

// Configuración de EJS
// app.set('view engine', 'ejs');
// app.set('views', __dirname + '/views');

// Ruta para servir la página
app.get('/', (req, res) => {
  res.render('index');
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
