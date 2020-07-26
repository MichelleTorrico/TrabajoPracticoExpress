const express = require ('express');
const app = express();

app.listen(3000, () => console.log ('El servidor está funcionando en el puerto 3000'));

const rutaHome = require('./routes/home');
const rutaSucursales = require ('./routes/sucursales');
const rutaMarcas = require('./routes/marcas');
const rutaAutos = require ('./routes/autos');

app.use ('/', rutaHome);
app.use ('/sucursales', rutaSucursales);
app.use ('/marcas', rutaMarcas);
app.use ('/autos', rutaAutos);

app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Lo sentimos, la dirección ingresada no existe!');
});

